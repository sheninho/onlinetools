"use client";
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Search } from 'lucide-react';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';

const tools = [
  { name: 'Calcul de l\'IMC', link: '/tools/bmi-calculator', icon: 'Scale', color: 'bg-yellow-400' },
  { name: 'Générateur de codes QR', link: '/tools/qr-generator', icon: 'QrCode', color: 'bg-pink-500' },
  { name: 'Téléchargement YouTube', link: '/tools/youtube-downloader', icon: 'Youtube', color: 'bg-blue-500' },
  { name: 'Calculatrice en ligne', link: '/tools/calculator', icon: 'Calculator', color: 'bg-green-400' },
  { name: 'Convertisseur d\'unités', link: '/tools/unit-converter', icon: 'RefreshCw', color: 'bg-purple-500' },
  { name: 'Générateur de mots de passe', link: '/tools/password-generator', icon: 'Key', color: 'bg-red-400' },
  { name: 'Conversion de devises', link: '/tools/currency-converter', icon: 'Banknote', color: 'bg-indigo-500' },
  { name: 'Convertisseur de fichiers', link: '/tools/file-converter', icon: 'FileSymlink', color: 'bg-orange-400' },
  { name: 'Compteur de mots', link: '/tools/word-counter', icon: 'FileText', color: 'bg-teal-500' },
  { name: 'Calculateur de date', link: '/tools/date-calculator', icon: 'Calendar', color: 'bg-cyan-400' },
  { name: 'Compression d\'images', link: '/tools/image-compressor', icon: 'Image', color: 'bg-lime-500' },
  { name: 'Signatures électroniques', link: '/tools/signature-creator', icon: 'Pen', color: 'bg-emerald-400' },
  { name: 'Conversion en Morse', link: '/tools/morse-converter', icon: 'Braces', color: 'bg-rose-500' },
  { name: 'Convertisseur de casse', link: '/tools/text-case-converter', icon: 'Type', color: 'bg-fuchsia-400' },
  { name: 'Calculateur de prêt', link: '/tools/loan-calculator', icon: 'PiggyBank', color: 'bg-sky-500' },
  { name: 'Générateur Lorem Ipsum', link: '/tools/lorem-ipsum-generator', icon: 'FileText', color: 'bg-amber-400' },
  { name: 'Calculateur de pourcentage', link: '/tools/percentage-calculator', icon: 'Percent', color: 'bg-violet-500' },
  { name: 'Vérificateur de grammaire', link: '/tools/grammar-checker', icon: 'Check', color: 'bg-blue-400' },
  { name: 'Calculateur de distance', link: '/tools/distance-calculator', icon: 'MapPin', color: 'bg-pink-400' },
  { name: 'Générateur de code barre', link: '/tools/barcode-generator', icon: 'Barcode', color: 'bg-green-500' },
  
  { name: 'Bouteille qui tourne', link: '/tools/spin-the-bottle', icon: 'RotateCcw', color: 'bg-yellow-500' },
  { name: 'Lancer de dés', link: '/tools/dice-roll', icon: 'Dice5', color: 'bg-purple-400' },
  { name: 'Nombre aléatoire', link: '/tools/random-number', icon: 'Hash', color: 'bg-blue-300' },
  { name: 'Pile ou face', link: '/tools/coin-flip', icon: 'Coins', color: 'bg-green-600' },
];

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
            return (
              <Link href={tool.link} key={tool.name}>
                <Card className={`h-24 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-center items-center ${tool.color} border-2 border-gray-900 cursor-pointer transform hover:rotate-2`}>
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