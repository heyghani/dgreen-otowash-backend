// src/routes/orderRoutes.js
const express = require('express');
const { getOrders, createOrder, updateOrder, deleteOrder } = require('../controllers/OrderController');
const router = express.Router();

router.get('/orders', getOrders);
router.post('/orders', createOrder);
router.put('/orders/:id', updateOrder);
router.delete('/orders/:id', deleteOrder);

module.exports = router;
