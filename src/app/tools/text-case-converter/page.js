"use client";
import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Type, Copy } from 'lucide-react';

const TextCaseConverter = () => {
  const [text, setText] = useState('');

  const convertCase = (type) => {
    switch (type) {
      case 'upper':
        setText(text.toUpperCase());
        break;
      case 'lower':
        setText(text.toLowerCase());
        break;
      case 'title':
        setText(text.toLowerCase().replace(/\b\w/g, l => l.toUpperCase()));
        break;
      case 'sentence':
        setText(text.toLowerCase().replace(/(^\w|\.\s+\w)/g, l => l.toUpperCase()));
        break;
      case 'toggle':
        setText(text.split('').map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join(''));
        break;
      default:
        break;
    }
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden border-4 border-black">
        <CardHeader className="bg-fuchsia-400 text-white font-bold py-4 px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Type className="mr-2 h-6 w-6" />
              Convertisseur de casse
            </div>
            <Button onClick={copyText} className="bg-white text-fuchsia-400 hover:bg-gray-100 p-2 rounded-full">
              <Copy size={20} />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="mb-4">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Entrez votre texte ici..."
              className="w-full h-48 p-4 border-2 border-black rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <Button
              onClick={() => convertCase('upper')}
              className="bg-fuchsia-400 hover:bg-fuchsia-500 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              MAJUSCULES
            </Button>
            <Button
              onClick={() => convertCase('lower')}
              className="bg-purple-400 hover:bg-purple-500 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              minuscules
            </Button>
            <Button
              onClick={() => convertCase('title')}
              className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Titre
            </Button>
            <Button
              onClick={() => convertCase('sentence')}
              className="bg-indigo-400 hover:bg-indigo-500 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Phrase
            </Button>
            <Button
              onClick={() => convertCase('toggle')}
              className="bg-violet-400 hover:bg-violet-500 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              iNVERSER
            </Button>
            <Button
              onClick={() => setText('')}
              className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Effacer
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400 rounded-full opacity-50 transform -translate-x-16 -translate-y-16 z-0"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-pink-500 rounded-lg opacity-50 transform translate-x-24 translate-y-24 rotate-12 z-0"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-500 opacity-50 transform -translate-y-1/2 rotate-45 z-0"></div>
    </div>
  );
};

export default TextCaseConverter;
