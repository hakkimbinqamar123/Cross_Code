const express = require('express');
const cors = require('cors');
const portfolioRoutes = require('./routes/portfolio');
const commentsRoutes = require('./routes/comments');
const loginRoutes = require('./routes/login');
const dashboardRoutes = require('./routes/dashboard');
const connectDB = require('./database');
const path = require('path');

const app = express();

// CORS Configuration
const allowedOrigins = ['http://localhost:3000'];  // Allow requests from your frontend's port

app.use(cors({
  origin: allowedOrigins,         // Accept requests only from this origin
  methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],  // Allow the methods (including OPTIONS for preflight)
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow headers typically used in requests
  credentials: true,  // If your app uses cookies or authentication headers
}));

// Connect to MongoDB
connectDB();

// Middlewares
app.use(cors()); // Enable CORS
app.use(express.json()); // Parses JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded request bodies
app.use('/images', express.static(path.join(__dirname, 'uploads/images')));

// Routes
app.use('/api/crosscode', portfolioRoutes);
app.use('/api/crosscode', commentsRoutes);
app.use('/api/crosscode', loginRoutes);
app.use('/api/crosscode', dashboardRoutes);

// Default Route
app.get('/', (req, res) => {
  res.send('Welcome to the Website Backend API!');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
