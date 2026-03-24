"use client";
import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Scale } from 'lucide-react';
import { useToast } from '@/components/ui/toast';

const BMICalculator = () => {
  const { addToast } = useToast();
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [bmiStatus, setBmiStatus] = useState('');

  const calculateBMI = () => {
    if (!weight || weight <= 0) {
      addToast('Veuillez entrer un poids valide', 'warning');
      return;
    }
    if (!height || height <= 0) {
      addToast('Veuillez entrer une taille valide', 'warning');
      return;
    }
    const heightInMeters = height / 100;
    const calculatedBMI = weight / (heightInMeters * heightInMeters);
    setBmi(calculatedBMI.toFixed(1));
    evaluateBMIStatus(calculatedBMI);
    addToast('IMC calculé avec succès !', 'success');
  };

  const evaluateBMIStatus = (bmi) => {
    if (bmi < 18.5) {
      setBmiStatus('Insuffisance pondérale');
    } else if (bmi >= 18.5 && bmi < 25) {
      setBmiStatus('Poids normal');
    } else if (bmi >= 25 && bmi < 30) {
      setBmiStatus('Surpoids');
    } else if (bmi >= 30) {
      setBmiStatus('Obésité');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden border-4 border-black">
        <CardHeader className="bg-yellow-400 text-white font-bold py-4 px-6">
          <div className="flex items-center">
            <Scale className="mr-2 h-6 w-6" />
            Calculateur d&apos;IMC
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="mb-4">
            <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
              Poids (kg)
            </label>
            <Input
              id="weight"
              type="number"
              min="0"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full p-2 border-2 border-black rounded"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">
              Taille (cm)
            </label>
            <Input
              id="height"
              type="number"
              min="0"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full p-2 border-2 border-black rounded"
            />
          </div>
          <Button
            onClick={calculateBMI}
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            Calculer l&apos;IMC
          </Button>
          {bmi > 0 && (
            <div className="mt-6 text-center">
              <p className="text-2xl font-bold">Votre IMC est de:</p>
              <p className="text-4xl font-bold text-yellow-400">{bmi}</p>
              <p className="text-lg font-medium mt-2">{bmiStatus}</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Éléments décoratifs néo-Memphis */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-pink-500 rounded-full opacity-50 transform -translate-x-16 translate-y-16 z-0"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-500 rounded-lg opacity-50 transform translate-x-1/4 -translate-y-1/4 rotate-12 z-0"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-400 opacity-50 transform -translate-y-1/2 rotate-45 z-0"></div>
    </div>
  );
};

export default BMICalculator;