# Task Management App

A full-stack task management application with a Node.js backend and React frontend.

## Project Structure

```
Task-Management-App/
├── backend/
│   ├── server.js
│   ├── .env
│   ├── package.json
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── taskRoutes.js
│   └── middleware/
│       └── authMiddleware.js
│
└── frontend/
    ├── package.json
    ├── src/
    │   ├── App.js
    │   ├── index.js
    │   ├── App.css
    │   ├── pages/
    │   │   ├── Login.js
    │   │   ├── Register.js
    │   │   └── Dashboard.js
    │   └── components/
    │       └── TaskForm.js
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

## Features
- User authentication (Login/Register)
- Task management (Create, Read, Update, Delete)
- User dashboard

## License
ISC
