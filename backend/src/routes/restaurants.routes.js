const express = require('express');
const { getAllRestaurants, getRestaurantById, createRestaurant, getRestaurantMenu } = require('../controllers/restaurants.controller');
const { authenticateToken, authorizeRole } = require('../middleware/auth.middleware');

const router = express.Router();

router.get('/', getAllRestaurants);
router.get('/:restaurantId', getRestaurantById);
router.post('/', authenticateToken, authorizeRole('restaurant'), createRestaurant);
router.get('/:restaurantId/menu', getRestaurantMenu);

module.exports = router;