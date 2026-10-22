/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { MethodologySection } from './components/MethodologySection';
import { ExperienceSection } from './components/ExperienceSection';
import { VisionSection } from './components/VisionSection';
import { EducationAndSkills } from './components/EducationAndSkills';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InteractivePitch } from './components/InteractivePitch';
import { PrintCVModal } from './components/PrintCVModal';
import { CloudinaryMediaManager } from './components/CloudinaryMediaManager';

export default function App() {
  const [isPitchOpen, setIsPitchOpen] = useState(false);
  const [isPrintCVOpen, setIsPrintCVOpen] = useState(false);
  const [isCloudinaryOpen, setIsCloudinaryOpen] = useState(false);

  // Dynamic portfolio images with local persistence
  const [images, setImages] = useState({
    portrait: '/src/assets/images/makenley_portrait_1792678691629.jpg',
    hbm: '/src/assets/images/fire_safety_b2b_1792678691643.jpg',
    goldbay: '/src/assets/images/goldbay_fashion_1792678691429.jpg'
  });

  useEffect(() => {
    try {
      const savedPortrait = localStorage.getItem('makenley_portrait_img');
      const savedHbm = localStorage.getItem('makenley_hbm_img');
      const savedGoldbay = localStorage.getItem('makenley_goldbay_img');
      if (savedPortrait || savedHbm || savedGoldbay) {
        setImages({
          portrait: savedPortrait || '/src/assets/images/makenley_portrait_1792678691629.jpg',
          hbm: savedHbm || '/src/assets/images/fire_safety_b2b_1792678691643.jpg',
          goldbay: savedGoldbay || '/src/assets/images/goldbay_fashion_1792678691429.jpg'
        });
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const handleUpdateImage = (slot: 'portrait' | 'hbm' | 'goldbay', newUrl: string) => {
    setImages(prev => {
      const updated = { ...prev, [slot]: newUrl };
      try {
        localStorage.setItem(`makenley_${slot}_img`, newUrl);
      } catch {
        // Ignore localStorage error
      }
      return updated;
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-900 selection:text-white">
      {/* Top Bar following 3-Zone Contract */}
      <Navbar 
        onOpenPrintCV={() => setIsPrintCVOpen(true)}
        onOpenCloudinary={() => setIsCloudinaryOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero 
          portraitImage={images.portrait}
          onOpenPitch={() => setIsPitchOpen(true)}
          onOpenPrintCV={() => setIsPrintCVOpen(true)}
          onOpenCloudinary={() => setIsCloudinaryOpen(true)}
        />
        <AboutSection />
        <MethodologySection />
        <ExperienceSection 
          images={{ hbm: images.hbm, goldbay: images.goldbay }}
          onOpenCloudinary={() => setIsCloudinaryOpen(true)}
        />
        <VisionSection />
        <EducationAndSkills />
        <ContactSection />
      </main>

      {/* Clean Footer */}
      <Footer onOpenPrintCV={() => setIsPrintCVOpen(true)} />

      {/* Interactive Modals */}
      <InteractivePitch 
        isOpen={isPitchOpen} 
        onClose={() => setIsPitchOpen(false)} 
      />
      
      <PrintCVModal 
        isOpen={isPrintCVOpen} 
        onClose={() => setIsPrintCVOpen(false)} 
      />

      {/* Cloudinary Media & Photos Manager */}
      <CloudinaryMediaManager
        isOpen={isCloudinaryOpen}
        onClose={() => setIsCloudinaryOpen(false)}
        onUpdateImage={handleUpdateImage}
        currentImages={images}
      />
    </div>
  );
}
