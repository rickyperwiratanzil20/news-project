FROM node:14-alpine

WORKDIR /app/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD npm start