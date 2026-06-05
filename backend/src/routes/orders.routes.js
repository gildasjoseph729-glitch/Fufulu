const express = require('express');
const { createOrder, getOrders, getOrderById, updateOrderStatus } = require('../controllers/orders.controller');
const { authenticateToken, authorizeRole } = require('../middleware/auth.middleware');
const { validateRequest, schemas } = require('../middleware/validation.middleware');

const router = express.Router();

router.post('/', authenticateToken, validateRequest(schemas.createOrder), createOrder);
router.get('/', authenticateToken, getOrders);
router.get('/:orderId', authenticateToken, getOrderById);
router.put('/:orderId/status', authenticateToken, updateOrderStatus);

module.exports = router;