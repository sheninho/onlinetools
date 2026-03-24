"use client";
import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { PiggyBank } from 'lucide-react';

const LoanCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [years, setYears] = useState('');
  const [result, setResult] = useState(null);

  const calculateLoan = () => {
    if (!principal || !interestRate || !years) {
      setResult({ error: 'Veuillez remplir tous les champs' });
      return;
    }

    const p = parseFloat(principal);
    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(years) * 12;

    if (r === 0) {
      const monthlyPayment = p / n;
      setResult({
        monthlyPayment: monthlyPayment.toFixed(2),
        totalPayment: p.toFixed(2),
        totalInterest: '0.00'
      });
      return;
    }

    const monthlyPayment = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = monthlyPayment * n;
    const totalInterest = totalPayment - p;

    setResult({
      monthlyPayment: monthlyPayment.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2)
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden border-4 border-black">
        <CardHeader className="bg-sky-500 text-white font-bold py-4 px-6">
          <div className="flex items-center">
            <PiggyBank className="mr-2 h-6 w-6" />
            Calculateur de prêt
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="mb-4">
            <label htmlFor="principal" className="block text-sm font-medium text-gray-700 mb-1">
              Montant du prêt (€)
            </label>
            <Input
              id="principal"
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              placeholder="Ex: 200000"
              className="w-full p-2 border-2 border-black rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700 mb-1">
              Taux d&apos;intérêt annuel (%)
            </label>
            <Input
              id="interestRate"
              type="number"
              step="0.01"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              placeholder="Ex: 3.5"
              className="w-full p-2 border-2 border-black rounded"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="years" className="block text-sm font-medium text-gray-700 mb-1">
              Durée (années)
            </label>
            <Input
              id="years"
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              placeholder="Ex: 20"
              className="w-full p-2 border-2 border-black rounded"
            />
          </div>

          <Button
            onClick={calculateLoan}
            className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 w-full mb-4"
          >
            Calculer
          </Button>

          {result && result.error && (
            <div className="p-4 bg-red-100 rounded-lg border-2 border-red-400">
              <p className="text-sm text-red-700 text-center">{result.error}</p>
            </div>
          )}

          {result && !result.error && (
            <div className="space-y-3">
              <div className="p-4 bg-gradient-to-br from-sky-100 to-sky-200 rounded-lg border-2 border-sky-500">
                <p className="text-sm text-gray-700 text-center mb-1">Mensualité</p>
                <p className="text-3xl font-bold text-sky-700 text-center">{result.monthlyPayment} €</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-blue-100 rounded-lg border-2 border-blue-400">
                  <p className="text-xs text-gray-700 text-center mb-1">Total à payer</p>
                  <p className="text-lg font-bold text-blue-700 text-center">{result.totalPayment} €</p>
                </div>
                <div className="p-3 bg-purple-100 rounded-lg border-2 border-purple-400">
                  <p className="text-xs text-gray-700 text-center mb-1">Intérêts totaux</p>
                  <p className="text-lg font-bold text-purple-700 text-center">{result.totalInterest} €</p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400 rounded-full opacity-50 transform -translate-x-16 -translate-y-16 z-0"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-pink-500 rounded-lg opacity-50 transform translate-x-24 translate-y-24 rotate-12 z-0"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-blue-500 opacity-50 transform -translate-y-1/2 rotate-45 z-0"></div>
    </div>
  );
};

export default LoanCalculator;
