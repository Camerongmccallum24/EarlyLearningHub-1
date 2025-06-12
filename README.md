# GRO Early Learning Career Website

A comprehensive early childhood education career platform connecting talented professionals with regional childcare opportunities.

## Features

- **Job Search & Application**: Browse and apply for early childhood education positions
- **Interactive Location Maps**: Explore GRO Early Learning center locations
- **AI-Powered Career Assistant**: Get personalized career guidance using OpenAI integration
- **Mobile-Responsive Design**: Optimized for all devices with touch-friendly interfaces
- **Real-time Job Updates**: Connect with external ATS systems for live job data

## Technology Stack

- **Frontend**: React.js with TypeScript, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL with Drizzle ORM
- **AI Integration**: OpenAI GPT-4o for career insights
- **Deployment**: Optimized for DigitalOcean App Platform

## Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd gro-early-learning-careers
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your database and API credentials
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

### DigitalOcean App Platform Deployment

1. **Prepare for deployment**
   ```bash
   ./prepare-deployment.sh
   ```

2. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for DigitalOcean deployment"
   git push origin main
   ```

3. **Deploy to DigitalOcean**
   - Create new App Platform application
   - Connect to your GitHub repository
   - Configure environment variables from `.env.example`
   - Add managed PostgreSQL database
   - Deploy and verify

See `DIGITALOCEAN_DEPLOYMENT.md` for detailed deployment instructions.

## Environment Variables

Required environment variables for production:

- `DATABASE_URL` - PostgreSQL connection string
- `OPENAI_API_KEY` - OpenAI API key for career assistant
- `SESSION_SECRET` - Secure session secret
- `NODE_ENV` - Set to "production"
- `PORT` - Application port (default: 8080)

## API Endpoints

- `GET /health` - Health check endpoint
- `GET /api/jobs` - List all active jobs
- `POST /api/applications` - Submit job application
- `POST /api/chat` - AI career assistant chat
- `GET /api/webhooks/jobs` - External job data webhook

## Database Schema

The application uses PostgreSQL with the following main tables:

- `users` - User authentication and profiles
- `jobs` - Job listings and details
- `job_applications` - Application submissions

Database migrations are managed through Drizzle ORM.

## Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run db:push` - Push database schema changes

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For deployment issues or technical support, refer to:
- `DIGITALOCEAN_DEPLOYMENT.md` - Deployment guide
- `DOCKER_DEPLOYMENT.md` - Docker containerization guide