"use client";
import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Coins } from 'lucide-react';

const CoinFlip = () => {
  const [result, setResult] = useState(null);
  const [isFlipping, setIsFlipping] = useState(false);
  const [history, setHistory] = useState([]);

  const flipCoin = () => {
    setIsFlipping(true);
    setResult(null);

    setTimeout(() => {
      const flip = Math.random() < 0.5 ? 'Pile' : 'Face';
      setResult(flip);
      setHistory([flip, ...history.slice(0, 9)]);
      setIsFlipping(false);
    }, 1000);
  };

  const resetHistory = () => {
    setHistory([]);
    setResult(null);
  };

  const stats = {
    pile: history.filter(h => h === 'Pile').length,
    face: history.filter(h => h === 'Face').length
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden border-4 border-black">
        <CardHeader className="bg-green-600 text-white font-bold py-4 px-6">
          <div className="flex items-center">
            <Coins className="mr-2 h-6 w-6" />
            Pile ou Face
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex justify-center mb-6">
            <div className={`w-40 h-40 rounded-full border-8 border-yellow-400 bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center shadow-lg transition-all duration-1000 ${isFlipping ? 'animate-spin' : ''}`}>
              <div className="text-4xl font-black text-white">
                {result || '?'}
              </div>
            </div>
          </div>

          {result && !isFlipping && (
            <div className="text-center mb-6">
              <p className="text-3xl font-bold text-green-600">{result}!</p>
            </div>
          )}

          <Button
            onClick={flipCoin}
            disabled={isFlipping}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 w-full mb-4"
          >
            {isFlipping ? 'Lancement...' : 'Lancer la pièce'}
          </Button>

          {history.length > 0 && (
            <>
              <div className="mb-4 p-4 bg-gray-100 rounded-lg border-2 border-black">
                <h3 className="font-bold mb-2 text-center">Statistiques</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{stats.pile}</div>
                    <div className="text-sm text-gray-600">Pile</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">{stats.face}</div>
                    <div className="text-sm text-gray-600">Face</div>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="font-bold mb-2">Historique (10 derniers)</h3>
                <div className="flex flex-wrap gap-2">
                  {history.map((h, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-sm font-bold ${
                        h === 'Pile' ? 'bg-blue-200 text-blue-700' : 'bg-red-200 text-red-700'
                      }`}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              <Button
                onClick={resetHistory}
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 w-full"
              >
                Réinitialiser
              </Button>
            </>
          )}
        </CardContent>
      </Card>

      <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400 rounded-full opacity-50 transform -translate-x-16 -translate-y-16 z-0"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-green-500 rounded-lg opacity-50 transform translate-x-24 translate-y-24 rotate-12 z-0"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-blue-500 opacity-50 transform -translate-y-1/2 rotate-45 z-0"></div>
    </div>
  );
};

export default CoinFlip;
