# Farm Fresh Connect 🌾

A modern **MERN (MongoDB, Express, React, Node.js) stack application** connecting farmers directly with buyers for fresh agricultural products. Built with TypeScript, React, Tailwind CSS, and Express.js.

## 🎯 Overview

Farm Fresh Connect is a full-stack e-commerce platform designed to bridge the gap between farmers and consumers by enabling direct product sales, inventory management, and order tracking. The application features user authentication, product management, order processing, and farmer profiles.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Database Models](#database-models)
- [Development](#development)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

## ✨ Features

### Core Features
- **User Authentication**
  - User registration and login with JWT tokens
  - Password hashing with bcryptjs
  - Support for Farmer, Buyer, and Admin roles
  - User profile management

- **Product Management**
  - Create, read, update, delete (CRUD) operations
  - Product categorization (vegetables, fruits, grains, dairy, organic)
  - Inventory tracking with stock status
  - Farmer product listing with image support

- **Order System**
  - Complete order lifecycle management
  - Multi-product order support
  - Order status tracking (pending, confirmed, shipped, delivered, cancelled)
  - Delivery address management
  - Multiple payment methods (card, bank transfer, cash-on-delivery)

- **Farmer Profiles**
  - Farm name and location information
  - Profile customization
  - Product portfolio management
  - Farm contact information

- **Search & Filtering**
  - Products by category
  - Farmer directory
  - Order history by buyer

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library with hooks and functional components
- **Vite** - Next generation build tool with instant HMR
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React component library
- **React Query (@tanstack/react-query)** - Data fetching and caching
- **React Hook Form** - Performant, flexible form validation
- **Radix UI** - Unstyled, accessible component primitives

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Minimal web application framework
- **MongoDB** - NoSQL document database
- **Mongoose** - MongoDB ODM with schema validation
- **JWT** - Token-based authentication
- **bcryptjs** - Password hashing and salting
- **CORS** - Cross-origin resource sharing
- **Nodemon** - Automatic server restart during development

## 📁 Project Structure

```
farm-fresh-connect/
├── src/                          # React frontend (Vite)
│   ├── components/               # Reusable React components
│   │   ├── CTASection.tsx        # Call-to-action component
│   │   ├── Features.tsx          # Features showcase
│   │   ├── Footer.tsx            # Footer component
│   │   ├── Header.tsx            # Navigation header
│   │   ├── Hero.tsx              # Hero section
│   │   ├── HowItWorks.tsx        # How it works section
│   │   ├── NavLink.tsx           # Navigation link
│   │   ├── ProductShowcase.tsx   # Product display
│   │   └── ui/                   # shadcn/ui components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── select.tsx
│   │       └── ...other UI components
│   ├── pages/                    # Page-level components
│   │   ├── Index.tsx             # Home page
│   │   └── NotFound.tsx          # 404 page
│   ├── services/                 # API services
│   │   └── api.ts                # Centralized API client
│   ├── hooks/                    # Custom React hooks
│   │   ├── use-mobile.tsx        # Mobile detection hook
│   │   └── use-toast.ts          # Toast notification hook
│   ├── lib/                      # Utility functions
│   │   └── utils.ts              # Helper utilities
│   ├── assets/                   # Static assets
│   ├── App.tsx                   # Main app component
│   ├── main.tsx                  # Entry point
│   ├── index.css                 # Global styles
│   └── vite-env.d.ts             # Vite environment types
│
├── server/                       # Express backend
│   ├── models/                   # Mongoose schemas
│   │   ├── User.js               # User schema with auth
│   │   ├── Product.js            # Product schema
│   │   └── Order.js              # Order schema
│   ├── routes/                   # API route handlers
│   │   ├── userRoutes.js         # Auth and user endpoints
│   │   ├── productRoutes.js      # Product CRUD endpoints
│   │   └── orderRoutes.js        # Order management endpoints
│   ├── middleware/               # Custom middleware (expandable)
│   ├── server.js                 # Express app setup & MongoDB connection
│   ├── package.json              # Backend dependencies
│   ├── .env                      # Environment variables
│   └── .env.example              # Environment template
│
├── public/                       # Static files
├── components.json               # shadcn/ui configuration
├── package.json                  # Frontend dependencies
├── tsconfig.json                 # TypeScript configuration
├── vite.config.ts                # Vite configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── postcss.config.js             # PostCSS configuration
├── eslint.config.js              # ESLint configuration
├── .env                          # Frontend environment variables
├── .env.example                  # Frontend environment template
├── MERN_SETUP.md                 # MERN setup guide
├── SERVER_STATUS.md              # Current server status
└── README.md                     # This file
```

## 📦 Installation

### Prerequisites
- **Node.js** v16 or higher ([Download](https://nodejs.org/))
- **npm** v7 or higher (comes with Node.js)
- **MongoDB** (local installation or MongoDB Atlas account)

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd farm-fresh-connect
```

### Step 2: Install Dependencies

Install all dependencies (frontend and backend) in one command:

```bash
npm run install-all
```

Or install separately:

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
cd ..
```

### Step 3: Set Up Environment Variables

**Frontend** - Create `.env` file in root directory:
```env
VITE_API_URL=http://localhost:5000/api
```

**Backend** - Create `server/.env` file:
```env
MONGODB_URI=mongodb://localhost:27017/farm-fresh-connect
PORT=5000
NODE_ENV=development
JWT_SECRET=your_super_secret_jwt_key_change_in_production
```

## 🗄️ Configuration

### MongoDB Setup

#### Option A: Local MongoDB
```bash
# On Windows - Install MongoDB Community Edition
# https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/

# Start MongoDB service
mongod
```

#### Option B: MongoDB Atlas (Cloud - Recommended)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster
4. Get your connection string
5. Update `MONGODB_URI` in `server/.env`:
```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/farm-fresh-connect
```

### Environment Variables

**Frontend (.env)**
```env
# API Base URL for backend communication
VITE_API_URL=http://localhost:5000/api

# Optional: Environment-specific settings
VITE_APP_NAME=Farm Fresh Connect
VITE_APP_DESCRIPTION=Connect farmers with fresh products
```

**Backend (server/.env)**
```env
# MongoDB connection string
MONGODB_URI=mongodb://localhost:27017/farm-fresh-connect

# Server port
PORT=5000

# Node environment
NODE_ENV=development

# JWT secret key (change this in production!)
JWT_SECRET=change_this_to_a_strong_random_string_in_production
```

## 🚀 Running the Application

### Development Mode

**Option 1: Run both servers in one command**
```bash
# Terminal 1
npm run server

# Terminal 2
npm run dev
```

**Option 2: Run servers separately**
```bash
# Terminal 1 - Start backend
cd server
npm run dev

# Terminal 2 - Start frontend
npm run dev
```

**Option 3: Using separate terminals from root**
```bash
# Terminal 1 - Backend
npm run server

# Terminal 2 - Frontend
npm run dev
```

### Access the Application
- **Frontend**: http://localhost:8080
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/api/health

### Production Build

```bash
# Build frontend
npm run build

# Build and start backend
cd server
npm run start
```

## 📡 API Documentation

Base URL: `http://localhost:5000/api`

### Authentication Endpoints

#### Register User
```
POST /api/users/register
Content-Type: application/json

{
  "name": "John Farmer",
  "email": "john@farm.com",
  "password": "securepassword123",
  "userType": "farmer",
  "farmName": "Green Valley Farm",
  "location": "California"
}

Response: { user: { id, name, email, userType }, token }
```

#### Login
```
POST /api/users/login
Content-Type: application/json

{
  "email": "john@farm.com",
  "password": "securepassword123"
}

Response: { user: { id, name, email, userType }, token }
```

### Product Endpoints

#### Get All Products
```
GET /api/products

Response: [ { id, name, description, price, category, quantity, farmerId, inStock, ... } ]
```

#### Get Product by ID
```
GET /api/products/:id

Response: { id, name, description, price, category, quantity, farmerId, inStock, ... }
```

#### Get Products by Category
```
GET /api/products/category/:category

Categories: vegetables, fruits, grains, dairy, organic
Response: [ { product }, ... ]
```

#### Create Product (Farmer)
```
POST /api/products
Content-Type: application/json

{
  "name": "Organic Tomatoes",
  "description": "Fresh, pesticide-free tomatoes",
  "price": 5.99,
  "category": "vegetables",
  "quantity": 100,
  "farmerId": "user_id",
  "image": "image_url"
}

Response: { id, name, description, price, ... }
```

#### Update Product
```
PUT /api/products/:id
Content-Type: application/json

{
  "price": 6.99,
  "quantity": 80
}

Response: { updated product object }
```

#### Delete Product
```
DELETE /api/products/:id

Response: { message: "Product deleted" }
```

### Order Endpoints

#### Create Order
```
POST /api/orders
Content-Type: application/json

{
  "buyerId": "buyer_user_id",
  "products": [
    {
      "productId": "product_id",
      "quantity": 5,
      "price": 5.99
    }
  ],
  "deliveryAddress": "123 Main St, Springfield",
  "paymentMethod": "cash-on-delivery",
  "notes": "Please deliver before 6 PM"
}

Response: { id, buyerId, products, totalAmount, status, ... }
```

#### Get All Orders
```
GET /api/orders

Response: [ { order objects }, ... ]
```

#### Get Order by ID
```
GET /api/orders/:id

Response: { order details with populated buyer and products }
```

#### Get Orders by Buyer
```
GET /api/orders/buyer/:buyerId

Response: [ { buyer orders }, ... ]
```

#### Update Order Status
```
PUT /api/orders/:id
Content-Type: application/json

{
  "status": "shipped",
  "notes": "Order has been dispatched"
}

Response: { updated order object }
```

#### Delete Order
```
DELETE /api/orders/:id

Response: { message: "Order deleted" }
```

### User Endpoints

#### Get User Profile
```
GET /api/users/:id

Response: { name, email, phone, userType, farmName, location, ... }
```

#### Update User Profile
```
PUT /api/users/:id
Content-Type: application/json

{
  "phone": "555-1234",
  "farmName": "Updated Farm Name",
  "location": "New Location",
  "bio": "Farm description"
}

Response: { user: { updated user object } }
```

#### Get All Farmers
```
GET /api/users/type/farmer

Response: [ { farmer profiles }, ... ]
```

### Health Check

#### Server Status
```
GET /api/health

Response: { status: "Server is running" }
```

## 🗄️ Database Models

### User Schema
```javascript
{
  _id: ObjectId,
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  phone: String,
  userType: 'farmer' | 'buyer' | 'admin' (default: 'buyer'),
  farmName: String,
  location: String,
  profileImage: String,
  bio: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Product Schema
```javascript
{
  _id: ObjectId,
  name: String (required),
  description: String (required),
  price: Number (required, min: 0),
  category: 'vegetables' | 'fruits' | 'grains' | 'dairy' | 'organic' (required),
  quantity: Number (required, default: 0),
  image: String,
  farmerId: ObjectId (ref: User, required),
  inStock: Boolean (default: true),
  createdAt: Date,
  updatedAt: Date
}
```

### Order Schema
```javascript
{
  _id: ObjectId,
  buyerId: ObjectId (ref: User, required),
  products: [{
    productId: ObjectId (ref: Product, required),
    quantity: Number (required, min: 1),
    price: Number (required)
  }],
  totalAmount: Number (required),
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled' (default: 'pending'),
  deliveryAddress: String (required),
  paymentMethod: 'card' | 'bank-transfer' | 'cash-on-delivery' (default: 'cash-on-delivery'),
  notes: String,
  createdAt: Date,
  updatedAt: Date
}
```

## 💻 Development

### Frontend Development

#### Using the API Service

The frontend includes a pre-configured API service (`src/services/api.ts`) for all backend communication:

```typescript
import { api } from '@/services/api';

// Products
const products = await api.getProducts();
const product = await api.getProduct(id);
const vegetableProducts = await api.getProductsByCategory('vegetables');
await api.createProduct(productData);
await api.updateProduct(id, updatedData);
await api.deleteProduct(id);

// Users
const { user, token } = await api.registerUser(userData);
const { user, token } = await api.loginUser(email, password);
const profile = await api.getUserProfile(userId);
await api.updateUserProfile(userId, profileData);
const farmers = await api.getFarmers();

// Orders
const order = await api.createOrder(orderData);
const orders = await api.getOrders();
const order = await api.getOrder(orderId);
const buyerOrders = await api.getOrdersByBuyer(buyerId);
await api.updateOrder(orderId, updatedData);
await api.deleteOrder(orderId);
```

#### Available Scripts

```bash
# Start development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Backend Development

#### Creating New Routes

1. Create a new route file in `server/routes/`
2. Import in `server/server.js`
3. Register the route: `app.use('/api/endpoint', routeHandler)`

#### Adding New Models

1. Create schema file in `server/models/`
2. Export Mongoose model
3. Import and use in route handlers

#### Run with Auto-Reload
```bash
npm run server    # In project root, goes to server directory
# or
cd server && npm run dev
```

## 🐛 Troubleshooting

### MongoDB Connection Issues

**Error**: `MongoDB Connection Error`

Solutions:
1. Ensure MongoDB is running:
   ```bash
   mongod  # Start MongoDB service
   ```
2. Check `MONGODB_URI` in `server/.env`
3. Verify MongoDB is accessible on the configured port
4. For MongoDB Atlas, ensure IP is whitelisted in network settings

### Port Already in Use

**Error**: `EADDRINUSE: address already in use :::5000`

Solutions:
```bash
# Change port in server/.env
PORT=5001

# Or kill process using the port (Windows PowerShell)
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

### CORS Errors

**Error**: `Access to XMLHttpRequest blocked by CORS`

Solutions:
1. Ensure backend is running on port 5000
2. Verify `VITE_API_URL` in frontend `.env`
3. Check that CORS is enabled in `server/server.js`

### Dependencies Installation Issues

**Error**: Package installation fails

Solutions:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -r node_modules package-lock.json
npm install

# Or reinstall all dependencies
npm run install-all
```

### Hot Module Reload (HMR) Not Working

**Solution**: Restart the development server
```bash
# Stop (Ctrl+C) and restart
npm run dev
```

## 🚀 Deployment

### Frontend Deployment (Vercel, Netlify, GitHub Pages)
```bash
npm run build
# Deploy the dist/ folder
```

### Backend Deployment (Heroku, Railway, Render)
1. Set environment variables in deployment platform
2. Ensure MongoDB is accessible from deployment region
3. Deploy the `server/` directory

### Database Deployment
Use MongoDB Atlas for cloud-hosted database (recommended for production)

## 📝 Contributing

1. Create a feature branch: `git checkout -b feature/YourFeature`
2. Commit your changes: `git commit -m 'Add YourFeature'`
3. Push to the branch: `git push origin feature/YourFeature`
4. Open a pull request

## 📄 License

This project is licensed under the ISC License - see individual package.json files for details.

## 🤝 Support

For issues, questions, or suggestions:
1. Check the [Troubleshooting](#troubleshooting) section
2. Review the [MERN_SETUP.md](./MERN_SETUP.md) guide
3. Check the [SERVER_STATUS.md](./SERVER_STATUS.md) for current server status

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [MongoDB Manual](https://docs.mongodb.com/manual/)
- [Mongoose Documentation](https://mongoosejs.com)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)

---

**Happy coding!** 🌾✨

For the latest updates and detailed technical documentation, refer to `MERN_SETUP.md`.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/a8f22664-a14a-4d49-a603-8a9c797cfd05) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
"# Farm-Fresh-Connect" 
# Farm-Fresh-Connect
