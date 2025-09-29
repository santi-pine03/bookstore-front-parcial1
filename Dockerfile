FROM node:18-alpine
# Carpeta de trabajo dentro del contenedor
WORKDIR /app
# Copia primero los manifests para cachear deps
COPY package*.json ./
# Instalar dependencias
RUN npm install
# Copia el resto del código
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]
