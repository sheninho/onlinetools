"use client";
import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Download, RefreshCw, Palette } from 'lucide-react';

const QRCodeGenerator = () => {
  const [url, setUrl] = useState('');
  const [qrKey, setQrKey] = useState(Date.now());
  const [size, setSize] = useState(200);
  const [bgColor, setBgColor] = useState('#FFFFFF');
  const [fgColor, setFgColor] = useState('#000000');

  useEffect(() => {
    setQrKey(Date.now());
  }, [url, size, bgColor, fgColor]);

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
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4 overflow-x-hidden">
      <Card className="w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden border-4 border-black my-8">
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
          <div className="flex flex-wrap -mx-2 mb-6">
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Taille</label>
              <Slider
                min={100}
                max={300}
                step={10}
                value={[size]}
                onValueChange={(value) => setSize(value[0])}
                className="w-full"
              />
            </div>
            <div className="w-full md:w-1/4 px-2 mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Couleur de fond</label>
              <div className="flex items-center">
                <Input
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="w-full h-10 p-1 border-2 border-black rounded"
                />
                <Palette className="ml-2 h-5 w-5 text-gray-500" />
              </div>
            </div>
            <div className="w-full md:w-1/4 px-2 mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Couleur du QR</label>
              <div className="flex items-center">
                <Input
                  type="color"
                  value={fgColor}
                  onChange={(e) => setFgColor(e.target.value)}
                  className="w-full h-10 p-1 border-2 border-black rounded"
                />
                <Palette className="ml-2 h-5 w-5 text-gray-500" />
              </div>
            </div>
          </div>
          <div className="flex justify-center mb-6">
            {url && (
              <div className="bg-yellow-200 p-4 rounded-lg shadow-inner" style={{ maxWidth: '100%', overflow: 'auto' }}>
                <QRCode
                  id="qr-code"
                  value={url}
                  size={size}
                  bgColor={bgColor}
                  fgColor={fgColor}
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
              onClick={() => {
                setUrl('');
                setSize(200);
                setBgColor('#FFFFFF');
                setFgColor('#000000');
              }}
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
      {/* <div className="fixed top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full opacity-50 transform translate-x-1/3 -translate-y-1/3 z-0"></div>
      <div className="fixed bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-lg opacity-50 transform -translate-x-1/3 translate-y-1/3 rotate-12 z-0"></div>
      <div className="fixed top-1/2 left-1/4 w-48 h-48 bg-pink-500 opacity-50 transform -translate-y-1/2 rotate-45 z-0"></div>
      <div className="fixed bottom-1/4 right-1/3 w-32 h-32 bg-green-400 rounded-full opacity-50 z-0"></div> */}
    </div>
  );
};

export default QRCodeGenerator;