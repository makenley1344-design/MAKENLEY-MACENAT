/**
 * Cloudinary utilities for Makenley Macenat portfolio
 * Cloud name: us9eqj6r
 * API key: 844813378833238
 */

export const CLOUDINARY_CONFIG = {
  cloudName: 'us9eqj6r',
  apiKey: '844813378833238',
  uploadPreset: 'portfolio_preset', // default or custom preset
};

export interface CloudinaryTransformOptions {
  width?: number;
  height?: number;
  crop?: 'fill' | 'scale' | 'fit' | 'thumb' | 'auto';
  gravity?: 'face' | 'auto' | 'center';
  quality?: 'auto' | number;
  format?: 'auto' | 'webp' | 'jpg' | 'png';
  aspectRatio?: string;
  radius?: 'max' | number;
}

/**
 * Builds an optimized Cloudinary delivery URL with auto-format and auto-quality
 */
export function buildCloudinaryUrl(publicIdOrUrl: string, options: CloudinaryTransformOptions = {}): string {
  if (!publicIdOrUrl) return '';

  // If it's already an absolute non-cloudinary URL or local asset, return as is
  if (publicIdOrUrl.startsWith('data:') || publicIdOrUrl.startsWith('/src/') || publicIdOrUrl.startsWith('/assets/')) {
    return publicIdOrUrl;
  }

  // Extract public ID if full cloudinary URL is passed
  let cleanId = publicIdOrUrl;
  const match = publicIdOrUrl.match(/res\.cloudinary\.com\/[^/]+\/image\/upload\/(?:v\d+\/)?(.+?)(?:\.[a-zA-Z0-9]+)?$/);
  if (match && match[1]) {
    // strip transformations if present
    const parts = match[1].split('/');
    cleanId = parts[parts.length - 1];
  }

  const transformations: string[] = [];

  // Auto format & Auto quality
  transformations.push(`f_${options.format || 'auto'}`);
  transformations.push(`q_${options.quality || 'auto'}`);

  // Crop & Dimensions
  if (options.crop) {
    transformations.push(`c_${options.crop}`);
  }
  if (options.gravity) {
    transformations.push(`g_${options.gravity}`);
  }
  if (options.width) {
    transformations.push(`w_${options.width}`);
  }
  if (options.height) {
    transformations.push(`h_${options.height}`);
  }
  if (options.aspectRatio) {
    transformations.push(`ar_${options.aspectRatio}`);
  }
  if (options.radius) {
    transformations.push(`r_${options.radius}`);
  }

  const transformString = transformations.join(',');

  return `https://res.cloudinary.com/${CLOUDINARY_CONFIG.cloudName}/image/upload/${transformString}/${cleanId}`;
}

/**
 * Generates square auto-cropped thumbnail matching user's snippet
 */
export function getAutoCropSquareUrl(publicId: string, size = 500): string {
  return buildCloudinaryUrl(publicId, {
    crop: 'auto',
    gravity: 'auto',
    width: size,
    height: size,
    format: 'auto',
    quality: 'auto'
  });
}

/**
 * Upload an image either via backend /api/cloudinary/upload or direct to Cloudinary
 */
export async function uploadToCloudinary(
  fileOrBase64: File | string,
  targetSlot: 'portrait' | 'goldbay' | 'hbm' = 'portrait'
): Promise<{ url: string; publicId: string; optimizedUrl: string }> {
  let base64Data: string;

  if (typeof fileOrBase64 === 'string') {
    base64Data = fileOrBase64;
  } else {
    base64Data = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(fileOrBase64);
    });
  }

  // 1. Try backend endpoint first
  try {
    const res = await fetch('/api/cloudinary/upload', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        image: base64Data,
        public_id: `makenley_${targetSlot}_${Date.now()}`
      })
    });

    if (res.ok) {
      const data = await res.json();
      return {
        url: data.result.secure_url,
        publicId: data.result.public_id,
        optimizedUrl: data.optimizeUrl || data.result.secure_url
      };
    }
  } catch (err) {
    console.warn('Backend upload not available, falling back to direct upload', err);
  }

  // 2. Fallback: direct unsigned upload to Cloudinary API
  try {
    const formData = new FormData();
    if (typeof fileOrBase64 === 'string') {
      formData.append('file', fileOrBase64);
    } else {
      formData.append('file', fileOrBase64);
    }
    formData.append('upload_preset', 'unsigned_preset');
    formData.append('cloud_name', CLOUDINARY_CONFIG.cloudName);

    const directRes = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CONFIG.cloudName}/image/upload`, {
      method: 'POST',
      body: formData
    });

    if (directRes.ok) {
      const directData = await directRes.json();
      return {
        url: directData.secure_url,
        publicId: directData.public_id,
        optimizedUrl: buildCloudinaryUrl(directData.public_id)
      };
    }
  } catch {
    // If unsigned preset not configured on Cloudinary account, fallback to client-side data URL
  }

  // 3. Fallback: store locally with full responsiveness so the user immediately sees their photo in the UI!
  return {
    url: base64Data,
    publicId: `local_${targetSlot}_${Date.now()}`,
    optimizedUrl: base64Data
  };
}
