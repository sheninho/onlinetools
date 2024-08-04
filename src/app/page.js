"use client";
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search } from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image';

const tools = [
  { name: 'Calcul de l\'IMC', link: '/tools/bmi-calculator', image: '/banners/bmi-calculator.jpg', visits: 150 },
  { name: 'Générateur de codes QR', link: '/tools/qr-generator', image: '/banners/qr-generator.jpg', visits: 200 },
  { name: 'Téléchargement de vidéos YouTube', link: '/tools/youtube-downloader', image: '/banners/youtube-downloader.jpg', visits: 300 },
  { name: 'Calculatrice en ligne', link: '/tools/calculator', image: '/banners/calculator.jpg', visits: 250 },
  { name: 'Convertisseur d\'unités', link: '/tools/unit-converter', image: '/banners/unit-converter.jpg', visits: 120 },
  { name: 'Générateur de mots de passe sécurisés', link: '/tools/password-generator', image: '/banners/password-generator.jpg', visits: 180 },
  { name: 'Conversion de devises', link: '/tools/currency-converter', image: '/banners/currency-converter.jpg', visits: 220 },
  { name: 'Convertisseur de fichiers', link: '/tools/file-converter', image: '/banners/file-converter.jpg', visits: 90 },
  { name: 'Compteur de mots et de caractères', link: '/tools/word-counter', image: '/banners/word-counter.jpg', visits: 170 },
  { name: 'Calculateur de date', link: '/tools/date-calculator', image: '/banners/date-calculator.jpg', visits: 60 },
  { name: 'Outil de compression d\'images', link: '/tools/image-compressor', image: '/banners/image-compressor.jpg', visits: 110 },
  { name: 'Créateur de signatures électroniques', link: '/tools/signature-creator', image: '/banners/signature-creator.jpg', visits: 80 },
  { name: 'Conversion de texte en code Morse', link: '/tools/morse-converter', image: '/banners/morse-converter.jpg', visits: 130 },
  { name: 'Convertisseur de texte en minuscules/majuscules', link: '/tools/text-case-converter', image: '/banners/text-case-converter.jpg', visits: 95 },
  { name: 'Calculateur de prêt', link: '/tools/loan-calculator', image: '/banners/loan-calculator.jpg', visits: 140 },
  { name: 'Outil de génération de Lorem Ipsum', link: '/tools/lorem-ipsum-generator', image: '/banners/lorem-ipsum-generator.jpg', visits: 50 },
  { name: 'Calculateur de pourcentage', link: '/tools/percentage-calculator', image: '/banners/percentage-calculator.jpg', visits: 160 },
  { name: 'Vérificateur de grammaire et d\'orthographe', link: '/tools/grammar-checker', image: '/banners/grammar-checker.jpg', visits: 70 },
  { name: 'Calculateur de distance entre deux points', link: '/tools/distance-calculator', image: '/banners/distance-calculator.jpg', visits: 40 },
  { name: 'Générateur de code barre', link: '/tools/barcode-generator', image: '/banners/barcode-generator.jpg', visits: 100 },
];

const neoMemphisColors = [
  'bg-yellow-400', 'bg-pink-500', 'bg-blue-500', 'bg-green-400', 'bg-purple-500'
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredTools = tools
    .filter(tool =>
      tool.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => b.visits - a.visits);

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Outils Utiles</title>
        <meta name="description" content="Une collection d'outils simples et utiles." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 relative">
        {/* Éléments décoratifs néo-memphis */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400 rounded-full -z-10 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-pink-500 -z-10 transform translate-x-1/4 translate-y-1/4 rotate-12"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-blue-500 -z-10 transform rotate-45"></div>

        <h1 className="text-6xl font-black text-center mb-4 text-gray-900 relative">
          Outils Utiles
          <span className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 transform rotate-12"></span>
        </h1>
        <p className="text-xl text-center mb-12 text-gray-600 italic">Des solutions simples pour vos tâches quotidiennes</p>

        <div className="mb-12 relative">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher un outil..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-4 border-gray-900 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-lg"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-gray-900" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredTools.map((tool, index) => (
            <Card key={tool.name} className={`overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col justify-between transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} ${neoMemphisColors[index % neoMemphisColors.length]} border-4 border-gray-900`}>
              <div>
                <div className="relative h-48">
                  <Image
                    src={tool.image}
                    alt={tool.name}
                    layout="fill"
                    objectFit="cover"
                    className="mix-blend-luminosity"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                </div>
                <CardContent className="p-4">
                  <h2 className="text-xl font-bold text-white">{tool.name}</h2>
                </CardContent>
              </div>
              <div className="p-4">
                <Button className="w-full bg-white text-gray-900 hover:bg-gray-100 border-2 border-gray-900 font-bold py-2 px-4 rounded-full transform transition-transform duration-200 hover:scale-105" asChild>
                  <a href={tool.link}>Utiliser l&apos;outil</a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </main>

      <footer className="mt-16 bg-gray-900 text-white py-8 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="font-bold">&copy; 2024 Outils Utiles. Tous droits réservés.</p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-yellow-400"></div>
        <div className="absolute top-0 right-0 w-16 h-16 bg-pink-500 transform rotate-45 translate-x-1/2 -translate-y-1/2"></div>
      </footer>
    </div>
  );
}