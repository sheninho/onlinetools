"use client";
import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Braces, Copy, Volume2 } from 'lucide-react';
import { useToast } from '@/components/ui/toast';

const morseCode = {
  'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
  'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
  'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
  'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
  'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---',
  '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
  '8': '---..', '9': '----.', ' ': '/'
};

const reverseMorseCode = Object.fromEntries(
  Object.entries(morseCode).map(([key, value]) => [value, key])
);

const MorseConverter = () => {
  const { addToast } = useToast();
  const [text, setText] = useState('');
  const [morse, setMorse] = useState('');
  const [mode, setMode] = useState('toMorse');

  const textToMorse = (input) => {
    return input
      .toUpperCase()
      .split('')
      .map(char => morseCode[char] || char)
      .join(' ');
  };

  const morseToText = (input) => {
    return input
      .split(' ')
      .map(code => reverseMorseCode[code] || code)
      .join('');
  };

  const convert = () => {
    if (!text.trim()) {
      addToast('Veuillez entrer du texte', 'warning');
      return;
    }

    if (mode === 'toMorse') {
      const converted = textToMorse(text);
      setMorse(converted);
      addToast('Converti en morse avec succès !', 'success');
    } else {
      const converted = morseToText(text);
      setMorse(converted);
      addToast('Converti en texte avec succès !', 'success');
    }
  };

  const copyResult = () => {
    if (!morse) {
      addToast('Rien à copier', 'warning');
      return;
    }
    navigator.clipboard.writeText(morse);
    addToast('Copié dans le presse-papiers !', 'success');
  };

  const playMorse = () => {
    if (!morse || mode === 'toText') {
      addToast('Aucun code morse à jouer', 'warning');
      return;
    }
    addToast('Lecture du morse...', 'info');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden border-4 border-black">
        <CardHeader className="bg-rose-500 text-white font-bold py-4 px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Braces className="mr-2 h-6 w-6" />
              Conversion en Morse
            </div>
            <Button onClick={copyResult} className="bg-white text-rose-500 hover:bg-gray-100 p-2 rounded-full">
              <Copy size={20} />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="mb-4">
            <div className="flex gap-2 mb-4">
              <Button
                onClick={() => setMode('toMorse')}
                className={`${mode === 'toMorse' ? 'bg-rose-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-rose-400 font-bold py-2 px-4 rounded transition flex-1`}
              >
                Texte → Morse
              </Button>
              <Button
                onClick={() => setMode('toText')}
                className={`${mode === 'toText' ? 'bg-rose-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-rose-400 font-bold py-2 px-4 rounded transition flex-1`}
              >
                Morse → Texte
              </Button>
            </div>

            <label className="block text-sm font-medium text-gray-700 mb-1">
              {mode === 'toMorse' ? 'Texte à convertir' : 'Code morse (séparez les lettres par des espaces)'}
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={mode === 'toMorse' ? 'Entrez votre texte...' : 'Ex: .... . .-.. .-.. ---'}
              className="w-full h-32 p-4 border-2 border-black rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>

          <Button
            onClick={convert}
            className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 w-full mb-4"
          >
            Convertir
          </Button>

          {morse && (
            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Résultat
                </label>
                {mode === 'toMorse' && (
                  <Button
                    onClick={playMorse}
                    className="bg-rose-500 hover:bg-rose-600 text-white p-2 rounded-full"
                  >
                    <Volume2 size={16} />
                  </Button>
                )}
              </div>
              <div className="p-4 bg-rose-100 rounded-lg border-2 border-rose-500">
                <p className="text-lg font-mono break-all">{morse}</p>
              </div>
            </div>
          )}

          <div className="mt-6 p-4 bg-gray-100 rounded-lg border-2 border-gray-300">
            <h3 className="font-bold mb-2 text-sm">Guide rapide</h3>
            <div className="grid grid-cols-5 gap-2 text-xs">
              {Object.entries(morseCode).slice(0, 10).map(([letter, code]) => (
                <div key={letter} className="text-center">
                  <span className="font-bold">{letter}</span>: {code}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400 rounded-full opacity-50 transform -translate-x-16 -translate-y-16 z-0"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-pink-500 rounded-lg opacity-50 transform translate-x-24 translate-y-24 rotate-12 z-0"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-500 opacity-50 transform -translate-y-1/2 rotate-45 z-0"></div>
    </div>
  );
};

export default MorseConverter;
