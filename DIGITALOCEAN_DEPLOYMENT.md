# DigitalOcean App Platform Deployment Guide

## Prerequisites

1. DigitalOcean account with App Platform access
2. GitHub repository with your codebase
3. Required API keys and secrets

## Deployment Steps

### 1. Create App Platform Application

1. Login to DigitalOcean Console
2. Navigate to App Platform
3. Click "Create App"
4. Select "GitHub" as source
5. Choose your repository and branch (typically `main`)

### 2. Configure Build Settings

The app will automatically detect Node.js. Ensure these settings:

- **Build Command**: `npm run build`
- **Run Command**: `npm start`
- **Environment**: Node.js
- **HTTP Port**: 8080 (or use PORT environment variable)

### 3. Add Environment Variables

In App Platform > Settings > Environment Variables, add:

**Required Variables:**
```
NODE_ENV=production
PORT=8080
DATABASE_URL=${your-managed-database.DATABASE_URL}
OPENAI_API_KEY=your_openai_api_key_here
SESSION_SECRET=your_very_secure_session_secret_here
```

**Optional Variables:**
```
REDIS_URL=${your-redis-instance.REDIS_URL}
```

### 4. Add Managed Database

1. In your App Platform app settings
2. Go to "Database" section
3. Add "Dev Database" or "Production Database"
4. Choose PostgreSQL 15
5. The DATABASE_URL will be automatically injected

### 5. Configure Domain (Optional)

1. Go to "Settings" > "Domains"
2. Add your custom domain
3. Configure DNS records as instructed
4. SSL certificates are automatically managed

### 6. Deploy Application

1. Click "Deploy" or trigger automatic deployment via Git push
2. Monitor deployment logs in the "Runtime Logs" section
3. Verify health check endpoint at `/health`

## Database Setup

The managed PostgreSQL database will be automatically provisioned. To initialize with sample data:

1. Connect to your database using the provided credentials
2. Run the SQL commands from `init-db.sql` manually, or
3. Use a database migration tool like Drizzle

## Monitoring and Scaling

### Health Checks
- App Platform automatically monitors `/health` endpoint
- Configure custom health checks if needed

### Scaling
- Configure automatic scaling in App Platform settings
- Set minimum and maximum instance counts
- Configure resource limits (CPU/Memory)

### Logs
- Access logs via App Platform console
- Set up log forwarding to external services if needed

## Cost Optimization

### Basic Tier
- Use `basic-xxs` for low traffic sites
- Estimated cost: $5-12/month for app + $15/month for database

### Production Tier
- Use `professional-xs` or higher for production
- Enable auto-scaling based on traffic
- Consider connection pooling for database efficiency

## Security Best Practices

1. **Environment Variables**: Store all secrets in App Platform environment variables
2. **Database**: Use managed database with automatic backups
3. **SSL/TLS**: Automatically enabled for all custom domains
4. **Network**: App Platform provides DDoS protection and WAF
5. **Updates**: Enable automatic security updates

## Troubleshooting

### Build Failures
- Check build logs in App Platform console
- Verify all dependencies are in package.json
- Ensure Node.js version compatibility

### Runtime Errors
- Monitor runtime logs for application errors
- Verify environment variables are set correctly
- Check database connectivity

### Performance Issues
- Monitor resource usage in App Platform metrics
- Scale up instance size if needed
- Optimize database queries and add indexes

## Backup and Recovery

### Database Backups
- Managed database includes automatic daily backups
- Retention period: 7 days for dev, 30 days for production
- Manual backups can be triggered via API

### Application Rollbacks
- App Platform keeps deployment history
- Rollback to previous deployment via console
- Use Git branches for feature rollbacks

## CI/CD Integration

### Automatic Deployments
- Triggered by Git pushes to configured branch
- Configure deployment notifications
- Set up staging environments for testing

### Manual Deployments
- Deploy specific commits via App Platform console
- Control deployment timing
- Review changes before deployment

## Files Created for Deployment

- `app.yaml` - App Platform configuration
- `.doignore` - Files to exclude from deployment
- `.env.example` - Environment variable template
- `DIGITALOCEAN_DEPLOYMENT.md` - This deployment guide

## Next Steps

1. Push your code to GitHub
2. Create App Platform application
3. Configure environment variables
4. Deploy and test
5. Set up custom domain (optional)
6. Configure monitoring and alerts