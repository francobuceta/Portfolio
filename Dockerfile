# Instalar node.
FROM node:18-alpine

# Crear carpeta dentro del contenedor para poner nuestro código.
WORKDIR /app

# Copiamos los archivos package.json y package-lock.json en el work directory.
COPY package*.json .

# Instalamos solo las dependencias de producción.
RUN npm install

# Copiamos todo una vez instaladas las dependencias.
COPY . .

# Hacemos el build.
RUN npm run build

# Creamos el puerto.
EXPOSE 8080

# Ejecutar aplicación.
CMD [ "npm", "run", "preview" ]