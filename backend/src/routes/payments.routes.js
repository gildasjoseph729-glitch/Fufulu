const express = require('express');
const { processPayment, getPaymentHistory, verifyPayment } = require('../controllers/payments.controller');
const { authenticateToken } = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/process', authenticateToken, processPayment);
router.get('/history', authenticateToken, getPaymentHistory);
router.get('/:paymentId/verify', authenticateToken, verifyPayment);

module.exports = router;