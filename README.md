# 🛠️ Quicktoolbox - Outils en Ligne

Une collection d'outils en ligne gratuits et intuitifs pour simplifier votre quotidien. Design néo-Memphis moderne avec une expérience utilisateur optimisée.

![Quicktoolbox](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Fonctionnalités

### 🧮 Calculatrices & Conversions
- **Calculatrice** - Calculatrice scientifique complète
- **Calculateur d'IMC** - Indice de masse corporelle avec interprétation
- **Convertisseur d'unités** - Longueur, poids, température
- **Convertisseur de devises** - 13 monnaies avec taux en temps réel
- **Calculateur de prêt** - Mensualités et intérêts
- **Calculateur de pourcentage** - 4 modes de calcul
- **Calculateur de date** - Différence, ajout et soustraction de dates

### 📝 Traitement de texte
- **Compteur de mots** - Statistiques détaillées (mots, caractères, temps de lecture)
- **Convertisseur de casse** - Majuscules, minuscules, titre, etc.
- **Convertisseur Morse** - Texte ↔ Code Morse

### 🔐 Sécurité & Utilitaires
- **Générateur de mots de passe** - Personnalisable avec options avancées
- **Générateur de codes QR** - Personnalisable avec couleurs et taille
- **Générateur Lorem Ipsum** - Texte de remplissage

### 🎲 Outils ludiques
- **Pile ou Face** - Avec historique et statistiques
- **Lancer de dés** - 1 à 10 dés simultanés
- **Générateur de nombres aléatoires** - Plage personnalisée
- **Roue des noms** - Spin the bottle avec interface visuelle

### 📥 Médias & Fichiers
- **Téléchargement YouTube** - Extraction audio/vidéo
- **Compression d'images** - Optimisation sans perte de qualité
- **Convertisseur de fichiers** - Multi-formats

### 🎨 Design & Création
- **Signatures électroniques** - Création de signatures numériques
- **Générateur de codes barres** - Codes-barres standards

## 🚀 Démarrage rapide

### Prérequis
- Node.js 18+ 
- npm, yarn, pnpm ou bun

### Installation

```bash
# Cloner le repository
git clone https://github.com/sheninho/onlinetools.git
cd onlinetools

# Installer les dépendances
npm install
# ou
yarn install
# ou
pnpm install
```

### Lancer le développement

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Build pour la production

```bash
npm run build
npm start
```

## 🎨 Design & UX

### Système de Design
- **Style néo-Memphis** - Formes géométriques audacieuses et couleurs vives
- **Bordures noires épaisses** - Style moderne et distinctif
- **Palette de couleurs joyeuse** - Jaune, rose, bleu, vert, etc.
- **Animations fluides** - Transitions hover et micro-interactions

### Fonctionnalités UX
- **Notifications Toast** - Feedback visuel élégant (remplace les alert())
- **Validations intelligentes** - Messages d'erreur contextuels
- **Responsive Design** - Optimisé mobile, tablette et desktop
- **Accessibilité** - Support clavier et lecteurs d'écran

## 🛠️ Stack Technique

- **Frontend**: Next.js 14 (App Router)
- **UI**: React 18 avec TypeScript
- **Styling**: Tailwind CSS + CSS personnalisé
- **Composants**: Shadcn/ui
- **Icônes**: Lucide React
- **Animations**: CSS3 + Transitions

## 📁 Structure du Projet

```
src/
├── app/
│   ├── tools/           # Pages des outils
│   │   ├── calculator/
│   │   ├── password-generator/
│   │   ├── bmi-calculator/
│   │   └── ...
│   ├── layout.js        # Layout principal
│   ├── page.js          # Page d'accueil
│   └── globals.css      # Styles globaux
├── components/
│   └── ui/              # Composants UI réutilisables
│       ├── card.jsx
│       ├── button.jsx
│       ├── toast.jsx
│       └── ...
└── lib/
    └── utils.js         # Utilitaires communs
```

## 🌟 Points Forts

- **Performance** - Optimisé avec Next.js et chargement lazy
- **SEO Friendly** - Meta tags et structure sémantique
- **PWA Ready** - Installation possible sur mobile
- **No Database** - 100% client-side, pas de backend requis
- **Extensible** - Architecture modulaire pour ajouter facilement de nouveaux outils

## 🤝 Contribuer

Les contributions sont les bienvenues ! Voici comment vous pouvez aider :

1. Fork le repository
2. Créer une branche (`git checkout -b feature/nouvel-outil`)
3. Commit vos changements (`git commit -m 'Ajouter: nouvel outil'`)
4. Push vers la branche (`git push origin feature/nouvel-outil`)
5. Ouvrir une Pull Request

### Idées de contributions
- Nouveaux outils
- Améliorations UX/UI
- Optimisations de performance
- Corrections de bugs
- Documentation

## 📄 License

Ce projet est sous license MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🙏 Crédits

- [Next.js](https://nextjs.org/) - Framework React
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Lucide](https://lucide.dev/) - Bibliothèque d'icônes
- [Shadcn/ui](https://ui.shadcn.com/) - Composants UI

---

**Quicktoolbox** - Des solutions simples pour vos tâches quotidiennes 🚀
