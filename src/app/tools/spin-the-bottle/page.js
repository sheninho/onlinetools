"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';

const SpinTheBottle = () => {
    const [names, setNames] = useState([]);
    const [newName, setNewName] = useState('');
    const [result, setResult] = useState('');
    const [isSpinning, setIsSpinning] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [colors, setColors] = useState([]);
    const wheelRef = useRef(null);

  useEffect(() => {
    setColors(names.map(() => getRandomColor()));
  }, [names]);

  const getRandomColor = () => {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 70%, 60%)`;
  };

  const addName = () => {
    if (newName.trim() !== '') {
      setNames([...names, newName.trim()]);
      setNewName('');
    }
  };

  const removeName = (index) => {
    const updatedNames = names.filter((_, i) => i !== index);
    setNames(updatedNames);
  };

  const spinWheel = () => {
    if (names.length < 2) {
      setResult('Ajoutez au moins deux noms pour jouer !');
      return;
    }
    setIsSpinning(true);
    setResult('');
    const newRotation = rotation + 1440 + Math.random() * 360;
    setRotation(newRotation);

    setTimeout(() => {
      const winnerIndex = Math.floor(Math.random() * names.length);
      setResult(names[winnerIndex]);
      setIsSpinning(false);
    }, 5000);
  };

  return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
          <Card className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden border-4 border-black">
            <CardHeader className="bg-yellow-500 text-white font-bold py-4 px-6">
              <div className="flex items-center">
                <RotateCcw className="mr-2 h-6 w-6" />
                Roue des Noms
              </div>
            </CardHeader>
            <CardContent className="p-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Ajouter un nom
            </label>
            <div className="flex">
              <Input
                id="name"
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="flex-grow mr-2 p-2 border-2 border-black rounded"
                onKeyPress={(e) => e.key === 'Enter' && addName()}
              />
              <Button
                onClick={addName}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              >
                Ajouter
              </Button>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="font-bold mb-2">Noms ajoutés :</h3>
            <ul className="list-disc pl-5">
              {names.map((name, index) => (
                <li key={index} className="flex justify-between items-center mb-1">
                  <span style={{ color: colors[index] }}>{name}</span>
                  <button
                    onClick={() => removeName(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative mb-6 h-64 w-64 mx-auto">
            {/* Flèche */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 rotate-180">
              <div className="w-0 h-0 border-l-[15px] border-l-transparent border-b-[30px] border-b-black border-r-[15px] border-r-transparent"></div>
            </div>
            
            {/* Roue */}
            <svg
              ref={wheelRef}
              className="w-full h-full transition-transform duration-5000 ease-out"
              viewBox="0 0 100 100"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              {names.map((name, index) => {
                const angle = (360 / names.length) * index;
                const endAngle = (360 / names.length) * (index + 1);
                const x1 = 50 + 50 * Math.cos((angle - 90) * Math.PI / 180);
                const y1 = 50 + 50 * Math.sin((angle - 90) * Math.PI / 180);
                const x2 = 50 + 50 * Math.cos((endAngle - 90) * Math.PI / 180);
                const y2 = 50 + 50 * Math.sin((endAngle - 90) * Math.PI / 180);
                return (
                  <g key={index}>
                    <path
                      d={`M50,50 L${x1},${y1} A50,50 0 0,1 ${x2},${y2} Z`}
                      fill={colors[index]}
                    />
                    <text
                      x="50"
                      y="50"
                      dy="0.3em"
                      textAnchor="middle"
                      fill="white"
                      fontSize="4"
                      transform={`rotate(${angle + 180 / names.length}) translate(0, -30) rotate(-${angle + 180 / names.length})`}
                    >
                      {name}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
          
          <Button
            onClick={spinWheel}
            disabled={isSpinning}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            {isSpinning ? 'La roue tourne...' : 'Tourner la roue'}
          </Button>
          {result && (
            <div className="mt-6 text-center">
              <p className="text-2xl font-bold">Résultat :</p>
              <p className="text-4xl font-bold text-yellow-500">{result}</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Éléments décoratifs néo-Memphis */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-pink-500 rounded-full opacity-50 transform translate-x-1/4 -translate-y-1/4 z-0"></div>
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-blue-500 rounded-lg opacity-50 transform -translate-x-1/4 translate-y-1/4 rotate-12 z-0"></div>
      <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-green-400 opacity-50 transform -translate-y-1/2 rotate-45 z-0"></div>
    </div>
  );
};

export default SpinTheBottle;