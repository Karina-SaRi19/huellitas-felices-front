#!/bin/bash

# Nombre de tu imagen de Docker (¡Súbela a Docker Hub primero!)
IMAGE_TAG="karinasari19/huellitas-felices-front:latest" 
# Nombre del archivo de configuración de Nginx externo en el VPS (ejemplo)
NGINX_CONF="/etc/nginx/sites-available/huellitas_proxy.conf" 
# Puertos para el Blue-Green
BLUE_PORT="8080"
GREEN_PORT="8081"

# Determina qué puerto está ACTIVO leyendo la configuración de Nginx
# Si la configuración actual apunta al BLUE, el nuevo despliegue es GREEN.
if grep -q "proxy_pass http://localhost:$BLUE_PORT;" $NGINX_CONF; then
    NEW_PORT=$GREEN_PORT
    OLD_PORT=$BLUE_PORT
    NEW_CONTAINER_NAME="green-app"
    OLD_CONTAINER_NAME="blue-app"
else
    NEW_PORT=$BLUE_PORT
    OLD_PORT=$GREEN_PORT
    NEW_CONTAINER_NAME="blue-app"
    OLD_CONTAINER_NAME="green-app"
fi

echo "Desplegando la nueva versión ($NEW_CONTAINER_NAME) en el puerto $NEW_PORT..."

# 1. Descargar la nueva imagen
docker pull $IMAGE_TAG

# 2. Levantar el nuevo contenedor en el puerto inactivo
docker run -d --name $NEW_CONTAINER_NAME -p $NEW_PORT:80 $IMAGE_TAG

echo "Nueva versión desplegada. Verificando salud..."
sleep 15 # Espera a que la aplicación esté lista

# 3. SWAP (Cambio de tráfico): Actualizar Nginx para apuntar al nuevo puerto
# Este comando cambia el puerto en el archivo de configuración de Nginx externo
sudo sed -i "s/$OLD_PORT/$NEW_PORT/g" $NGINX_CONF

# 4. Recargar Nginx para aplicar el cambio sin interrupción
echo "Recargando Nginx para completar el SWAP..."
sudo nginx -s reload

# 5. Detener y eliminar el contenedor antiguo
echo "Deteniendo y eliminando la versión anterior ($OLD_CONTAINER_NAME)..."
docker stop $OLD_CONTAINER_NAME
docker rm $OLD_CONTAINER_NAME

echo "¡Despliegue Blue-Green exitoso! El servicio corre en el puerto $NEW_PORT."