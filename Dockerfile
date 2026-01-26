# build stage
FROM node:18 AS build
WORKDIR /app

# Copy package files first for better caching
COPY frontend/package*.json ./frontend/
WORKDIR /app/frontend
RUN npm ci --only=production=false

# Copy all frontend files (this will invalidate cache when files change)
COPY frontend ./
WORKDIR /app/frontend

# Build the frontend
RUN npm run build

# serve stage
FROM caddy:2-alpine
COPY --from=build /app/frontend/dist /usr/share/caddy
COPY Caddyfile.prod /etc/caddy/Caddyfile

# Cache invalidated: 27 Oca 2026 Sal +03 01:12:05
