# build stage
FROM node:18 AS build
WORKDIR /app
COPY frontend ./frontend
WORKDIR /app/frontend
RUN npm install
RUN npm run build

# serve stage
FROM caddy:2-alpine
COPY --from=build /app/frontend/dist /usr/share/caddy
COPY Caddyfile.prod /etc/caddy/Caddyfile
