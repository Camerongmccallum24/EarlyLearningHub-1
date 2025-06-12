# Docker Deployment Guide - GRO Early Learning Career Website

## Quick Start

### Development Environment
```bash
# Start development environment with hot reload
docker-compose -f docker-compose.dev.yml up -d

# View logs
docker-compose -f docker-compose.dev.yml logs -f web

# Stop development environment
docker-compose -f docker-compose.dev.yml down
```

### Production Environment
```bash
# Build and start production environment
docker-compose up -d

# View logs
docker-compose logs -f web

# Stop production environment
docker-compose down
```

## Environment Setup

### Required Environment Variables

Create a `.env.production` file for production deployment:

```env
# Database Configuration
DATABASE_URL=postgresql://gro_user:your_secure_password@database:5432/gro_careers
DATABASE_URL_ATS=postgresql://gro_user:your_secure_password@database:5432/gro_careers
PGHOST=database
PGPORT=5432
PGUSER=gro_user
PGPASSWORD=your_secure_password
PGDATABASE=gro_careers

# Application Configuration
NODE_ENV=production
PORT=5000

# API Keys (Add your actual keys)
OPENAI_API_KEY=your_openai_api_key_here

# Security
SESSION_SECRET=your_very_secure_session_secret_here
```

### SSL/HTTPS Setup

1. Obtain SSL certificates (Let's Encrypt recommended):
```bash
# Create SSL directory
mkdir -p ssl

# Using certbot for Let's Encrypt
certbot certonly --standalone -d groearlylearning.com -d www.groearlylearning.com
cp /etc/letsencrypt/live/groearlylearning.com/fullchain.pem ssl/cert.pem
cp /etc/letsencrypt/live/groearlylearning.com/privkey.pem ssl/key.pem
```

2. Uncomment HTTPS configuration in `nginx.conf`

## Deployment Commands

### Build Images
```bash
# Build production image
docker build -t gro-careers:latest .

# Build development image
docker build -f Dockerfile.dev -t gro-careers:dev .
```

### Database Management
```bash
# Initialize database
docker-compose exec database psql -U gro_user -d gro_careers -f /docker-entrypoint-initdb.d/init-db.sql

# Backup database
docker-compose exec database pg_dump -U gro_user gro_careers > backup.sql

# Restore database
docker-compose exec -T database psql -U gro_user gro_careers < backup.sql

# Run database migrations
docker-compose exec web npm run db:push
```

### Health Checks and Monitoring
```bash
# Check service health
docker-compose ps

# View application logs
docker-compose logs -f web

# View database logs
docker-compose logs -f database

# View nginx logs
docker-compose logs -f nginx

# Monitor resource usage
docker stats
```

## Production Deployment Checklist

### Pre-deployment
- [ ] Update environment variables in `.env.production`
- [ ] Obtain and configure SSL certificates
- [ ] Update domain names in `nginx.conf`
- [ ] Set secure database passwords
- [ ] Configure API keys
- [ ] Test build process locally

### Deployment
- [ ] Build production images
- [ ] Start services with `docker-compose up -d`
- [ ] Verify all services are healthy
- [ ] Test application functionality
- [ ] Set up monitoring and alerts
- [ ] Configure backup procedures

### Post-deployment
- [ ] Monitor application logs
- [ ] Set up automated backups
- [ ] Configure log rotation
- [ ] Set up SSL certificate renewal
- [ ] Document any custom configurations

## Scaling and Performance

### Horizontal Scaling
```bash
# Scale web service to 3 instances
docker-compose up -d --scale web=3

# Use load balancer configuration
# Update nginx.conf upstream block:
upstream web {
    server web_1:5000;
    server web_2:5000;
    server web_3:5000;
}
```

### Performance Optimization
- Enable Redis caching for session storage
- Configure proper resource limits in docker-compose.yml
- Use Docker multi-stage builds for smaller images
- Implement health checks for auto-recovery

## Troubleshooting

### Common Issues

**Database Connection Failed**
```bash
# Check database status
docker-compose exec database pg_isready -U gro_user

# Reset database
docker-compose down -v
docker-compose up -d database
```

**Application Won't Start**
```bash
# Check logs
docker-compose logs web

# Rebuild image
docker-compose build --no-cache web
docker-compose up -d web
```

**SSL/HTTPS Issues**
```bash
# Verify certificate files
ls -la ssl/
docker-compose exec nginx nginx -t
```

### Log Locations
- Application logs: `docker-compose logs web`
- Database logs: `docker-compose logs database`
- Nginx logs: `docker-compose logs nginx`
- System logs: `docker system events`

## Backup and Recovery

### Automated Backup Script
```bash
#!/bin/bash
# backup.sh
DATE=$(date +%Y%m%d_%H%M%S)
docker-compose exec -T database pg_dump -U gro_user gro_careers | gzip > "backup_${DATE}.sql.gz"
```

### Recovery Process
```bash
# Stop application
docker-compose stop web

# Restore database
gunzip -c backup_20241212_120000.sql.gz | docker-compose exec -T database psql -U gro_user gro_careers

# Restart application
docker-compose start web
```

## Security Considerations

- Change default passwords
- Use secrets management for API keys
- Enable firewall rules
- Regular security updates
- Monitor access logs
- Implement rate limiting
- Use HTTPS only
- Regular backup verification