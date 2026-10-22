import React, { useState, useEffect } from 'react';
import { X, Upload, Cloud, Image as ImageIcon, Sparkles, Check, RefreshCw, ExternalLink, ShieldCheck, ArrowRight } from 'lucide-react';
import { CLOUDINARY_CONFIG, buildCloudinaryUrl, getAutoCropSquareUrl, uploadToCloudinary } from '../utils/cloudinary';

interface CloudinaryMediaManagerProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdateImage: (slot: 'portrait' | 'hbm' | 'goldbay', newUrl: string) => void;
  currentImages: {
    portrait: string;
    hbm: string;
    goldbay: string;
  };
}

export const CloudinaryMediaManager: React.FC<CloudinaryMediaManagerProps> = ({
  isOpen,
  onClose,
  onUpdateImage,
  currentImages
}) => {
  const [selectedSlot, setSelectedSlot] = useState<'portrait' | 'hbm' | 'goldbay'>('portrait');
  const [fileToUpload, setFileToUpload] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [publicIdInput, setPublicIdInput] = useState<string>('');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Cloudinary transformed preview URLs based on snippet
  const [optimizedPreview, setOptimizedPreview] = useState<string>('');
  const [autoCropPreview, setAutoCropPreview] = useState<string>('');

  useEffect(() => {
    if (publicIdInput.trim()) {
      const opt = buildCloudinaryUrl(publicIdInput.trim());
      const crop = getAutoCropSquareUrl(publicIdInput.trim(), 400);
      setOptimizedPreview(opt);
      setAutoCropPreview(crop);
    } else {
      setOptimizedPreview('');
      setAutoCropPreview('');
    }
  }, [publicIdInput]);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFileToUpload(file);
      setPreviewUrl(URL.createObjectURL(file));
      setErrorMessage(null);
    }
  };

  const handleUpload = async () => {
    if (!fileToUpload && !publicIdInput) {
      setErrorMessage("Veuillez sélectionner un fichier image ou saisir un Public ID / URL Cloudinary.");
      return;
    }

    setIsUploading(true);
    setErrorMessage(null);
    setUploadSuccess(null);

    try {
      if (fileToUpload) {
        const res = await uploadToCloudinary(fileToUpload, selectedSlot);
        onUpdateImage(selectedSlot, res.optimizedUrl || res.url);
        setUploadSuccess(`Image transmise avec succès vers le slot ${selectedSlot.toUpperCase()} !`);
        setFileToUpload(null);
      } else if (publicIdInput) {
        const generatedUrl = buildCloudinaryUrl(publicIdInput.trim());
        onUpdateImage(selectedSlot, generatedUrl);
        setUploadSuccess(`Image Cloudinary "${publicIdInput}" appliquée avec succès !`);
      }
    } catch (err: any) {
      setErrorMessage(err.message || "Erreur lors de l'intégration Cloudinary");
    } finally {
      setIsUploading(false);
    }
  };

  const applyDemoShoe = () => {
    // Demonstration using the Cloudinary snippet provided by the user
    const shoePublicId = "shoes";
    setPublicIdInput(shoePublicId);
    const optimized = buildCloudinaryUrl(shoePublicId);
    setOptimizedPreview(optimized);
    setAutoCropPreview(getAutoCropSquareUrl(shoePublicId, 400));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-3xl w-full my-auto overflow-hidden flex flex-col max-h-[92vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cloudinary-title"
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-slate-900 text-white">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600/30 border border-blue-500/40 text-blue-400 flex items-center justify-center">
              <Cloud className="w-5 h-5" />
            </div>
            <div>
              <h3 id="cloudinary-title" className="text-base font-bold text-white flex items-center gap-2">
                <span>Gestionnaire Médias Cloudinary</span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-900/60 text-blue-200">
                  {CLOUDINARY_CONFIG.cloudName}
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Optimisation auto-format (f_auto), auto-quality (q_auto) et recadrage intelligent
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Target Slot Selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              1. Choisissez l'emplacement du portfolio à mettre à jour :
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setSelectedSlot('portrait')}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  selectedSlot === 'portrait'
                    ? 'border-blue-900 bg-blue-50/50 shadow-xs'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className="text-xs font-bold text-slate-900">Photo de profil</div>
                <div className="text-[11px] text-slate-500 mt-0.5">En-tête & CV de Makenley</div>
                <div className="mt-2 h-14 rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
                  <img src={currentImages.portrait} alt="Actuel" className="w-full h-full object-cover object-top" />
                </div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedSlot('goldbay')}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  selectedSlot === 'goldbay'
                    ? 'border-blue-900 bg-blue-50/50 shadow-xs'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className="text-xs font-bold text-slate-900">Book Goldbay</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Mode, vêtements & shooting</div>
                <div className="mt-2 h-14 rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
                  <img src={currentImages.goldbay} alt="Actuel" className="w-full h-full object-cover" />
                </div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedSlot('hbm')}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  selectedSlot === 'hbm'
                    ? 'border-blue-900 bg-blue-50/50 shadow-xs'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className="text-xs font-bold text-slate-900">Terrain HBM</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Sécurité incendie B2B</div>
                <div className="mt-2 h-14 rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
                  <img src={currentImages.hbm} alt="Actuel" className="w-full h-full object-cover" />
                </div>
              </button>
            </div>
          </div>

          {/* Upload or Public ID Input */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-4">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              2. Source de l'image Cloudinary :
            </label>

            {/* File Upload Zone */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <label className="w-full sm:w-auto flex-1 flex flex-col items-center justify-center p-4 border-2 border-dashed border-slate-300 hover:border-blue-900 rounded-xl cursor-pointer bg-white transition-colors">
                <Upload className="w-5 h-5 text-slate-500 mb-1" />
                <span className="text-xs font-semibold text-slate-800">Sélectionner une photo depuis votre appareil</span>
                <span className="text-[11px] text-slate-400">JPG, PNG, WebP</span>
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleFileChange} 
                  className="hidden" 
                />
              </label>

              <div className="text-xs text-slate-400 font-medium sm:px-2">OU</div>

              {/* Public ID direct input */}
              <div className="w-full sm:w-64 space-y-1">
                <div className="text-xs font-medium text-slate-700">Public ID ou URL Cloudinary :</div>
                <input
                  type="text"
                  placeholder="Ex: shoes ou mon_image"
                  value={publicIdInput}
                  onChange={(e) => setPublicIdInput(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-900 text-slate-900"
                />
                <button
                  type="button"
                  onClick={applyDemoShoe}
                  className="text-[11px] text-blue-900 hover:underline pt-0.5 block"
                >
                  Tester avec "shoes" (démo Cloudinary)
                </button>
              </div>
            </div>

            {/* Selected File Feedback */}
            {fileToUpload && (
              <div className="flex items-center justify-between p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-900">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Fichier prêt : <strong>{fileToUpload.name}</strong> ({(fileToUpload.size / 1024).toFixed(0)} Ko)</span>
                </div>
                <button 
                  onClick={() => { setFileToUpload(null); setPreviewUrl(''); }}
                  className="text-emerald-700 hover:text-emerald-950 font-bold"
                >
                  Retirer
                </button>
              </div>
            )}
          </div>

          {/* Cloudinary Live Transformation Preview */}
          {(previewUrl || optimizedPreview) && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                <Sparkles className="w-4 h-4 text-blue-900" />
                <span>Aperçu des transformations Cloudinary actives :</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Auto Optimize */}
                <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                  <div className="text-xs font-semibold text-slate-800 mb-1">
                    1. Delivery Optimisé (f_auto, q_auto)
                  </div>
                  <div className="h-36 rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
                    <img 
                      src={optimizedPreview || previewUrl} 
                      alt="Optimisé" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>

                {/* Auto Crop Square */}
                <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                  <div className="text-xs font-semibold text-slate-800 mb-1">
                    2. Auto-Crop Carré (c_auto, g_auto, 500x500)
                  </div>
                  <div className="h-36 rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
                    <img 
                      src={autoCropPreview || previewUrl} 
                      alt="Auto-crop" 
                      className="w-full h-full object-contain bg-slate-900/5" 
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Success or Error banners */}
          {uploadSuccess && (
            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{uploadSuccess}</span>
            </div>
          )}

          {errorMessage && (
            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-900">
              {errorMessage}
            </div>
          )}

        </div>

        {/* Footer actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 font-mono">
            Cloud: {CLOUDINARY_CONFIG.cloudName} · API Key: {CLOUDINARY_CONFIG.apiKey}
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200 rounded-lg transition-colors"
            >
              Fermer
            </button>

            <button
              type="button"
              onClick={handleUpload}
              disabled={isUploading || (!fileToUpload && !publicIdInput)}
              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-bold text-white bg-blue-900 hover:bg-blue-800 disabled:opacity-50 disabled:pointer-events-none rounded-lg shadow-sm transition-all"
            >
              {isUploading ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Envoi en cours...</span>
                </>
              ) : (
                <>
                  <Upload className="w-3.5 h-3.5" />
                  <span>Appliquer l'image Cloudinary</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
