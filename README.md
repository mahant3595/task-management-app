# E-Commerce Web App

A full-stack e-commerce application with product management, user authentication, shopping cart, and admin dashboard.

## Features

✅ User Authentication (Register/Login with JWT)
✅ Product Catalog with Search & Filter
✅ Shopping Cart Management
✅ Order Management
✅ Admin Dashboard
✅ Responsive Design
✅ MongoDB Database
✅ Express.js Backend
✅ React Frontend

## Project Structure

```
E-Commerce-Web-App/
├── backend/
│   ├── models/ (Product.js, User.js)
│   ├── routes/ (productRoutes.js, authRoutes.js, orderRoutes.js)
│   ├── controllers/ (productController.js, authController.js, orderController.js)
│   ├── middleware/ (authMiddleware.js)
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── pages/ (Home.js, Login.js, Register.js, Cart.js, AdminDashboard.js)
│   │   ├── components/ (Navbar.js, ProductCard.js, CartItem.js, Footer.js)
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── public/ (index.html)
│   └── package.json
│
├── README.md
└── .gitignore
```

## Getting Started

### Backend Setup
```bash
cd backend
npm install
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

## Environment Configuration

Backend `.env`:
```
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
PORT=5000
```

## API Endpoints

### Auth Routes
- POST /api/auth/register - Register user
- POST /api/auth/login - Login user

### Product Routes
- GET /api/products - Get all products
- GET /api/products/:id - Get product by ID
- POST /api/products - Create product (Admin)
- PUT /api/products/:id - Update product (Admin)
- DELETE /api/products/:id - Delete product (Admin)

### Order Routes
- GET /api/orders - Get user orders
- POST /api/orders - Create order
- GET /api/orders/:id - Get order by ID

## License

ISC
