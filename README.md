# Zythologue Explorer

Zythologue Explorer est une application web qui permet de découvrir et d'explorer des bières artisanales et les brasseries qui les produisent. L'application est construite avec React, TypeScript et Vite, et utilise Tailwind CSS pour le style.

## Installation et Lancement en Local

### Prérequis

- Node.js (version 14 ou supérieure)
- npm ou yarn

### Installation

1. Clonez le dépôt :

```bash
git clone https://github.com/votre-utilisateur/zythologue-explorer.git
cd zythologue-explorer
```

2. Installez les dépendances :

```
npm install
# ou
yarn install
```

### Lancement

1. Démarrez le serveur de développement :

```bash
npm run dev
# ou
yarn dev
```

2. Ouvrez votre navigateur et accédez à http://localhost:3000.

## Fonctionnalités

### Catalogue de Bières

- Liste des Bières : Parcourez une collection de bières artisanales soigneusement sélectionnées.
- Recherche de Bières : Utilisez la barre de recherche pour trouver des bières spécifiques par nom.
- Ajouter une Bière : Ajoutez de nouvelles bières au catalogue via un formulaire.
- Modifier une Bière : Modifiez les informations d'une bière existante.
- Supprimer une Bière : Supprimez une bière du catalogue.
- Favoris : Ajoutez des bières à vos favoris et visualisez les bières likées avec une icône cœur.

### Brasseries

- Liste des Brasseries : Découvrez les brasseries artisanales et leur histoire unique.
- Recherche de Brasseries : Utilisez la barre de recherche pour trouver des brasseries spécifiques par nom.
- Ajouter une Brasserie : Ajoutez de nouvelles brasseries via un formulaire.
- Modifier une Brasserie : Modifiez les informations d'une brasserie existante.
- Supprimer une Brasserie : Supprimez une brasserie de la liste.
- Détails des Brasseries : Affichez les détails d'une brasserie et les bières associées dans une modal.

### Navigation

- Navbar : Accédez facilement aux différentes sections de l'application via la barre de navigation.
- Footer : Affichez des informations de copyright et des messages de responsabilité.

## Configuration ESLint

Si vous développez une application de production, nous recommandons de mettre à jour la configuration pour activer les règles de linting basées sur les types :

- Configurez la propriété parserOptions au niveau supérieur comme ceci :

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Remplacez `tseslint.configs.recommended` par `tseslint.configs.recommendedTypeChecked` ou `tseslint.configs.strictTypeChecked`
- Ajoutez éventuellement `...tseslint.configs.stylisticTypeChecked`
- Installez [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) et mettez à jour la configuration :
  Remplacez tseslint.configs.recommended par tseslint.configs.recommendedTypeChecked ou tseslint.configs.strictTypeChecked.

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
