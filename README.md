# 🎲 App-JDR-Planner

Application web fullstack permettant aux groupes de joueurs de JDR de trouver des créneaux communs pour leurs sessions, en fonction des disponibilités ouvertes par le Maître de Jeu.

---

## Table des matières

- [Aperçu](#aperçu)
- [Stack technique](#stack-technique)
- [Structure du projet](#structure-du-projet)
- [Installation](#installation)
- [Variables d'environnement](#variables-denvironnement)
- [Scripts disponibles](#scripts-disponibles)
- [Roadmap](#roadmap)

---

## Aperçu

Le MJ publie ses créneaux de disponibilité. Les joueurs indiquent les leurs. L'application croise les données et propose les meilleures dates pour organiser une session.

---

## Stack technique

### Backend
- **Runtime** : Node.js (ESM)
- **Framework** : Express
- **ORM** : Prisma 7 (`prisma-client-js`)
- **Base de données** : SQLite (dev) — via `better-sqlite3`

### Frontend
- **Bundler** : Vite
- **UI** : React

---

## Structure du projet

```
App-JDR-Planner/
├── backend/
│   ├── generated/
│   │   └── prisma/          # Client Prisma généré (ne pas modifier)
│   ├── lib/
│   │   └── prisma.js        # Singleton PrismaClient
│   ├── prisma/
│   │   ├── migrations/      # Historique des migrations
│   │   └── schema.prisma    # Schéma de la base de données
│   ├── .env                 # Variables d'environnement (non versionné)
│   ├── app.js               # Point d'entrée Express
│   ├── prisma.config.js     # Configuration Prisma
│   └── package.json
├── frontend/                # Application React/Vite (à venir)
└── README.md
```

---

## Installation

### Prérequis

- Node.js >= 20.19

### Cloner le dépôt

```bash
git clone https://github.com/Noboo3472/app-jdr-planner.git
cd app-jdr-planner
```

### Installer les dépendances backend

```bash
cd backend
npm install
```

### Appliquer les migrations et générer le client Prisma

```bash
npx prisma migrate dev
npx prisma generate
```

### Lancer le serveur

```bash
npm run dev
```

---

## Variables d'environnement

Crée un fichier `.env` à la racine de `backend/` en te basant sur l'exemple ci-dessous :

```env
DATABASE_URL="file:./dev.db"
PORT=3000
```

---

## Scripts disponibles

Depuis `backend/` :

| Commande | Description |
|---|---|
| `npm run dev` | Lance le serveur en mode watch |
| `npx prisma migrate dev` | Crée et applique une migration |
| `npx prisma generate` | Régénère le client Prisma |
| `npx prisma studio` | Interface visuelle pour la base de données |

---

## Roadmap

- [x] Initialisation backend — Node.js + Express + Prisma 7
- [x] Initialisation frontend — Vite + React
- [ ] Authentification — inscription / connexion / déconnexion
- [ ] Création de table de jeu
- [ ] Gestion du planning des sessions
- [ ] *(Optionnel)* Notification Discord lors de l'ouverture d'un créneau