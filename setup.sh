#!/bin/bash

# Production deployment setup script for Ubuntu 22.04
# Run as root or with sudo

set -e

echo "🚀 Setting up Psychologist Website on Ubuntu 22.04..."

# Update system
echo "📦 Updating system packages..."
apt update && apt upgrade -y

# Install required packages
echo "🔧 Installing required packages..."
apt install -y curl wget git nginx certbot python3-certbot-nginx

# Install Docker
echo "🐳 Installing Docker..."
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
rm get-docker.sh

# Install Docker Compose
echo "🐙 Installing Docker Compose..."
curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

# Create application directory
echo "📁 Creating application directory..."
mkdir -p /opt/psychologist-site
cd /opt/psychologist-site

# Clone repository (replace with your actual repository URL)
echo "📥 Cloning repository..."
# git clone https://github.com/yourusername/psychologist-site.git .

# Create environment file
echo "⚙️ Creating environment file..."
cat > .env << EOF
# Domain configuration
DOMAIN=yourdomain.com

# Django settings
DJANGO_SECRET_KEY=$(openssl rand -base64 32)
DEBUG=False
ALLOWED_HOSTS=yourdomain.com,www.yourdomain.com

# Database
POSTGRES_DB=psychologist_site
POSTGRES_USER=postgres
POSTGRES_PASSWORD=$(openssl rand -base64 32)

# Email settings (Brevo/Resend)
ANYMAIL_MAILGUN_API_KEY=your-mailgun-api-key
ANYMAIL_MAILGUN_SENDER_DOMAIN=your-domain.com
DEFAULT_FROM_EMAIL=noreply@yourdomain.com

# reCAPTCHA
RECAPTCHA_SECRET_KEY=your-recaptcha-secret-key
RECAPTCHA_SITE_KEY=your-recaptcha-site-key

# CORS settings
CORS_ALLOWED_ORIGINS=https://yourdomain.com,https://www.yourdomain.com

# Docker
DOCKER_USERNAME=your-docker-username

# Logging
LOG_LEVEL=INFO
EOF

# Set proper permissions
chmod 600 .env

# Create logs directory
mkdir -p logs

# Create systemd service for the application
echo "🔧 Creating systemd service..."
cat > /etc/systemd/system/psychologist-site.service << EOF
[Unit]
Description=Psychologist Website
Requires=docker.service
After=docker.service

[Service]
Type=oneshot
RemainAfterExit=yes
WorkingDirectory=/opt/psychologist-site
ExecStart=/usr/local/bin/docker-compose -f docker-compose.prod.yml up -d
ExecStop=/usr/local/bin/docker-compose -f docker-compose.prod.yml down
TimeoutStartSec=0

[Install]
WantedBy=multi-user.target
EOF

# Enable and start the service
systemctl daemon-reload
systemctl enable psychologist-site.service

# Configure firewall
echo "🔥 Configuring firewall..."
ufw allow 22
ufw allow 80
ufw allow 443
ufw --force enable

# Create backup script
echo "💾 Creating backup script..."
cat > /opt/psychologist-site/backup.sh << 'EOF'
#!/bin/bash
BACKUP_DIR="/opt/backups/psychologist-site"
DATE=$(date +%Y%m%d_%H%M%S)

mkdir -p $BACKUP_DIR

# Backup database
docker-compose -f /opt/psychologist-site/docker-compose.prod.yml exec -T db pg_dump -U postgres psychologist_site > $BACKUP_DIR/db_$DATE.sql

# Backup media files
tar -czf $BACKUP_DIR/media_$DATE.tar.gz -C /opt/psychologist-site media/

# Keep only last 7 days of backups
find $BACKUP_DIR -name "*.sql" -mtime +7 -delete
find $BACKUP_DIR -name "*.tar.gz" -mtime +7 -delete

echo "Backup completed: $DATE"
EOF

chmod +x /opt/psychologist-site/backup.sh

# Create cron job for backups
echo "⏰ Setting up backup cron job..."
(crontab -l 2>/dev/null; echo "0 2 * * * /opt/psychologist-site/backup.sh") | crontab -

# Create monitoring script
echo "📊 Creating monitoring script..."
cat > /opt/psychologist-site/monitor.sh << 'EOF'
#!/bin/bash
cd /opt/psychologist-site

# Check if containers are running
if ! docker-compose -f docker-compose.prod.yml ps | grep -q "Up"; then
    echo "ALERT: Some containers are not running!"
    # Send notification (implement your preferred method)
fi

# Check disk space
DISK_USAGE=$(df / | awk 'NR==2 {print $5}' | sed 's/%//')
if [ $DISK_USAGE -gt 80 ]; then
    echo "ALERT: Disk usage is above 80%!"
fi

# Check memory usage
MEM_USAGE=$(free | awk 'NR==2{printf "%.0f", $3*100/$2}')
if [ $MEM_USAGE -gt 90 ]; then
    echo "ALERT: Memory usage is above 90%!"
fi
EOF

chmod +x /opt/psychologist-site/monitor.sh

# Create update script
echo "🔄 Creating update script..."
cat > /opt/psychologist-site/update.sh << 'EOF'
#!/bin/bash
cd /opt/psychologist-site

echo "🔄 Updating application..."

# Pull latest changes
git pull origin main

# Pull latest backend images
docker-compose -f docker-compose.prod.yml pull web || true

# Rebuild frontend (Caddy service with built frontend)
echo "🔨 Rebuilding frontend..."
docker-compose -f docker-compose.prod.yml build caddy

# Restart services
docker-compose -f docker-compose.prod.yml down
docker-compose -f docker-compose.prod.yml up -d

# Run migrations
docker-compose -f docker-compose.prod.yml exec web python manage.py migrate

# Collect static files
docker-compose -f docker-compose.prod.yml exec web python manage.py collectstatic --noinput

echo "✅ Update completed!"
EOF

chmod +x /opt/psychologist-site/update.sh

echo "✅ Setup completed!"
echo ""
echo "📋 Next steps:"
echo "1. Edit /opt/psychologist-site/.env with your actual domain and settings"
echo "2. Update DNS records to point to this server"
echo "3. Run: cd /opt/psychologist-site && docker-compose -f docker-compose.prod.yml up -d"
echo "4. Create superuser: docker-compose -f docker-compose.prod.yml exec web python manage.py createsuperuser"
echo "5. Seed data: docker-compose -f docker-compose.prod.yml exec web python manage.py seed_data"
echo ""
echo "🔗 Useful commands:"
echo "- Start: systemctl start psychologist-site"
echo "- Stop: systemctl stop psychologist-site"
echo "- Status: systemctl status psychologist-site"
echo "- Logs: docker-compose -f docker-compose.prod.yml logs -f"
echo "- Update: /opt/psychologist-site/update.sh"
echo "- Backup: /opt/psychologist-site/backup.sh"
