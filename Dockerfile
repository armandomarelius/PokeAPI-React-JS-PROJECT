# Etapa 1: Construir la aplicación
FROM node:23-alpine AS builder

# Establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar los archivos de configuración del proyecto
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Exponer el puerto 80
EXPOSE 80

CMD ["node", "src/server.js"]