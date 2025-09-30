# Exercices docker

## Membres du groupe 

- Adrien Clement
- Nicolas Massai
- Abdelghani Hamaz
- Yassin Ait Mensour

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

