"use client";
import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dice5, Plus, Minus } from 'lucide-react';

const DiceRoll = () => {
  const [diceCount, setDiceCount] = useState(1);
  const [results, setResults] = useState([]);
  const [isRolling, setIsRolling] = useState(false);
  const [total, setTotal] = useState(0);

  const rollDice = () => {
    setIsRolling(true);
    
    setTimeout(() => {
      const newResults = Array.from({ length: diceCount }, () => 
        Math.floor(Math.random() * 6) + 1
      );
      setResults(newResults);
      setTotal(newResults.reduce((sum, val) => sum + val, 0));
      setIsRolling(false);
    }, 500);
  };

  const getDiceFace = (value) => {
    const dotPositions = {
      1: [[50, 50]],
      2: [[25, 25], [75, 75]],
      3: [[25, 25], [50, 50], [75, 75]],
      4: [[25, 25], [75, 25], [25, 75], [75, 75]],
      5: [[25, 25], [75, 25], [50, 50], [25, 75], [75, 75]],
      6: [[25, 25], [75, 25], [25, 50], [75, 50], [25, 75], [75, 75]]
    };

    return (
      <div className="w-20 h-20 bg-white border-4 border-black rounded-lg shadow-lg relative">
        {dotPositions[value].map((pos, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-black rounded-full"
            style={{ left: `${pos[0]}%`, top: `${pos[1]}%`, transform: 'translate(-50%, -50%)' }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden border-4 border-black">
        <CardHeader className="bg-purple-400 text-white font-bold py-4 px-6">
          <div className="flex items-center">
            <Dice5 className="mr-2 h-6 w-6" />
            Lancer de dés
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nombre de dés: {diceCount}
            </label>
            <div className="flex items-center justify-center gap-4">
              <Button
                onClick={() => setDiceCount(Math.max(1, diceCount - 1))}
                className="bg-purple-400 hover:bg-purple-500 text-white p-2 rounded-full"
              >
                <Minus size={20} />
              </Button>
              <span className="text-3xl font-bold w-16 text-center">{diceCount}</span>
              <Button
                onClick={() => setDiceCount(Math.min(10, diceCount + 1))}
                className="bg-purple-400 hover:bg-purple-500 text-white p-2 rounded-full"
              >
                <Plus size={20} />
              </Button>
            </div>
          </div>

          <Button
            onClick={rollDice}
            disabled={isRolling}
            className="bg-purple-400 hover:bg-purple-500 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 w-full mb-6"
          >
            {isRolling ? 'Lancement...' : 'Lancer les dés'}
          </Button>

          {results.length > 0 && (
            <>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                {results.map((result, index) => (
                  <div key={index} className={isRolling ? 'animate-bounce' : ''}>
                    {getDiceFace(result)}
                  </div>
                ))}
              </div>

              <div className="text-center p-4 bg-purple-100 rounded-lg border-2 border-purple-400">
                <p className="text-sm text-gray-700 font-medium">Total</p>
                <p className="text-4xl font-bold text-purple-600">{total}</p>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      <div className="absolute top-0 left-0 w-32 h-32 bg-pink-500 rounded-full opacity-50 transform -translate-x-16 -translate-y-16 z-0"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-500 rounded-lg opacity-50 transform translate-x-24 translate-y-24 rotate-12 z-0"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-400 opacity-50 transform -translate-y-1/2 rotate-45 z-0"></div>
    </div>
  );
};

export default DiceRoll;
