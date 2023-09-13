FROM node:alpine3.18

WORKDIR /backend

COPY package*.json ./

RUN npm ci

COPY . . 

EXPOSE 4000

CMD ["npm", "start"]

