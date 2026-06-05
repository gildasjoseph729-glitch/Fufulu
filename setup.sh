#!/bin/bash

# Fufulu - Automated Setup Script
# This script automates the complete setup process for development

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🍽️  Fufulu - Food Delivery System${NC}"
echo -e "${YELLOW}=====================================${NC}"
echo ""

# Check Node.js installation
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed${NC}"
    echo "Please install Node.js v16 or higher from https://nodejs.org"
    exit 1
fi

echo -e "${GREEN}✅ Node.js version: $(node -v)${NC}"
echo -e "${GREEN}✅ npm version: $(npm -v)${NC}"
echo ""

# Check PostgreSQL (optional)
if command -v psql &> /dev/null; then
    echo -e "${GREEN}✅ PostgreSQL is installed${NC}"
else
    echo -e "${YELLOW}⚠️  PostgreSQL not found. Please install it separately.${NC}"
fi

echo ""
echo -e "${YELLOW}Setting up Backend...${NC}"
cd backend

# Install backend dependencies
if [ -d "node_modules" ]; then
    echo -e "${YELLOW}Backend dependencies already installed${NC}"
else
    npm install
    echo -e "${GREEN}✅ Backend dependencies installed${NC}"
fi

cd ..

echo ""
echo -e "${YELLOW}Setting up Frontend...${NC}"
cd frontend

# Install frontend dependencies
if [ -d "node_modules" ]; then
    echo -e "${YELLOW}Frontend dependencies already installed${NC}"
else
    npm install
    echo -e "${GREEN}✅ Frontend dependencies installed${NC}"
fi

cd ..

echo ""
echo -e "${GREEN}🎉 Setup Complete!${NC}"
echo ""
echo -e "${YELLOW}Next Steps:${NC}"
echo ""
echo -e "${GREEN}Option 1: Run with npm${NC}"
echo "  Terminal 1 - Backend:"
echo "    cd backend && npm run dev"
echo ""
echo "  Terminal 2 - Frontend:"
echo "    cd frontend && npm start"
echo ""
echo -e "${GREEN}Option 2: Run with Docker${NC}"
echo "  docker-compose up"
echo ""
echo -e "${YELLOW}Access the application:${NC}"
echo "  Frontend: http://localhost:3001"
echo "  Backend API: http://localhost:3000/api/v1"
echo ""
echo -e "${YELLOW}Database Setup:${NC}"
echo "  psql -U postgres < database/schema.sql"
echo ""
echo -e "${YELLOW}For more information, see:${NC}"
echo "  - docs/SETUP.md"
echo "  - docs/API.md"
echo "  - README.md"