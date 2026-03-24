"use client";
import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Calendar, Plus, Minus } from 'lucide-react';

const DateCalculator = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [days, setDays] = useState('');
  const [result, setResult] = useState(null);
  const [mode, setMode] = useState('difference');

  const calculateDifference = () => {
    if (!startDate || !endDate) {
      setResult('Veuillez sélectionner les deux dates');
      return;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffWeeks = Math.floor(diffDays / 7);
    const diffMonths = Math.floor(diffDays / 30);
    const diffYears = Math.floor(diffDays / 365);

    setResult({
      days: diffDays,
      weeks: diffWeeks,
      months: diffMonths,
      years: diffYears
    });
  };

  const addDays = () => {
    if (!startDate || !days) {
      setResult('Veuillez sélectionner une date et entrer un nombre de jours');
      return;
    }

    const start = new Date(startDate);
    start.setDate(start.getDate() + parseInt(days));
    setResult({ newDate: start.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) });
  };

  const subtractDays = () => {
    if (!startDate || !days) {
      setResult('Veuillez sélectionner une date et entrer un nombre de jours');
      return;
    }

    const start = new Date(startDate);
    start.setDate(start.getDate() - parseInt(days));
    setResult({ newDate: start.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden border-4 border-black">
        <CardHeader className="bg-cyan-400 text-white font-bold py-4 px-6">
          <div className="flex items-center">
            <Calendar className="mr-2 h-6 w-6" />
            Calculateur de date
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="mb-4">
            <div className="grid grid-cols-3 gap-2">
              <Button
                onClick={() => setMode('difference')}
                className={`${mode === 'difference' ? 'bg-cyan-400 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-cyan-300 font-bold py-2 px-2 rounded transition text-sm`}
              >
                Différence
              </Button>
              <Button
                onClick={() => setMode('add')}
                className={`${mode === 'add' ? 'bg-cyan-400 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-cyan-300 font-bold py-2 px-2 rounded transition text-sm`}
              >
                Ajouter
              </Button>
              <Button
                onClick={() => setMode('subtract')}
                className={`${mode === 'subtract' ? 'bg-cyan-400 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-cyan-300 font-bold py-2 px-2 rounded transition text-sm`}
              >
                Soustraire
              </Button>
            </div>
          </div>

          {mode === 'difference' && (
            <>
              <div className="mb-4">
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Date de début
                </label>
                <Input
                  id="startDate"
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full p-2 border-2 border-black rounded"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Date de fin
                </label>
                <Input
                  id="endDate"
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full p-2 border-2 border-black rounded"
                />
              </div>
              <Button
                onClick={calculateDifference}
                className="bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 w-full mb-4"
              >
                Calculer la différence
              </Button>
            </>
          )}

          {(mode === 'add' || mode === 'subtract') && (
            <>
              <div className="mb-4">
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Date de départ
                </label>
                <Input
                  id="startDate"
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full p-2 border-2 border-black rounded"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="days" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre de jours
                </label>
                <Input
                  id="days"
                  type="number"
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  className="w-full p-2 border-2 border-black rounded"
                />
              </div>
              <Button
                onClick={mode === 'add' ? addDays : subtractDays}
                className="bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 w-full mb-4"
              >
                {mode === 'add' ? <Plus className="mr-2 h-5 w-5 inline" /> : <Minus className="mr-2 h-5 w-5 inline" />}
                {mode === 'add' ? 'Ajouter' : 'Soustraire'} les jours
              </Button>
            </>
          )}

          {result && typeof result === 'object' && result.days !== undefined && (
            <div className="p-4 bg-cyan-100 rounded-lg border-2 border-cyan-400">
              <p className="text-center font-bold mb-3">Différence</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-600">{result.days}</div>
                  <div className="text-xs text-gray-600">jours</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-600">{result.weeks}</div>
                  <div className="text-xs text-gray-600">semaines</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-600">{result.months}</div>
                  <div className="text-xs text-gray-600">mois</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-600">{result.years}</div>
                  <div className="text-xs text-gray-600">années</div>
                </div>
              </div>
            </div>
          )}

          {result && typeof result === 'object' && result.newDate && (
            <div className="p-4 bg-cyan-100 rounded-lg border-2 border-cyan-400">
              <p className="text-sm text-gray-700 text-center mb-2">Nouvelle date</p>
              <p className="text-lg font-bold text-cyan-700 text-center">{result.newDate}</p>
            </div>
          )}

          {result && typeof result === 'string' && (
            <div className="p-4 bg-red-100 rounded-lg border-2 border-red-400">
              <p className="text-sm text-red-700 text-center">{result}</p>
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

export default DateCalculator;
