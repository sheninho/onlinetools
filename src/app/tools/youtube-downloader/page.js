"use client";
import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Youtube } from 'lucide-react';

const YoutubeDownloader = () => {
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('');

  const handleDownload = async () => {
    try {
      const response = await fetch(`/api/download-youtube?url=${encodeURIComponent(youtubeUrl)}`);
      const data = await response.json();
      setDownloadUrl(data.downloadUrl);
    } catch (error) {
      console.error('Error downloading YouTube video:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden border-4 border-black">
        <CardHeader className="bg-blue-500 text-white font-bold py-4 px-6">
          <div className="flex items-center">
            <Youtube className="mr-2 h-6 w-6" />
            Téléchargeur YouTube
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="mb-6">
            <label htmlFor="youtube-url" className="block text-sm font-medium text-gray-700 mb-1">
              URL YouTube
            </label>
            <Input
              id="youtube-url"
              type="text"
              value={youtubeUrl}
              onChange={(e) => setYoutubeUrl(e.target.value)}
              className="w-full p-2 border-2 border-black rounded"
            />
          </div>
          <Button
            onClick={handleDownload}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            Télécharger
          </Button>
          {downloadUrl && (
            <div className="mt-6 text-center">
              <p className="text-lg font-medium">Lien de téléchargement:</p>
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 font-bold"
              >
                {downloadUrl}
              </a>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Éléments décoratifs néo-Memphis */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500 rounded-full opacity-50 transform translate-x-16 -translate-y-16 z-0"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-400 rounded-lg opacity-50 transform -translate-x-24 translate-y-24 rotate-12 z-0"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-green-400 opacity-50 transform -translate-y-1/2 rotate-45 z-0"></div>
    </div>
  );
};

export default YoutubeDownloader;