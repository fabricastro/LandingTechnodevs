# Usa una imagen oficial de Node.js como base
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de la aplicación
COPY package.json package-lock.json ./
RUN npm install --production

# Copia el resto de los archivos de la aplicación
COPY . .

# Construye el proyecto
RUN npm run build

# Expone el puerto 3000 (o el que uses)
EXPOSE 3000

# Comando para iniciar la aplicación en modo SSR
CMD ["node", "dist/server/entry.mjs", "--", "--host"]