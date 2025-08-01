# Étape 1 : build Astro
FROM node:20 AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Étape 2 : serveur nginx statique
FROM nginx:alpine
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80

