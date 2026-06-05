# Setup Guide for Fufulu - Food Delivery System

## Prerequisites
- Node.js v16 or higher
- PostgreSQL 14 or higher
- npm or yarn package manager
- Docker & Docker Compose (optional)
- Git

## Quick Start Installation

### 1. Clone the Repository
```bash
git clone https://github.com/gildasjoseph729-glitch/Fufulu.git
cd Fufulu
```

### 2. Backend Setup
```bash
cd backend
npm install

# Copy and configure environment variables
cp ../.env.example .env

# Edit .env with your database settings
DB_HOST=localhost
DB_PORT=5432
DB_NAME=fufulu_db
DB_USER=postgres
DB_PASSWORD=your_password
JWT_SECRET=your_secret_key

# Start development server
npm run dev
```

### 3. Frontend Setup
```bash
cd frontend
npm install

# Start React development server
npm start
```

### 4. Database Setup
```bash
# Connect to PostgreSQL
psql -U postgres

# Create database and user
CREATE DATABASE fufulu_db;

# Run schema and seed scripts
\c fufulu_db
\i ../database/schema.sql
```

## Docker Setup (Recommended)

### Using Docker Compose
```bash
# Build and start all services
docker-compose up -d

# Services will be available at:
# Frontend: http://localhost:3001
# Backend: http://localhost:3000
# Database: localhost:5432
```

### Stop Services
```bash
docker-compose down
```

## Running Tests

### Backend Tests
```bash
cd backend
npm test
```

### Frontend Tests
```bash
cd frontend
npm test
```

## Project Structure

```
Fufulu/
├── backend/              # Express.js API server
│   ├── src/
│   │   ├── controllers/  # Business logic
│   │   ├── routes/       # API endpoints
│   │   ├── middleware/   # Auth, validation
│   │   └── config/       # Database config
│   └── Dockerfile
├── frontend/             # React SPA
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── pages/        # Page components
│   │   ├── services/     # API calls
│   │   └── styles/       # CSS files
│   └── Dockerfile
├── database/             # SQL schemas
├── docs/                 # Documentation
└── docker-compose.yml    # Docker orchestration
```

## Environment Variables

Create `.env` file in backend directory:

```env
NODE_ENV=development
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=fufulu_db
DB_USER=postgres
DB_PASSWORD=password
JWT_SECRET=your_secret_key_here
JWT_EXPIRY=7d
```

## Access Points

- **Frontend**: http://localhost:3001
- **Backend API**: http://localhost:3000/api/v1
- **Database**: postgresql://localhost:5432/fufulu_db

## Troubleshooting

### Port Already in Use
```bash
# Kill process using port 3000
lsof -ti:3000 | xargs kill -9

# Kill process using port 5432
lsof -ti:5432 | xargs kill -9
```

### Database Connection Error
- Ensure PostgreSQL is running
- Check database credentials in .env
- Verify database exists

### Module Not Found
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

## Support
For issues and questions, create an issue on GitHub or check CONTRIBUTING.md