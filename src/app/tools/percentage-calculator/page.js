"use client";
import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Percent } from 'lucide-react';

const PercentageCalculator = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [result, setResult] = useState(null);
  const [mode, setMode] = useState('percentage');

  const calculate = () => {
    const v1 = parseFloat(value1);
    const v2 = parseFloat(value2);

    if (isNaN(v1) || isNaN(v2)) {
      setResult('Veuillez entrer des nombres valides');
      return;
    }

    let calculatedResult;
    switch (mode) {
      case 'percentage':
        calculatedResult = `${v1}% de ${v2} = ${(v1 / 100 * v2).toFixed(2)}`;
        break;
      case 'increase':
        calculatedResult = `${v1} + ${v2}% = ${(v1 * (1 + v2 / 100)).toFixed(2)}`;
        break;
      case 'decrease':
        calculatedResult = `${v1} - ${v2}% = ${(v1 * (1 - v2 / 100)).toFixed(2)}`;
        break;
      case 'difference':
        const diff = ((v2 - v1) / v1 * 100).toFixed(2);
        calculatedResult = `Différence: ${diff}%`;
        break;
      default:
        calculatedResult = '';
    }

    setResult(calculatedResult);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden border-4 border-black">
        <CardHeader className="bg-violet-500 text-white font-bold py-4 px-6">
          <div className="flex items-center">
            <Percent className="mr-2 h-6 w-6" />
            Calculateur de pourcentage
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Type de calcul</label>
            <div className="grid grid-cols-2 gap-2">
              <Button
                onClick={() => setMode('percentage')}
                className={`${mode === 'percentage' ? 'bg-violet-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-violet-400 font-bold py-2 px-4 rounded transition`}
              >
                X% de Y
              </Button>
              <Button
                onClick={() => setMode('increase')}
                className={`${mode === 'increase' ? 'bg-violet-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-violet-400 font-bold py-2 px-4 rounded transition`}
              >
                Augmentation
              </Button>
              <Button
                onClick={() => setMode('decrease')}
                className={`${mode === 'decrease' ? 'bg-violet-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-violet-400 font-bold py-2 px-4 rounded transition`}
              >
                Diminution
              </Button>
              <Button
                onClick={() => setMode('difference')}
                className={`${mode === 'difference' ? 'bg-violet-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-violet-400 font-bold py-2 px-4 rounded transition`}
              >
                Différence %
              </Button>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="value1" className="block text-sm font-medium text-gray-700 mb-1">
              {mode === 'percentage' ? 'Pourcentage' : 'Valeur 1'}
            </label>
            <Input
              id="value1"
              type="number"
              value={value1}
              onChange={(e) => setValue1(e.target.value)}
              className="w-full p-2 border-2 border-black rounded"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="value2" className="block text-sm font-medium text-gray-700 mb-1">
              {mode === 'percentage' ? 'Nombre' : 'Valeur 2'}
            </label>
            <Input
              id="value2"
              type="number"
              value={value2}
              onChange={(e) => setValue2(e.target.value)}
              className="w-full p-2 border-2 border-black rounded"
            />
          </div>

          <Button
            onClick={calculate}
            className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 w-full mb-4"
          >
            Calculer
          </Button>

          {result && (
            <div className="mt-4 p-4 bg-violet-100 rounded-lg border-2 border-violet-500">
              <p className="text-center text-xl font-bold text-violet-700">{result}</p>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="absolute top-0 left-0 w-32 h-32 bg-pink-500 rounded-full opacity-50 transform -translate-x-16 -translate-y-16 z-0"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-500 rounded-lg opacity-50 transform translate-x-24 translate-y-24 rotate-12 z-0"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-400 opacity-50 transform -translate-y-1/2 rotate-45 z-0"></div>
    </div>
  );
};

export default PercentageCalculator;
