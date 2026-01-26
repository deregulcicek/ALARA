#!/bin/bash
# Production update script
# This script pulls latest changes, rebuilds frontend, and restarts services

set -e

cd "$(dirname "$0")"

echo "🔄 Updating application..."

# Pull latest changes from GitHub
echo "📥 Pulling latest changes from GitHub..."
git pull origin main

# Pull latest backend images (if using pre-built images)
if [ -n "${DOCKER_USERNAME}" ]; then
    echo "📦 Pulling latest backend image..."
    docker-compose -f docker-compose.prod.yml pull web || echo "⚠️  Could not pull backend image, will use existing"
fi

# Rebuild frontend (Caddy service with built frontend)
echo "🔨 Rebuilding frontend with latest changes..."
docker-compose -f docker-compose.prod.yml build caddy

# Restart services
echo "🔄 Restarting services..."
docker-compose -f docker-compose.prod.yml down
docker-compose -f docker-compose.prod.yml up -d

# Wait for services to be ready
echo "⏳ Waiting for services to start..."
sleep 5

# Run migrations
echo "🗄️  Running database migrations..."
docker-compose -f docker-compose.prod.yml exec -T web python manage.py migrate || echo "⚠️  Migration failed or not needed"

# Collect static files
echo "📦 Collecting static files..."
docker-compose -f docker-compose.prod.yml exec -T web python manage.py collectstatic --noinput || echo "⚠️  Static collection failed or not needed"

echo ""
echo "✅ Update completed successfully!"
echo ""
echo "📊 Service status:"
docker-compose -f docker-compose.prod.yml ps
