# Exercices docker

## Membres du groupe 

<<<<<<< HEAD
- Adrien
- Nicolas
- Abdelghani
- Yassin
- Lika
=======
- Adrien Clement
- Nicolas Massai
- Abdelghani Hamaz
- Yassin Ait Mensour
>>>>>>> f0c6f7db4a1657612cd46e3ebc160b7031031fa9

## Exercices

### Exercice 3

#### Question 1

```
FROM node:18-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD npm start
```

l'erreur se trouve sur la dernière ligne : on doit écrire CMD ["npm ", "start"]

#### Question 2

```
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["node", "server.js"]
```

Ici il faut pas tout copier dans le risque de copier des nodes modules déjà installés et il faut RUN npm install avant de copier

#### Question 3

Le build réussit.

En listant avec docker images debug-3, on voit une taille > 1 Go.


Utilisation de node:18 (910 Mo).

Pas de multi-stage build → on garde node_modules, les fichiers de build et tout le code source.

Plusieurs RUN → couches supplémentaires.

L’image est énorme car elle embarque trop de dépendances et une base d’image lourde. 
Optimisation = utiliser node:18-alpine + multi-stage.

#### Question 4

Quand tu fais docker compose -f docker-compose-broken.yml up, l’application démarre mais ne parvient pas à se connecter à la base.

Erreur visible dans les logs du service web : ECONNREFUSED ou could not connect to postgres.

l’API attend DB_HOST=postgres, mais dans le docker-compose.yml le service est nommé database.

Corriger DB_HOST → database.

docker compose logs web
