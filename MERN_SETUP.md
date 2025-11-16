# Farm Fresh Connect - MERN Stack Project

This is a complete MERN (MongoDB, Express, React, Node.js) stack application for connecting farmers directly with buyers for fresh agricultural products.

## Project Structure

```
farm-fresh-connect/
├── src/                    # React frontend (Vite + TypeScript)
│   ├── components/        # React components
│   ├── pages/            # Page components
│   ├── services/         # API service for backend communication
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   └── App.tsx           # Main app component
├── server/               # Express backend
│   ├── models/           # Mongoose schemas (Product, User, Order)
│   ├── routes/           # API route handlers
│   ├── middleware/       # Custom middleware
│   ├── server.js         # Express server setup
│   ├── package.json      # Backend dependencies
│   └── .env              # Environment variables
├── package.json          # Frontend dependencies
└── .env                  # Frontend environment variables
```

## Tech Stack

### Frontend (React)
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library
- **React Query** - Data fetching
- **React Hook Form** - Form handling

### Backend (Node.js/Express)
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin requests

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or MongoDB Atlas)

### 1. Install Dependencies

Install all dependencies (frontend and backend):

```bash
npm run install-all
```

Or install separately:

```bash
# Frontend dependencies
npm install

# Backend dependencies
cd server
npm install
cd ..
```

### 2. Configure Environment Variables

**Frontend** (`.env`):
```env
VITE_API_URL=http://localhost:5000/api
```

**Backend** (`server/.env`):
```env
MONGODB_URI=mongodb://localhost:27017/farm-fresh-connect
PORT=5000
NODE_ENV=development
JWT_SECRET=your_jwt_secret_key_change_this_in_production
```

Replace `MONGODB_URI` with your MongoDB connection string if using MongoDB Atlas.

### 3. Set Up MongoDB

**Option A: Local MongoDB**
```bash
# Install MongoDB Community Edition
# Then start the service

# On Windows PowerShell:
mongod
```

**Option B: MongoDB Atlas (Cloud)**
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Get your connection string
4. Update `MONGODB_URI` in `server/.env`

## Running the Application

### Development Mode

**Terminal 1 - Start Backend Server**:
```bash
npm run server
```

The backend will run on `http://localhost:5000`

**Terminal 2 - Start Frontend Dev Server**:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

### Production Build

```bash
# Build frontend
npm run build

# Build and start backend
cd server
npm run start
```

## API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `GET /api/products/category/:category` - Get products by category
- `POST /api/products` - Create product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### Users
- `POST /api/users/register` - Register user
- `POST /api/users/login` - Login user
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user profile
- `GET /api/users/type/farmer` - Get all farmers

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders` - Get all orders
- `GET /api/orders/:id` - Get single order
- `GET /api/orders/buyer/:buyerId` - Get orders by buyer
- `PUT /api/orders/:id` - Update order
- `DELETE /api/orders/:id` - Delete order

## Database Models

### User
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  phone: String,
  userType: 'farmer' | 'buyer' | 'admin',
  farmName: String,
  location: String,
  profileImage: String,
  bio: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Product
```javascript
{
  name: String,
  description: String,
  price: Number,
  category: 'vegetables' | 'fruits' | 'grains' | 'dairy' | 'organic',
  quantity: Number,
  image: String,
  farmerId: ObjectId (ref: User),
  inStock: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Order
```javascript
{
  buyerId: ObjectId (ref: User),
  products: [{
    productId: ObjectId (ref: Product),
    quantity: Number,
    price: Number
  }],
  totalAmount: Number,
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled',
  deliveryAddress: String,
  paymentMethod: 'card' | 'bank-transfer' | 'cash-on-delivery',
  notes: String,
  createdAt: Date,
  updatedAt: Date
}
```

## Frontend API Service

The frontend includes a pre-configured API service (`src/services/api.ts`) that handles all backend communication:

```typescript
import { api } from '@/services/api';

// Get all products
const products = await api.getProducts();

// Register user
const user = await api.registerUser({
  name: 'John Doe',
  email: 'john@example.com',
  password: 'password123',
  userType: 'buyer'
});

// Create order
const order = await api.createOrder({
  buyerId: userId,
  products: [...],
  deliveryAddress: 'Some address',
  paymentMethod: 'cash-on-delivery'
});
```

## Features

- ✅ Complete user authentication (register/login)
- ✅ Farmer and buyer user types
- ✅ Product management (CRUD)
- ✅ Product categorization
- ✅ Order management
- ✅ Password hashing with bcryptjs
- ✅ JWT token authentication
- ✅ CORS enabled for frontend-backend communication
- ✅ Error handling
- ✅ Environment-based configuration

## Future Enhancements

- Payment gateway integration
- Real-time notifications
- Reviews and ratings system
- Advanced search and filtering
- Inventory management
- Admin dashboard
- Email notifications
- File upload for product images
- Location-based search

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running
- Check `MONGODB_URI` in `.env`
- For MongoDB Atlas, ensure IP is whitelisted

### CORS Errors
- Ensure backend is running on port 5000
- Check `VITE_API_URL` in frontend `.env`

### Port Already in Use
```bash
# Change PORT in server/.env
PORT=5001
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

MIT License
