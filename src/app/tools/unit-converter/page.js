"use client";
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { RefreshCw } from 'lucide-react';

const unitCategories = {
  length: {
    name: 'Longueur',
    units: {
      meter: 1,
      kilometer: 1000,
      centimeter: 0.01,
      millimeter: 0.001,
      inch: 0.0254,
      foot: 0.3048,
      yard: 0.9144,
      mile: 1609.34
    }
  },
  weight: {
    name: 'Poids',
    units: {
      kilogram: 1,
      gram: 0.001,
      milligram: 0.000001,
      ton: 1000,
      pound: 0.453592,
      ounce: 0.0283495
    }
  },
  temperature: {
    name: 'Température',
    units: {
      celsius: 'C',
      fahrenheit: 'F',
      kelvin: 'K'
    }
  }
};

const UnitConverter = () => {
  const [category, setCategory] = useState('length');
  const [fromUnit, setFromUnit] = useState('meter');
  const [toUnit, setToUnit] = useState('kilometer');
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');

  useEffect(() => {
    convert();
  }, [category, fromUnit, toUnit, fromValue]);

  const convert = () => {
    if (fromValue === '') {
      setToValue('');
      return;
    }

    const fromVal = parseFloat(fromValue);

    if (category === 'temperature') {
      setToValue(convertTemperature(fromVal, fromUnit, toUnit).toFixed(2));
    } else {
      const result = (fromVal * unitCategories[category].units[fromUnit]) / unitCategories[category].units[toUnit];
      setToValue(result.toFixed(4));
    }
  };

  const convertTemperature = (value, from, to) => {
    if (from === to) return value;
    if (from === 'celsius') {
      if (to === 'fahrenheit') return (value * 9/5) + 32;
      if (to === 'kelvin') return value + 273.15;
    }
    if (from === 'fahrenheit') {
      if (to === 'celsius') return (value - 32) * 5/9;
      if (to === 'kelvin') return (value - 32) * 5/9 + 273.15;
    }
    if (from === 'kelvin') {
      if (to === 'celsius') return value - 273.15;
      if (to === 'fahrenheit') return (value - 273.15) * 9/5 + 32;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden border-4 border-black">
        <CardHeader className="bg-purple-500 text-white font-bold py-4 px-6">
          <div className="flex items-center">
            <RefreshCw className="mr-2 h-6 w-6" />
            Convertisseur d&apos;Unités
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Catégorie</label>
            <Select value={category} onValueChange={(value) => {
              setCategory(value);
              setFromUnit(Object.keys(unitCategories[value].units)[0]);
              setToUnit(Object.keys(unitCategories[value].units)[1]);
            }}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Sélectionnez une catégorie" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(unitCategories).map(([key, value]) => (
                  <SelectItem key={key} value={key}>{value.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">De</label>
            <div className="flex space-x-2">
              <Input
                type="number"
                value={fromValue}
                onChange={(e) => setFromValue(e.target.value)}
                className="w-2/3"
              />
              <Select value={fromUnit} onValueChange={setFromUnit} className="w-1/3">
                <SelectTrigger>
                  <SelectValue placeholder="Unité" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(unitCategories[category].units).map((unit) => (
                    <SelectItem key={unit} value={unit}>{unit}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Vers</label>
            <div className="flex space-x-2">
              <Input
                type="number"
                value={toValue}
                readOnly
                className="w-2/3 bg-gray-100"
              />
              <Select value={toUnit} onValueChange={setToUnit} className="w-1/3">
                <SelectTrigger>
                  <SelectValue placeholder="Unité" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(unitCategories[category].units).map((unit) => (
                    <SelectItem key={unit} value={unit}>{unit}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button
            onClick={convert}
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 w-full"
          >
            Convertir
          </Button>
        </CardContent>
      </Card>

      {/* Éléments décoratifs néo-Memphis */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-full opacity-50 transform translate-x-16 -translate-y-16 z-0"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-500 rounded-lg opacity-50 transform -translate-x-24 translate-y-24 rotate-12 z-0"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-blue-500 opacity-50 transform -translate-y-1/2 rotate-45 z-0"></div>
    </div>
  );
};

export default UnitConverter;