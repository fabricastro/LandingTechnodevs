# Usa una imagen base de Node.js para la construcción
FROM node:18 AS builder

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de tu proyecto al contenedor
COPY package*.json ./
COPY tsconfig*.json ./
COPY . .

# Instala las dependencias necesarias
RUN npm install

# Construye la aplicación de Astro
RUN npm run build

# Usa una imagen base ligera de Nginx para servir la aplicación
FROM nginx:alpine

# Copia los archivos construidos de Astro al directorio de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expone el puerto 80 para acceder a la aplicación
EXPOSE 80

# Inicia el servidor de Nginx
CMD ["nginx", "-g", "daemon off;"]
