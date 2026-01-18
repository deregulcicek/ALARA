.PHONY: up down build migrate superuser test clean logs

# Start all services
up:
	docker-compose up -d

# Stop all services
down:
	docker-compose down

# Build all services
build:
	docker-compose build

# Run migrations
migrate:
	docker-compose exec web python manage.py migrate

# Create superuser
superuser:
	docker-compose exec web python manage.py createsuperuser

# Run tests
test:
	docker-compose exec web python manage.py test

# View logs
logs:
	docker-compose logs -f

# Clean up containers and volumes
clean:
	docker-compose down -v
	docker system prune -f

# Full setup (build, up, migrate)
setup: build up migrate

# Production build
prod-build:
	docker-compose -f docker-compose.prod.yml build

# Production up
prod-up:
	docker-compose -f docker-compose.prod.yml up -d

# Collect static files
collectstatic:
	docker-compose exec web python manage.py collectstatic --noinput
