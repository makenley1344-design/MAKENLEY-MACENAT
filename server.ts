import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.json({ limit: '25mb' }));

// Cloudinary Configuration using user credentials
const cloudName = process.env.CLOUDINARY_CLOUD_NAME || 'us9eqj6r';
const apiKey = process.env.CLOUDINARY_API_KEY || '844813378833238';
const apiSecret = process.env.CLOUDINARY_API_SECRET || '';

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret
});

// Cloudinary Status & Config Endpoint
app.get('/api/cloudinary/config', (req, res) => {
  res.json({
    cloudName,
    apiKey,
    hasSecret: !!apiSecret && apiSecret !== '<your_api_secret>'
  });
});

// Cloudinary Upload Endpoint
app.post('/api/cloudinary/upload', async (req, res) => {
  try {
    const { image, public_id, folder = 'makenley_portfolio' } = req.body;

    if (!image) {
      return res.status(400).json({ error: 'Image data is required' });
    }

    if (!apiSecret || apiSecret === '<your_api_secret>') {
      return res.status(400).json({ 
        error: 'CLOUDINARY_API_SECRET non configuré. Veuillez renseigner le secret Cloudinary dans l\'environnement.',
        needsSecret: true
      });
    }

    // Upload an image with cloudinary uploader
    const uploadResult = await cloudinary.uploader.upload(image, {
      public_id: public_id || undefined,
      folder,
      overwrite: true,
      resource_type: 'auto'
    });

    // Optimize delivery by resizing and applying auto-format and auto-quality
    const optimizeUrl = cloudinary.url(uploadResult.public_id, {
      fetch_format: 'auto',
      quality: 'auto'
    });

    // Transform the image: auto-crop to square aspect_ratio
    const autoCropUrl = cloudinary.url(uploadResult.public_id, {
      crop: 'auto',
      gravity: 'auto',
      width: 500,
      height: 500,
      fetch_format: 'auto',
      quality: 'auto'
    });

    res.json({
      success: true,
      result: uploadResult,
      optimizeUrl,
      autoCropUrl
    });
  } catch (error: any) {
    console.error('Cloudinary upload error:', error);
    res.status(500).json({ 
      error: error.message || 'Erreur lors de l\'envoi vers Cloudinary' 
    });
  }
});

// Vite Middleware & Static Serving
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { 
        middlewareMode: true,
        watch: process.env.DISABLE_HMR === 'true' ? null : {}
      },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${port}`);
  });
}

startServer();
