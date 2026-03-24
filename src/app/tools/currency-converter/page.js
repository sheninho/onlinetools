"use client";
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Banknote, RefreshCw } from 'lucide-react';

const currencies = {
  USD: { name: 'Dollar américain', symbol: '$', rate: 1 },
  EUR: { name: 'Euro', symbol: '€', rate: 0.92 },
  GBP: { name: 'Livre sterling', symbol: '£', rate: 0.79 },
  JPY: { name: 'Yen japonais', symbol: '¥', rate: 149.50 },
  CAD: { name: 'Dollar canadien', symbol: 'C$', rate: 1.36 },
  AUD: { name: 'Dollar australien', symbol: 'A$', rate: 1.53 },
  CHF: { name: 'Franc suisse', symbol: 'CHF', rate: 0.88 },
  CNY: { name: 'Yuan chinois', symbol: '¥', rate: 7.24 },
  INR: { name: 'Roupie indienne', symbol: '₹', rate: 83.12 },
  BRL: { name: 'Real brésilien', symbol: 'R$', rate: 4.97 },
  MXN: { name: 'Peso mexicain', symbol: '$', rate: 17.08 },
  ZAR: { name: 'Rand sud-africain', symbol: 'R', rate: 18.65 },
  MAD: { name: 'Dirham marocain', symbol: 'DH', rate: 10.12 }
};

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (amount && !isNaN(amount)) {
      convert();
    }
  }, [amount, fromCurrency, toCurrency]);

  const convert = () => {
    if (!amount || isNaN(amount)) {
      setResult(null);
      return;
    }

    const amountInUSD = parseFloat(amount) / currencies[fromCurrency].rate;
    const convertedAmount = amountInUSD * currencies[toCurrency].rate;
    setResult(convertedAmount.toFixed(2));
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden border-4 border-black">
        <CardHeader className="bg-indigo-500 text-white font-bold py-4 px-6">
          <div className="flex items-center">
            <Banknote className="mr-2 h-6 w-6" />
            Conversion de devises
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="mb-4">
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
              Montant
            </label>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Entrez le montant"
              className="w-full p-2 border-2 border-black rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">De</label>
            <Select value={fromCurrency} onValueChange={setFromCurrency}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(currencies).map(([code, { name, symbol }]) => (
                  <SelectItem key={code} value={code}>
                    {code} - {name} ({symbol})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-center mb-4">
            <Button
              onClick={swapCurrencies}
              className="bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded-full transition duration-300 ease-in-out transform hover:rotate-180"
            >
              <RefreshCw size={20} />
            </Button>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Vers</label>
            <Select value={toCurrency} onValueChange={setToCurrency}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(currencies).map(([code, { name, symbol }]) => (
                  <SelectItem key={code} value={code}>
                    {code} - {name} ({symbol})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {result && (
            <div className="p-6 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-lg border-2 border-indigo-500">
              <p className="text-sm text-gray-700 text-center mb-2">Résultat</p>
              <p className="text-3xl font-bold text-indigo-700 text-center">
                {currencies[toCurrency].symbol} {result}
              </p>
              <p className="text-xs text-gray-600 text-center mt-2">
                1 {fromCurrency} = {(currencies[toCurrency].rate / currencies[fromCurrency].rate).toFixed(4)} {toCurrency}
              </p>
            </div>
          )}

          <p className="text-xs text-gray-500 text-center mt-4">
            * Taux de change indicatifs
          </p>
        </CardContent>
      </Card>

      <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400 rounded-full opacity-50 transform -translate-x-16 -translate-y-16 z-0"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-pink-500 rounded-lg opacity-50 transform translate-x-24 translate-y-24 rotate-12 z-0"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-500 opacity-50 transform -translate-y-1/2 rotate-45 z-0"></div>
    </div>
  );
};

export default CurrencyConverter;
