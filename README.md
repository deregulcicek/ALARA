# Psikolog Website - Production Ready Monorepo

A production-ready psychologist website built with Django (API) + React (Vite) with Docker Compose, designed for single VPS deployment with Caddy reverse proxy and Let's Encrypt SSL.

# Architecture

- **Backend**: Django 5 + Django REST Framework
- **Frontend**: React 18 + Vite + Tailwind CSS
- **Database**: PostgreSQL
- **Reverse Proxy**: Caddy with automatic HTTPS
- **Containerization**: Docker Compose
- **Deployment**: Single VPS (Hetzner-like)

# Features

### Backend Features
- **Blog System**: Posts with title, slug, cover image, excerpt, content (Markdown), tags, published_at, is_published
- **Public Blog API**: Paginated, search by title/tags, single post by slug
- **Contact Form**: Full validation, email sending via Brevo/Resend, rate limiting, reCAPTCHA v3
- **Admin Interface**: Django admin with CKEditor support
- **SEO**: Sitemap.xml, robots.txt, RSS feed
- **Security**: CSRF protection, CORS, secure cookies, rate limiting
- **Internationalization**: Turkish (tr) default with locale-aware date formatting

# Frontend Features
- **Pages**: Home, About, Blog (list + detail), Contact, Privacy, 404
- **Responsive Design**: Mobile-first with Tailwind CSS
- **SEO Optimized**: Meta tags, Open Graph, canonical URLs
- **Form Validation**: React Hook Form + Zod validation
- **API Integration**: Axios with error handling

# DevOps Features
- **Docker Compose**: Multi-service setup with health checks
- **Automatic SSL**: Caddy with Let's Encrypt
- **CI/CD**: GitHub Actions workflow
- **Monitoring**: Logging, health checks, backup scripts
- **Security**: HTTPS only in production, security headers

# Quick Start

# Prerequisites
- Docker and Docker Compose
- Git
- Make (optional, for convenience commands)

# Development Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd psychologist-site
   ```

2. **Copy environment file**
   ```bash
   cp env.example .env
   ```

3. **Edit environment variables**
   ```bash
   nano .env
   ```

4. **Start the development environment**
   ```bash
   make up
   # or
   docker-compose up -d
   ```

5. **Run migrations and create superuser**
   ```bash
   make migrate
   make superuser
   ```

6. **Seed sample data**
   ```bash
   docker-compose exec web python manage.py seed_data
   ```

7. **Access the application**
   - Frontend: http://localhost
   - Backend API: http://localhost/api
   - Admin: http://localhost/admin
   - API Docs: http://localhost/api/docs

# Available Make Commands

```bash
make up          # Start all services
make down        # Stop all services
make build       # Build all services
make migrate     # Run database migrations
make superuser   # Create Django superuser
make test        # Run tests
make logs        # View logs
make clean       # Clean up containers and volumes
```

# Production Deployment

# Automated Setup (Ubuntu 22.04)

1. **Run the setup script on your VPS**
   ```bash
   curl -fsSL https://raw.githubusercontent.com/yourusername/psychologist-site/main/deploy/setup.sh | bash
   ```

2. **Configure environment variables**
   ```bash
   nano /opt/psychologist-site/.env
   ```

3. **Update DNS records** to point to your server

4. **Start the application**
   ```bash
   cd /opt/psychologist-site
   docker-compose -f docker-compose.prod.yml up -d
   ```

5. **Create superuser and seed data**
   ```bash
   docker-compose -f docker-compose.prod.yml exec web python manage.py createsuperuser
   docker-compose -f docker-compose.prod.yml exec web python manage.py seed_data
   ```

# Manual Setup

1. **Install Docker and Docker Compose** on your VPS
2. **Clone the repository** to `/opt/psychologist-site`
3. **Configure environment variables** in `.env`
4. **Update DNS records** to point to your server
5. **Start with production compose file**:
   ```bash
   docker-compose -f docker-compose.prod.yml up -d
   ```

# Configuration

# Environment Variables

# Email Configuration

The application supports multiple email providers:

# Brevo (formerly Sendinblue)


# Resend
IL_MAILGUN_SENDER_DOMAIN=your-domain.com
```

### reCAPTCHA Configuration

1. Get reCAPTCHA v3 keys from [Google reCAPTCHA](https://www.google.com/recaptcha/)
2. Add to environment:
   ```env
   RECAPTCHA_SECRET_KEY=your-secret-key
   RECAPTCHA_SITE_KEY=your-site-key
   ```

# Project Structure

```
psychologist-site/
├── backend/                 # Django backend
│   ├── psychologist_site/   # Django project settings
│   ├── blog/               # Blog app
│   ├── contact/            # Contact app
│   ├── requirements.txt    # Python dependencies
│   └── Dockerfile         # Backend container
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utilities and API
│   │   └── main.jsx       # App entry point
│   ├── package.json       # Node dependencies
│   └── Dockerfile         # Frontend container
├── deploy/                 # Deployment files
│   ├── Caddyfile          # Development Caddy config
│   ├── Caddyfile.prod     # Production Caddy config
│   └── setup.sh           # Production setup script
├── docker-compose.yml     # Development compose
├── docker-compose.prod.yml # Production compose
├── Makefile               # Convenience commands
└── README.md              # This file
```

# Testing

# Backend Tests
```bash
make test
# or
docker-compose exec web python manage.py test
```

# Frontend Tests
```bash
cd frontend
npm test
```

# API Testing
- OpenAPI documentation: http://localhost/api/docs
- API schema: http://localhost/api/schema

# Monitoring and Maintenance

# Health Checks
- Database: PostgreSQL health check
- Backend: Gunicorn process monitoring
- Frontend: Static file serving
- Reverse Proxy: Caddy status

# Logging
- Application logs: `/opt/psychologist-site/logs/`
- Container logs: `docker-compose logs -f`
- System logs: `journalctl -u psychologist-site`

# Backup
Automated daily backups include:
- Database dump
- Media files
- Configuration files

Manual backup:
```bash
/opt/psychologist-site/backup.sh
```

### Updates
```bash
/opt/psychologist-site/update.sh
```

# Security Features

- **HTTPS Only**: Automatic SSL with Let's Encrypt
- **Security Headers**: HSTS, CSP, X-Frame-Options, etc.
- **Rate Limiting**: IP and email-based rate limiting
- **CSRF Protection**: Django CSRF middleware
- **CORS Configuration**: Restricted to allowed origins
- **Input Validation**: Server-side validation for all inputs
- **SQL Injection Protection**: Django ORM protection
- **XSS Protection**: Content Security Policy

# SEO Features

- **Meta Tags**: Dynamic meta tags for each page
- **Open Graph**: Social media sharing optimization
- **Canonical URLs**: Prevent duplicate content
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine directives
- **RSS Feed**: Blog RSS feed
- **Structured Data**: JSON-LD for rich snippets

# Performance Optimizations

- **Static File Serving**: Caddy serves static files directly
- **Image Optimization**: Responsive images with proper sizing
- **Caching**: Browser caching for static assets
- **Database Indexing**: Optimized database queries
- **CDN Ready**: Easy CDN integration

# Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

# License

This project is licensed under the MIT License - see the LICENSE file for details.

# Support

For support and questions:
- Create an issue on GitHub
- Check the documentation
- Review the troubleshooting section

# Changelog

# v1.0.0
- Initial release
- Django + React setup
- Docker Compose configuration
- Production deployment scripts
- CI/CD pipeline
- Complete feature set

---

**Built with ❤️ for mental health professionals**
