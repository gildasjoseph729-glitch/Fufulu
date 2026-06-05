const express = require('express');
const { getUserProfile, updateUserProfile, changePassword } = require('../controllers/users.controller');
const { authenticateToken } = require('../middleware/auth.middleware');

const router = express.Router();

router.get('/profile', authenticateToken, getUserProfile);
router.put('/profile', authenticateToken, updateUserProfile);
router.post('/change-password', authenticateToken, changePassword);

module.exports = router;