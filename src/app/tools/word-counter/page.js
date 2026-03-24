"use client";
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Copy } from 'lucide-react';

const WordCounter = () => {
  const [text, setText] = useState('');
  const [stats, setStats] = useState({
    characters: 0,
    charactersNoSpaces: 0,
    words: 0,
    sentences: 0,
    paragraphs: 0,
    readingTime: 0
  });

  useEffect(() => {
    calculateStats();
  }, [text]);

  const calculateStats = () => {
    const characters = text.length;
    const charactersNoSpaces = text.replace(/\s/g, '').length;
    const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    const paragraphs = text.split(/\n\n+/).filter(p => p.trim().length > 0).length;
    const readingTime = Math.ceil(words / 200);

    setStats({
      characters,
      charactersNoSpaces,
      words,
      sentences,
      paragraphs,
      readingTime
    });
  };

  const clearText = () => {
    setText('');
  };

  const copyStats = () => {
    const statsText = `Caractères: ${stats.characters}\nCaractères (sans espaces): ${stats.charactersNoSpaces}\nMots: ${stats.words}\nPhrases: ${stats.sentences}\nParagraphes: ${stats.paragraphs}\nTemps de lecture: ${stats.readingTime} min`;
    navigator.clipboard.writeText(statsText);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden border-4 border-black">
        <CardHeader className="bg-teal-500 text-white font-bold py-4 px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FileText className="mr-2 h-6 w-6" />
              Compteur de mots
            </div>
            <Button onClick={copyStats} className="bg-white text-teal-500 hover:bg-gray-100 p-2 rounded-full">
              <Copy size={20} />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="mb-4">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Tapez ou collez votre texte ici..."
              className="w-full h-64 p-4 border-2 border-black rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-lg border-2 border-black">
              <div className="text-sm text-gray-700 font-medium">Caractères</div>
              <div className="text-2xl font-bold text-blue-600">{stats.characters}</div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 p-4 rounded-lg border-2 border-black">
              <div className="text-sm text-gray-700 font-medium">Sans espaces</div>
              <div className="text-2xl font-bold text-green-600">{stats.charactersNoSpaces}</div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-4 rounded-lg border-2 border-black">
              <div className="text-sm text-gray-700 font-medium">Mots</div>
              <div className="text-2xl font-bold text-purple-600">{stats.words}</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-4 rounded-lg border-2 border-black">
              <div className="text-sm text-gray-700 font-medium">Phrases</div>
              <div className="text-2xl font-bold text-yellow-600">{stats.sentences}</div>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-4 rounded-lg border-2 border-black">
              <div className="text-sm text-gray-700 font-medium">Paragraphes</div>
              <div className="text-2xl font-bold text-pink-600">{stats.paragraphs}</div>
            </div>
            <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 p-4 rounded-lg border-2 border-black">
              <div className="text-sm text-gray-700 font-medium">Lecture (min)</div>
              <div className="text-2xl font-bold text-indigo-600">{stats.readingTime}</div>
            </div>
          </div>

          <Button
            onClick={clearText}
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 w-full"
          >
            Effacer le texte
          </Button>
        </CardContent>
      </Card>

      <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400 rounded-full opacity-50 transform -translate-x-16 -translate-y-16 z-0"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-pink-500 rounded-lg opacity-50 transform translate-x-24 translate-y-24 rotate-12 z-0"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-blue-500 opacity-50 transform -translate-y-1/2 rotate-45 z-0"></div>
    </div>
  );
};

export default WordCounter;
