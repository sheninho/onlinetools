"use client";
import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, RefreshCw } from 'lucide-react';

const QRCodeGenerator = () => {
  const [url, setUrl] = useState('');
  const [qrKey, setQrKey] = useState(Date.now());

  useEffect(() => {
    setQrKey(Date.now());
  }, [url]);

  const handleDownload = () => {
    const canvas = document.getElementById('qr-code');
    const pngUrl = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream');
    let downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = 'qrcode.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4 overflow-x-hidden">
      <Card className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden border-4 border-black">
        <CardContent className="p-6">
          <h1 className="text-3xl font-bold mb-6 text-center">Générateur de Code QR</h1>
          <div className="mb-6">
            <Input
              type="text"
              placeholder="Entrez l'URL ici"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full p-2 border-2 border-black rounded"
            />
          </div>
          <div className="flex justify-center mb-6">
            {url && (
              <div className="bg-yellow-200 p-4 rounded-lg shadow-inner">
                <QRCode
                  id="qr-code"
                  value={url}
                  size={200}
                  level="H"
                  includeMargin={true}
                  key={qrKey}
                />
              </div>
            )}
          </div>
          <div className="flex justify-center space-x-4">
            <Button
              onClick={handleDownload}
              disabled={!url}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              <Download className="mr-2 h-4 w-4" /> Télécharger
            </Button>
            <Button
              onClick={() => setUrl('')}
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              <RefreshCw className="mr-2 h-4 w-4" /> Réinitialiser
            </Button>
          </div>
        </CardContent>
      </Card>
      <div className="mt-8 text-center text-sm text-gray-500">
        &copy; 2024 QR Code Generator. Tous droits réservés.
      </div>
      {/* Éléments décoratifs néo-Memphis */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-full opacity-50 transform translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500 rounded-lg opacity-50 transform -translate-x-24 translate-y-24 rotate-12"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-500 opacity-50 transform -translate-y-1/2 rotate-45"></div>
    </div>
  );
};

export default QRCodeGenerator;