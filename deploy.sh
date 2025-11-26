#!/bin/bash
# ----------------------------------------------------
# Script de Despliegue Blue-Green - VERSIÓN FINAL CORREGIDA
# ----------------------------------------------------

# Variables de configuración
REPO_NAME="karinasaenz/huellitas-felices-front"  
TAG="latest"
IMAGE_NAME="$REPO_NAME:$TAG"
BLUE_CONTAINER_NAME="huellitas-blue"
GREEN_CONTAINER_NAME="huellitas-green"
NGINX_PROXY_NAME="huellitas-proxy"
NGINX_NETWORK="huellitas-net"
PORT_BLUE=8081
PORT_GREEN=8082
PUBLIC_PORT=80

# 1. Determinar el entorno ACTIVO y el INACTIVO
# Verificar si el contenedor BLUE existe y está corriendo
if docker ps --format '{{.Names}}' | grep -q $BLUE_CONTAINER_NAME; then
ACTIVE_CONTAINER=$BLUE_CONTAINER_NAME
INACTIVE_CONTAINER=$GREEN_CONTAINER_NAME
NEW_PORT=$PORT_GREEN
OLD_PORT=$PORT_BLUE
else
# Si BLUE no está corriendo, se da por hecho que GREEN es el activo (o ninguno)
ACTIVE_CONTAINER=$GREEN_CONTAINER_NAME
INACTIVE_CONTAINER=$BLUE_CONTAINER_NAME
NEW_PORT=$PORT_BLUE
OLD_PORT=$PORT_GREEN
fi

echo "Entorno ACTIVO: $ACTIVE_CONTAINER (Puerto $OLD_PORT)"
echo "Entorno INACTIVO (a desplegar): $INACTIVE_CONTAINER (Puerto $NEW_PORT)"
echo "----------------------------------------------------"

# 2. Pull o Construcción de la nueva imagen
# En un pipeline real, se hace 'docker pull $IMAGE_NAME'
# Para el ejemplo, construimos la imagen:
echo "1. Construyendo la nueva imagen..."
docker build -t $IMAGE_NAME .
if [ $? -ne 0 ]; then
echo "ERROR: Falló la construcción de la imagen."
exit 1
fi
echo "Imagen construida: $IMAGE_NAME"
echo "----------------------------------------------------"

# 3. Crear red si no existe (para comunicación interna)
docker network create $NGINX_NETWORK 2>/dev/null || true

# 4. Detener y eliminar el contenedor INACTIVO anterior (si existe)
echo "2. Eliminando el contenedor INACTIVO anterior ($INACTIVE_CONTAINER)..."
docker stop $INACTIVE_CONTAINER 2>/dev/null
docker rm $INACTIVE_CONTAINER 2>/dev/null
echo "----------------------------------------------------"

# 5. Desplegar la nueva versión en el entorno INACTIVO
echo "3. Desplegando la nueva versión ($INACTIVE_CONTAINER) en el puerto $NEW_PORT..."
docker run -d \
--name $INACTIVE_CONTAINER \
--network $NGINX_NETWORK \
-p $NEW_PORT:80 \
$IMAGE_NAME
if [ $? -ne 0 ]; then
echo "ERROR: Falló el despliegue del nuevo contenedor."
exit 1
fi

# 6. Esperar a que el nuevo contenedor esté "saludable" (Health Check)
# En un entorno real, se debería hacer un HTTP GET al nuevo contenedor
echo "4. Esperando 10 segundos para Health Check del nuevo contenedor..."
sleep 10
echo "----------------------------------------------------"

# 7. Desplegar o actualizar el Proxy NGINX (El corazón del Blue-Green)
# Se crea la configuración NGINX completa para forzar la redirección
NEW_BACKEND="$INACTIVE_CONTAINER:80"

# Crea la configuración de proxy temporal con la estructura NGINX completa
cat > proxy.conf <<EOF
worker_processes 1;

events {
 worker_connections 1024;
}

http {
 include  /etc/nginx/mime.types;
 default_type application/octet-stream;
 sendfile on;
 keepalive_timeout 65;

 server {
     listen 80;

 location / {
     # Alterna el destino al nuevo contenedor
     proxy_pass http://$NEW_BACKEND;
     proxy_set_header Host \$host;
     proxy_set_header X-Real-IP \$remote_addr;
     proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
      }
     }
}
EOF

# 8. Desplegar el NGINX Proxy (si no existe) o Recargar su configuración
if ! docker ps -a --format '{{.Names}}' | grep -q $NGINX_PROXY_NAME; then
    echo "5. Desplegando el PROXY NGINX inicial en el puerto $PUBLIC_PORT..."
    docker run -d \
    --name $NGINX_PROXY_NAME \
    --network $NGINX_NETWORK \
    -p $PUBLIC_PORT:80 \
    -v "$(pwd)/proxy.conf":/etc/nginx/conf.d/default.conf \
    nginx:alpine
else
    echo "5. Recargando la configuración del PROXY NGINX para alternar a $INACTIVE_CONTAINER..."
    # Sobrescribe el archivo de configuración en el volumen montado y recarga NGINX
     docker cp proxy.conf $NGINX_PROXY_NAME:/etc/nginx/conf.d/default.conf
     docker exec $NGINX_PROXY_NAME nginx -s reload
fi

# 9. Limpieza
echo "6. Proceso de despliegue Blue-Green completado."
echo "La nueva versión ($INACTIVE_CONTAINER) ahora está ACTIVA en el puerto $PUBLIC_PORT."
echo "El contenedor antiguo ($ACTIVE_CONTAINER) sigue corriendo en el puerto $OLD_PORT para rollback rápido."
rm proxy.conf # Limpia el archivo de configuración temporal