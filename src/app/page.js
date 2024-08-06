"use client";
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Search } from 'lucide-react';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';

const tools = [
  { name: 'Calcul de l\'IMC', link: '/tools/bmi-calculator', icon: 'Scale' },
  { name: 'Générateur de codes QR', link: '/tools/qr-generator', icon: 'QrCode' },
  { name: 'Téléchargement YouTube', link: '/tools/youtube-downloader', icon: 'Youtube' },
  { name: 'Calculatrice en ligne', link: '/tools/calculator', icon: 'Calculator' },
  { name: 'Convertisseur d\'unités', link: '/tools/unit-converter', icon: 'RefreshCw' },
  { name: 'Générateur de mots de passe', link: '/tools/password-generator', icon: 'Key' },
  { name: 'Conversion de devises', link: '/tools/currency-converter', icon: 'Banknote' },
  { name: 'Convertisseur de fichiers', link: '/tools/file-converter', icon: 'FileSymlink' },
  { name: 'Compteur de mots', link: '/tools/word-counter', icon: 'FileText' },
  { name: 'Calculateur de date', link: '/tools/date-calculator', icon: 'Calendar' },
  { name: 'Compression d\'images', link: '/tools/image-compressor', icon: 'Image' },
  { name: 'Signatures électroniques', link: '/tools/signature-creator', icon: 'Pen' },
  { name: 'Conversion en Morse', link: '/tools/morse-converter', icon: 'Braces' },
  { name: 'Convertisseur de casse', link: '/tools/text-case-converter', icon: 'Type' },
  { name: 'Calculateur de prêt', link: '/tools/loan-calculator', icon: 'PiggyBank' },
  { name: 'Générateur Lorem Ipsum', link: '/tools/lorem-ipsum-generator', icon: 'FileText' },
  { name: 'Calculateur de pourcentage', link: '/tools/percentage-calculator', icon: 'Percent' },
  { name: 'Vérificateur de grammaire', link: '/tools/grammar-checker', icon: 'Check' },
  { name: 'Calculateur de distance', link: '/tools/distance-calculator', icon: 'MapPin' },
  { name: 'Générateur de code barre', link: '/tools/barcode-generator', icon: 'Barcode' },
];

const neoMemphisColors = [
  'bg-yellow-400', 'bg-pink-500', 'bg-blue-500', 'bg-green-400', 'bg-purple-500',
  'bg-red-400', 'bg-indigo-500', 'bg-orange-400', 'bg-teal-500', 'bg-cyan-400'
];

const getRandomColor = () => neoMemphisColors[Math.floor(Math.random() * neoMemphisColors.length)];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredTools = tools.filter(tool =>
    tool.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 relative">
        {/* Éléments décoratifs néo-memphis */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400 rounded-full -z-10 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-pink-500 -z-10 transform translate-x-1/4 translate-y-1/4 rotate-12"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-blue-500 -z-10 transform rotate-45"></div>

        <h1 className="text-5xl font-black text-center mb-4 text-gray-900 relative">
          Outils Utiles
          <span className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 transform rotate-12"></span>
        </h1>
        <p className="text-lg text-center mb-8 text-gray-600 italic">Des solutions simples pour vos tâches quotidiennes</p>

        <div className="mb-8 relative">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher un outil..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border-4 border-gray-900 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-base"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-900" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filteredTools.map((tool) => {
            const IconComponent = LucideIcons[tool.icon];
            const bgColor = getRandomColor();
            return (
              <Link href={tool.link} key={tool.name}>
                <Card className={`h-24 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-center items-center ${bgColor} border-2 border-gray-900 cursor-pointer transform hover:rotate-2`}>
                  <IconComponent className="w-8 h-8 text-white mb-2" />
                  <p className="text-xs font-bold text-white text-center px-2">{tool.name}</p>
                </Card>
              </Link>
            );
          })}
        </div>
      </main>

      <footer className="mt-16 bg-gray-900 text-white py-6 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="text-sm font-bold">&copy; 2024 Outils Utiles. Tous droits réservés.</p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-yellow-400"></div>
        <div className="absolute top-0 right-0 w-16 h-16 bg-pink-500 transform rotate-45 translate-x-1/2 -translate-y-1/2"></div>
      </footer>
    </div>
  );
}