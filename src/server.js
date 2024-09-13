// src/server.js
const express = require('express');
const dotenv = require('dotenv');
const orderRoutes = require('./routes/orderRoutes');
const sequelize = require('./config/db');

dotenv.config();
const app = express();

app.use(express.json());

// Order routes
app.use('/api', orderRoutes);

// Sync the database
sequelize.sync().then(() => {
  console.log('Database synced');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
