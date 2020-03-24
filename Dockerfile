# This image is based on the oficial nodejs docker image
FROM node:12-alpine AS base
RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY ./ ./
CMD ["npm", "start"]



