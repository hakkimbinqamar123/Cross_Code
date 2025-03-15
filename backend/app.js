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
const allowedOrigins = ['http://localhost:3000', 'https://deploy-mern1whq.vercel.app'];

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

app.use(express.json()); // Remove duplicate app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use('/images', express.static(path.join(__dirname, 'uploads/images')));

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/crosscode', portfolioRoutes);
app.use('/api/crosscode', commentsRoutes);
app.use('/api/crosscode', loginRoutes);
app.use('/api/crosscode', dashboardRoutes);

// Default Route: Serve the welcome page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
