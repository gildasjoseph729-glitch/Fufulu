const express = require('express');
const { getAvailableDrivers, updateDriverLocation, assignOrderToDriver, getDriverEarnings } = require('../controllers/drivers.controller');
const { authenticateToken, authorizeRole } = require('../middleware/auth.middleware');

const router = express.Router();

router.get('/available', authenticateToken, getAvailableDrivers);
router.put('/location', authenticateToken, authorizeRole('driver'), updateDriverLocation);
router.put('/:orderId/assign', authenticateToken, authorizeRole('driver'), assignOrderToDriver);
router.get('/earnings', authenticateToken, authorizeRole('driver'), getDriverEarnings);

module.exports = router;