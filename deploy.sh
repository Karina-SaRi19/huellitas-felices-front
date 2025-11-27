#!/bin/bash
# ----------------------------------------------------
# Blue-Green Deployment Script with Host Nginx
# ----------------------------------------------------

set -e  # Exit on error

# Configuration Variables
REPO_NAME="karinasaenz/huellitas-felices-front"  
TAG="latest"
IMAGE_NAME="$REPO_NAME:$TAG"
BLUE_CONTAINER_NAME="huellitas-blue"
GREEN_CONTAINER_NAME="huellitas-green"
PORT_BLUE=8081
PORT_GREEN=8082
NGINX_CONFIG="/etc/nginx/conf.d/proxy.conf"
HEALTH_CHECK_RETRIES=5
HEALTH_CHECK_DELAY=3

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "============================================"
echo "Blue-Green Deployment Script"
echo "============================================"

# 1. Determine ACTIVE and INACTIVE environments
if docker ps --format '{{.Names}}' | grep -q "^${BLUE_CONTAINER_NAME}$"; then
    if docker ps --format '{{.Names}}' | grep -q "^${GREEN_CONTAINER_NAME}$"; then
        # Both running - check nginx config to see which is active
        if grep -q "$PORT_BLUE" $NGINX_CONFIG; then
            ACTIVE_CONTAINER=$BLUE_CONTAINER_NAME
            INACTIVE_CONTAINER=$GREEN_CONTAINER_NAME
            ACTIVE_PORT=$PORT_BLUE
            INACTIVE_PORT=$PORT_GREEN
        else
            ACTIVE_CONTAINER=$GREEN_CONTAINER_NAME
            INACTIVE_CONTAINER=$BLUE_CONTAINER_NAME
            ACTIVE_PORT=$PORT_GREEN
            INACTIVE_PORT=$PORT_BLUE
        fi
    else
        # Only blue running
        ACTIVE_CONTAINER=$BLUE_CONTAINER_NAME
        INACTIVE_CONTAINER=$GREEN_CONTAINER_NAME
        ACTIVE_PORT=$PORT_BLUE
        INACTIVE_PORT=$PORT_GREEN
    fi
elif docker ps --format '{{.Names}}' | grep -q "^${GREEN_CONTAINER_NAME}$"; then
    # Only green running
    ACTIVE_CONTAINER=$GREEN_CONTAINER_NAME
    INACTIVE_CONTAINER=$BLUE_CONTAINER_NAME
    ACTIVE_PORT=$PORT_GREEN
    INACTIVE_PORT=$PORT_BLUE
else
    # Nothing running - start with blue
    ACTIVE_CONTAINER="none"
    INACTIVE_CONTAINER=$BLUE_CONTAINER_NAME
    ACTIVE_PORT=0
    INACTIVE_PORT=$PORT_BLUE
fi

echo -e "${GREEN}Active Environment:${NC} $ACTIVE_CONTAINER (Port: $ACTIVE_PORT)"
echo -e "${YELLOW}Target Environment:${NC} $INACTIVE_CONTAINER (Port: $INACTIVE_PORT)"
echo "----------------------------------------------------"

# 2. Build or Pull the new image
echo "Step 1: Building new image..."
if [ -f "Dockerfile" ]; then
    docker build -t $IMAGE_NAME . || {
        echo -e "${RED}ERROR: Failed to build image${NC}"
        exit 1
    }
else
    docker pull $IMAGE_NAME || {
        echo -e "${RED}ERROR: Failed to pull image${NC}"
        exit 1
    }
fi
echo -e "${GREEN}✓ Image ready: $IMAGE_NAME${NC}"
echo "----------------------------------------------------"

# 3. Stop and remove the INACTIVE container
echo "Step 2: Preparing inactive environment ($INACTIVE_CONTAINER)..."
docker stop $INACTIVE_CONTAINER 2>/dev/null || true
docker rm $INACTIVE_CONTAINER 2>/dev/null || true
echo -e "${GREEN}✓ Inactive environment cleaned${NC}"
echo "----------------------------------------------------"

# 4. Deploy new version to INACTIVE environment
echo "Step 3: Deploying new version to $INACTIVE_CONTAINER (Port: $INACTIVE_PORT)..."
docker run -d \
    --name $INACTIVE_CONTAINER \
    --restart unless-stopped \
    -p $INACTIVE_PORT:80 \
    $IMAGE_NAME || {
        echo -e "${RED}ERROR: Failed to start new container${NC}"
        exit 1
    }
echo -e "${GREEN}✓ New container deployed${NC}"
echo "----------------------------------------------------"

# 5. Health Check on new deployment
echo "Step 4: Running health checks on new deployment..."
HEALTHY=false
for i in $(seq 1 $HEALTH_CHECK_RETRIES); do
    echo "Health check attempt $i/$HEALTH_CHECK_RETRIES..."
    sleep $HEALTH_CHECK_DELAY
    
    if curl -f -s http://localhost:$INACTIVE_PORT/ > /dev/null 2>&1; then
        HEALTHY=true
        echo -e "${GREEN}✓ Health check passed${NC}"
        break
    fi
done

if [ "$HEALTHY" = false ]; then
    echo -e "${RED}ERROR: Health check failed after $HEALTH_CHECK_RETRIES attempts${NC}"
    echo "Rolling back - stopping new container..."
    docker stop $INACTIVE_CONTAINER
    docker rm $INACTIVE_CONTAINER
    exit 1
fi
echo "----------------------------------------------------"

# 6. Switch Nginx to point to new container
echo "Step 5: Switching traffic to new environment..."

# Backup current config
cp $NGINX_CONFIG ${NGINX_CONFIG}.backup

# Create new nginx configuration
cat > $NGINX_CONFIG <<EOF
upstream frontend {
    server 127.0.0.1:$INACTIVE_PORT;
}

server {
    listen 80;
    server_name 164.92.81.133;
    
    location / {
        proxy_pass http://frontend;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        
        # Health check and timeout settings
        proxy_connect_timeout 5s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }
}
EOF

# Test nginx configuration
if ! nginx -t 2>/dev/null; then
    echo -e "${RED}ERROR: Invalid nginx configuration${NC}"
    echo "Restoring backup..."
    mv ${NGINX_CONFIG}.backup $NGINX_CONFIG
    docker stop $INACTIVE_CONTAINER
    docker rm $INACTIVE_CONTAINER
    exit 1
fi

# Reload nginx
nginx -s reload || {
    echo -e "${RED}ERROR: Failed to reload nginx${NC}"
    echo "Restoring backup..."
    mv ${NGINX_CONFIG}.backup $NGINX_CONFIG
    nginx -s reload
    exit 1
}

echo -e "${GREEN}✓ Traffic switched to $INACTIVE_CONTAINER${NC}"
echo "----------------------------------------------------"

# 7. Verify the switch worked
echo "Step 6: Verifying traffic switch..."
sleep 2
if curl -f -s http://localhost/ > /dev/null 2>&1; then
    echo -e "${GREEN}✓ Public endpoint responding correctly${NC}"
else
    echo -e "${YELLOW}Warning: Public endpoint check failed, but continuing...${NC}"
fi
echo "----------------------------------------------------"

# 8. Cleanup old container (optional - keep for quick rollback)
echo "Step 7: Cleanup options..."
echo ""
echo "The old container ($ACTIVE_CONTAINER) is still running for quick rollback."
echo ""
echo "To remove it manually later, run:"
echo "  docker stop $ACTIVE_CONTAINER && docker rm $ACTIVE_CONTAINER"
echo ""
echo "To rollback immediately, run:"
echo "  docker stop $INACTIVE_CONTAINER && nginx -s reload"
echo "  (Then manually update nginx config to point back to port $ACTIVE_PORT)"
echo "----------------------------------------------------"

# 9. Success summary
echo -e "${GREEN}"
echo "============================================"
echo "  DEPLOYMENT SUCCESSFUL!"
echo "============================================"
echo -e "${NC}"
echo "Active Environment: $INACTIVE_CONTAINER (Port: $INACTIVE_PORT)"
echo "Previous Environment: $ACTIVE_CONTAINER (Port: $ACTIVE_PORT) - Still running"
echo ""
echo "Public URL: http://164.92.81.133/"
echo ""
echo "Deployment completed at: $(date)"
echo "============================================"

# Cleanup backup
rm -f ${NGINX_CONFIG}.backup
