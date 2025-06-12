#!/bin/bash

# Deployment preparation script for DigitalOcean App Platform
# This script ensures the codebase is clean and ready for GitHub export

echo "🚀 Preparing GRO Early Learning Career Website for DigitalOcean deployment..."

# Remove Replit-specific files if they exist
echo "📁 Cleaning Replit-specific files..."
rm -f .replit
rm -f replit.nix
rm -rf attached_assets/ 2>/dev/null || true

# Clean build artifacts
echo "🧹 Cleaning build artifacts..."
rm -rf dist/
rm -rf node_modules/.cache/
rm -rf .next/
rm -rf build/

# Verify required files exist
echo "✅ Verifying deployment configuration..."

if [ ! -f "app.yaml" ]; then
    echo "❌ app.yaml missing - required for App Platform deployment"
    exit 1
fi

if [ ! -f "package.json" ]; then
    echo "❌ package.json missing"
    exit 1
fi

if [ ! -f ".env.example" ]; then
    echo "❌ .env.example missing - required for environment setup"
    exit 1
fi

# Check for essential directories
if [ ! -d "server" ]; then
    echo "❌ server directory missing"
    exit 1
fi

if [ ! -d "client" ]; then
    echo "❌ client directory missing"
    exit 1
fi

if [ ! -d "shared" ]; then
    echo "❌ shared directory missing"
    exit 1
fi

# Verify package.json has required scripts
echo "📦 Verifying package.json scripts..."
if ! grep -q '"build"' package.json; then
    echo "❌ build script missing in package.json"
    exit 1
fi

if ! grep -q '"start"' package.json; then
    echo "❌ start script missing in package.json"
    exit 1
fi

# Check for critical dependencies
echo "🔍 Checking dependencies..."
if ! grep -q '"express"' package.json; then
    echo "❌ Express dependency missing"
    exit 1
fi

if ! grep -q '"react"' package.json; then
    echo "❌ React dependency missing"
    exit 1
fi

# Verify no Replit dependencies remain
echo "🔒 Verifying Replit dependencies removed..."
if grep -q "@replit" package.json; then
    echo "⚠️  Warning: Replit dependencies still present in package.json"
    echo "Run: npm uninstall @replit/vite-plugin-cartographer @replit/vite-plugin-runtime-error-modal"
fi

# Create production environment template if missing
if [ ! -f ".env.production.example" ]; then
    echo "📝 Creating production environment template..."
    cat > .env.production.example << EOF
# Production Environment Variables for DigitalOcean App Platform
NODE_ENV=production
PORT=8080
DATABASE_URL=\${your-managed-database.DATABASE_URL}
OPENAI_API_KEY=your_openai_api_key_here
SESSION_SECRET=your_very_secure_session_secret_here
EOF
fi

echo "✅ Deployment preparation complete!"
echo ""
echo "📋 Next steps:"
echo "1. Push to GitHub repository"
echo "2. Create DigitalOcean App Platform application"
echo "3. Link to your GitHub repository"
echo "4. Configure environment variables from .env.example"
echo "5. Add managed PostgreSQL database"
echo "6. Deploy and verify /health endpoint"
echo ""
echo "📖 See DIGITALOCEAN_DEPLOYMENT.md for detailed instructions"