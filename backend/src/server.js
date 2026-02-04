const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const todoRoutes = require('./routes/todoRoutes');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/todos', todoRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Todo API is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});