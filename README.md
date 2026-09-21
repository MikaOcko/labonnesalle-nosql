# La bonne salle au bon moment - No SQL

Projet d’entraînement à la réalisation d’une API CRUD (Create, Read, Update, Delete) pour gérer des **salles**, développé avec **Node.js**, **Express**, **TypeScript** et **Mongoose** (MongoDB).

## Fonctionnalités

- ✅ Ajouter une salle
- ✅ Récupérer les informations d’une salle (par ID)
- ✅ Récupérer la liste de toutes les salles
- ✅ Modifier les informations d’une salle
- ✅ Supprimer une salle

## Stack technique

- **Runtime** : Node.js  
- **Langage** : TypeScript  
- **Framework HTTP** : Express.js  
- **ORM** : Mongoose (MongoDB)
- **Security** : Dotenv (variable d'environnement), Zod (validation)

## Prérequis

- Node.js
- npm ou yarn
- Une instance MongoDB (locale ou distante)

## Installation

1. Cloner le dépôt :

```bash
git clone <URL_DU_REPO>
cd <nom-du-dossier>
```

2. Installer les dépendances :

```bash
npm install
# ou
yarn install
```

3. Lancer le serveur:

```bash
npm start
# ou 
node src/app.ts
```

Le serveur devrait être accessible à l’adresse : `http://localhost:3000`

## Structure du projet (exemple)

```text
.
├─ src/
│  ├─ app.ts          # point d’entrée
│  ├─ models/
│  │  └─ Salle.ts       # modèle Mongoose
│  ├─ routes/
│  │  └─ salles.ts      # routes CRUD
│  └─ types/
│     └─ ...            # types TypeScript (optionnel)
├─ package.json
└─ tsconfig.json
```

## Endpoints API

Tous les endpoints sont préfixés par `/api/salles` (à adapter selon ton code).

- `POST /api/rooms`  
  Créer une nouvelle salle.

- `GET /api/rooms`  
  Récupérer la liste de toutes les salles.

- `GET /api/rooms/:id`  
  Récupérer les informations d’une salle par son ID.

- `PUT /api/rooms/:id` (ou `PATCH`)  
  Modifier les informations d’une salle.

- `DELETE /api/rooms/:id`  
  Supprimer une salle.

Exemple de corps de requête pour créer une salle :

```json
{
  "label": "Salle D404",
  "capacity": 25,
  "site": "Lyon",
  "building": "Bâtiment D",
  "floor": 4,
  "material": ["Projecteur", "Tableau blanc", "Ordinateur"]
}
```

## Tests d’API

- [Postman](https://www.postman.com/)
- [Insomnia](https://insomnia.rest/)

## Licence

Ce projet est réalisé dans un cadre d’apprentissage. 
