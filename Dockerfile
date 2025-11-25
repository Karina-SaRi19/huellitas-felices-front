# --- Etapa 1: Construcción (Build) ---
FROM node:20-alpine AS build

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de manifiesto del proyecto
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Construye la aplicación para producción
RUN npm run build

# --- Etapa 2: Servidor (Runtime) con NGINX ---
FROM nginx:alpine

# Copia la configuración de NGINX personalizada
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia los archivos estáticos de la aplicación construida
# desde la etapa 'build' al directorio de servicio de NGINX
COPY --from=build /app/dist /usr/share/nginx/html

# El puerto 80 es el predeterminado para NGINX
EXPOSE 80

# Comando para iniciar NGINX
CMD ["nginx", "-g", "daemon off;"]