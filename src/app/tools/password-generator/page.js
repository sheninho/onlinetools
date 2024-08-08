"use client";
import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Key, Copy } from 'lucide-react';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let characters = '';
    if (includeUppercase) characters += uppercase;
    if (includeLowercase) characters += lowercase;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      generatedPassword += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    setPassword(generatedPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert('Mot de passe copié dans le presse-papiers !');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden border-4 border-black">
        <CardHeader className="bg-red-400 text-white font-bold py-4 px-6">
          <div className="flex items-center">
            <Key className="mr-2 h-6 w-6" />
            Générateur de Mots de Passe
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Longueur du mot de passe: {length}
            </label>
            <Slider
              value={[length]}
              onValueChange={(value) => setLength(value[0])}
              min={6}
              max={30}
              step={1}
              className="w-full"
            />
          </div>
          <div className="mb-4 space-y-2">
            <div className="flex items-center">
              <Checkbox
                id="uppercase"
                checked={includeUppercase}
                onCheckedChange={setIncludeUppercase}
              />
              <label htmlFor="uppercase" className="ml-2 text-sm text-gray-700">Majuscules</label>
            </div>
            <div className="flex items-center">
              <Checkbox
                id="lowercase"
                checked={includeLowercase}
                onCheckedChange={setIncludeLowercase}
              />
              <label htmlFor="lowercase" className="ml-2 text-sm text-gray-700">Minuscules</label>
            </div>
            <div className="flex items-center">
              <Checkbox
                id="numbers"
                checked={includeNumbers}
                onCheckedChange={setIncludeNumbers}
              />
              <label htmlFor="numbers" className="ml-2 text-sm text-gray-700">Chiffres</label>
            </div>
            <div className="flex items-center">
              <Checkbox
                id="symbols"
                checked={includeSymbols}
                onCheckedChange={setIncludeSymbols}
              />
              <label htmlFor="symbols" className="ml-2 text-sm text-gray-700">Symboles</label>
            </div>
          </div>
          <Button
            onClick={generatePassword}
            className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 w-full mb-4"
          >
            Générer un mot de passe
          </Button>
          {password && (
            <div className="mt-4">
              <div className="flex items-center justify-between bg-gray-100 p-2 rounded">
                <Input
                  value={password}
                  readOnly
                  className="bg-transparent border-none text-lg font-mono"
                />
                <Button
                  onClick={copyToClipboard}
                  className="ml-2 bg-red-400 hover:bg-red-500 text-white p-2 rounded-full"
                >
                  <Copy size={20} />
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Éléments décoratifs néo-Memphis */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 rounded-full opacity-50 transform -translate-x-16 -translate-y-16 z-0"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-yellow-400 rounded-lg opacity-50 transform translate-x-24 translate-y-24 rotate-12 z-0"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-400 opacity-50 transform -translate-y-1/2 rotate-45 z-0"></div>
    </div>
  );
};

export default PasswordGenerator;