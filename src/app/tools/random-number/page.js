"use client";
import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Hash, Shuffle } from 'lucide-react';
import { useToast } from '@/components/ui/toast';

const RandomNumber = () => {
  const { addToast } = useToast();
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [count, setCount] = useState(1);
  const [results, setResults] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateNumbers = () => {
    if (min >= max) {
      addToast('Le minimum doit être inférieur au maximum', 'error');
      return;
    }

    setIsGenerating(true);
    
    setTimeout(() => {
      const numbers = Array.from({ length: count }, () => 
        Math.floor(Math.random() * (max - min + 1)) + min
      );
      setResults(numbers);
      setIsGenerating(false);
      addToast(`${count} nombre(s) généré(s) avec succès !`, 'success');
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden border-4 border-black">
        <CardHeader className="bg-blue-300 text-white font-bold py-4 px-6">
          <div className="flex items-center">
            <Hash className="mr-2 h-6 w-6" />
            Générateur de nombres aléatoires
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="mb-4">
            <label htmlFor="min" className="block text-sm font-medium text-gray-700 mb-1">
              Minimum
            </label>
            <Input
              id="min"
              type="number"
              value={min}
              onChange={(e) => setMin(parseInt(e.target.value) || 0)}
              className="w-full p-2 border-2 border-black rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="max" className="block text-sm font-medium text-gray-700 mb-1">
              Maximum
            </label>
            <Input
              id="max"
              type="number"
              value={max}
              onChange={(e) => setMax(parseInt(e.target.value) || 0)}
              className="w-full p-2 border-2 border-black rounded"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="count" className="block text-sm font-medium text-gray-700 mb-1">
              Quantité de nombres
            </label>
            <Input
              id="count"
              type="number"
              min="1"
              max="50"
              value={count}
              onChange={(e) => setCount(Math.min(50, Math.max(1, parseInt(e.target.value) || 1)))}
              className="w-full p-2 border-2 border-black rounded"
            />
          </div>

          <Button
            onClick={generateNumbers}
            disabled={isGenerating}
            className="bg-blue-300 hover:bg-blue-400 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 w-full mb-4"
          >
            <Shuffle className="mr-2 h-5 w-5 inline" />
            {isGenerating ? 'Génération...' : 'Générer'}
          </Button>

          {results.length > 0 && (
            <div className="mt-6">
              <h3 className="font-bold mb-3 text-center">Résultats</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {results.map((num, index) => (
                  <div
                    key={index}
                    className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-lg border-2 border-black flex items-center justify-center font-bold text-xl shadow-lg"
                  >
                    {num}
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400 rounded-full opacity-50 transform -translate-x-16 -translate-y-16 z-0"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-pink-500 rounded-lg opacity-50 transform translate-x-24 translate-y-24 rotate-12 z-0"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-green-400 opacity-50 transform -translate-y-1/2 rotate-45 z-0"></div>
    </div>
  );
};

export default RandomNumber;
