# Fufulu - Food Delivery System for Tanzania 🍽️

A complete, modern food delivery platform built for Tanzania with beautiful animations, responsive design, and reliable backend logic.

## ✨ Key Features

### 👥 For Customers
- Browse restaurants and menus
- Real-time order tracking
- Multiple payment options
- Order history and favorites
- 5-star ratings and reviews

### 🏪 For Restaurants  
- Menu management dashboard
- Order management system
- Sales analytics and reporting
- Driver assignment and tracking

### 🚚 For Drivers
- Accept delivery orders
- GPS navigation and tracking
- Real-time earnings dashboard
- Customer communication

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────┐
│   React Frontend (Port 3001)            │
├─────────────────────────────────────────┤
│   Express.js Backend (Port 3000)        │
│   - RESTful API                         │
│   - Socket.io Real-time events          │
│   - JWT Authentication                  │
├─────────────────────────────────────────┤
│   PostgreSQL Database                   │
│   - Users, Restaurants, Orders, etc     │
└─────────────────────────────────────────┘
```

## 🚀 Quick Start

### Option 1: Docker (Recommended)
```bash
docker-compose up
```
- Frontend: http://localhost:3001
- Backend: http://localhost:3000/api/v1

### Option 2: Manual Setup
```bash
# Install dependencies
bash setup.sh

# Terminal 1 - Backend
cd backend && npm run dev

# Terminal 2 - Frontend  
cd frontend && npm start
```

## 📚 Documentation

| Document | Purpose |
|----------|---------|
| [SETUP.md](docs/SETUP.md) | Installation & configuration |
| [API.md](docs/API.md) | API endpoints reference |
| [DEPLOYMENT.md](docs/DEPLOYMENT.md) | Production deployment guide |
| [ARCHITECTURE.md](docs/ARCHITECTURE.md) | System design details |
| [ROADMAP.md](docs/ROADMAP.md) | Feature planning timeline |

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, React Router, Axios, Socket.io, CSS3 |
| Backend | Node.js 16, Express, JWT, bcrypt, Socket.io |
| Database | PostgreSQL 14, PostGIS |
| DevOps | Docker, Docker Compose, GitHub Actions |

## 📦 Project Structure

```
Fufulu/
├── backend/
│   ├── src/
│   │   ├── controllers/    # Business logic
│   │   ├── routes/         # API endpoints
│   │   ├── middleware/     # Auth & validation
│   │   ├── config/         # Database config
│   │   └── server.js       # Express setup
│   ├── Dockerfile          # Container config
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API calls
│   │   ├── context/        # State management
│   │   └── styles/         # CSS files
│   ├── Dockerfile          # Container config
│   └── package.json
├── database/
│   ├── schema.sql          # Database schema
│   └── seed.sql            # Sample data
├── docs/                   # Documentation
├── .github/workflows/      # CI/CD pipelines
├── docker-compose.yml      # Multi-container setup
├── setup.sh                # Automated setup
└── README.md               # This file
```

## 🔐 Security Features

✅ JWT-based authentication  
✅ Password hashing (bcrypt)  
✅ CORS protection  
✅ Input validation & sanitization  
✅ Rate limiting ready  
✅ HTTPS/SSL support  
✅ Environment variable management  

## 📡 API Endpoints

### Authentication
- `POST /api/v1/auth/register` - Register new user
- `POST /api/v1/auth/login` - Login user

### Restaurants
- `GET /api/v1/restaurants` - List all restaurants
- `GET /api/v1/restaurants/:id` - Get restaurant with menu
- `GET /api/v1/restaurants/:id/menu` - Get menu items

### Orders
- `POST /api/v1/orders` - Create order
- `GET /api/v1/orders` - Get user orders
- `GET /api/v1/orders/:id` - Get order details
- `PUT /api/v1/orders/:id/status` - Update order status

### Drivers
- `GET /api/v1/drivers/available` - List available drivers
- `PUT /api/v1/drivers/location` - Update driver GPS
- `GET /api/v1/drivers/earnings` - Get earnings

### Payments
- `POST /api/v1/payments/process` - Process payment
- `GET /api/v1/payments/history` - Payment history

See [API.md](docs/API.md) for complete reference.

## 🗄️ Database Schema

**Users** - Customers, restaurants, drivers, admins  
**Restaurants** - Restaurant details, ratings, hours  
**Menu Items** - Food items with prices and categories  
**Orders** - Order tracking and status  
**Order Items** - Individual items in orders  
**Payments** - Payment records and status  
**Reviews** - Customer ratings and feedback  

## 🚢 Deployment

### Heroku
```bash
heroku create fufulu-backend
git push heroku main
```

### AWS/DigitalOcean
```bash
docker-compose -f docker-compose.prod.yml up -d
```

See [DEPLOYMENT.md](docs/DEPLOYMENT.md) for detailed instructions.

## 🧪 Testing

```bash
# Backend tests
cd backend && npm test

# Frontend tests
cd frontend && npm test

# Integration tests
npm run test:integration
```

## 📊 Development Timeline

| Phase | Status | Timeline |
|-------|--------|----------|
| MVP Setup | ✅ Complete | Done |
| Core Features | 🔄 In Progress | Q2 2026 |
| Advanced Features | 📋 Planned | Q3-Q4 2026 |
| Scaling | 📋 Planned | Q1 2027 |

See [ROADMAP.md](docs/ROADMAP.md) for full details.

## 🤝 Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature/your-feature`
5. Submit a Pull Request

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📝 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file.

## 🆘 Troubleshooting

**Port already in use?**
```bash
lsof -ti:3000 | xargs kill -9
```

**Database connection error?**
- Check PostgreSQL is running
- Verify credentials in `.env`
- Ensure database exists

**Module not found?**
```bash
rm -rf node_modules && npm install
```

For more help, see [SETUP.md](docs/SETUP.md) troubleshooting section.

## 📞 Support & Contact

- 📖 Read [documentation](docs/)
- 🐛 Report bugs in [Issues](https://github.com/gildasjoseph729-glitch/Fufulu/issues)
- 💬 Start a discussion in [Discussions](https://github.com/gildasjoseph729-glitch/Fufulu/discussions)

## 🌍 About Fufulu

Fufulu is designed specifically for Tanzania with:
- 🇹🇿 Swahili language support
- 💰 Local payment methods (M-Pesa, card, cash)
- 📶 Works with varying network conditions
- 🚀 Optimized for mobile-first users
- 🏙️ Focused on Tanzanian cities

---

**Made with ❤️ for Tanzania**  
🇹🇿 **Karibu Fufulu!** (Welcome to Fufulu!)

**Repository**: [github.com/gildasjoseph729-glitch/Fufulu](https://github.com/gildasjoseph729-glitch/Fufulu)  
**Status**: 🚀 MVP Development in Progress