FROM node:18.17.0-alpine

WORKDIR /code

COPY . .

RUN npm ci

# RUN npm run build

EXPOSE 3000

# RUN npm install -g serve