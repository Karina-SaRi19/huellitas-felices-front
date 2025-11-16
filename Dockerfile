# ETAPA 1: BUILD (Compilación de la aplicación de Vite/React/etc.)
FROM node:18-alpine AS builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build 

# ---
# ETAPA 2: PRODUCTION (Usa Nginx para servir los archivos estáticos)
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

# 'dist' es la carpeta de salida común para proyectos con Vite
COPY --from=builder /app/dist /usr/share/nginx/html

# El contenedor escuchará en el puerto 80
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]