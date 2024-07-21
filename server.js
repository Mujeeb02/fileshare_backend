const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const userRoutes = require('./routes/user'); // Ensure the correct path to your routes file

const app = express();
const port = 3000;
const url=process.env.MONGODB_CONNECTION_URL;
console.log(process.env.MONGODB_CONNECTION_URL)
// Connect to MongoDB
mongoose.connect(url).then(() => {
  console.log("Database connected successfully");
}).catch((error) => {
  console.log("Error occurred in backend connection:", error);
});

// Middleware to parse request body as JSON
app.use(bodyParser.json());

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:5173', // Replace with your client's origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

app.use(cors(corsOptions));

// Use the user routes
app.use('/api/user', userRoutes);

// Base route
app.get('/', (req, res) => {
  res.send("hey jo");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
