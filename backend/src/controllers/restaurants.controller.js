const pool = require('../config/database');

const getAllRestaurants = async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM restaurants WHERE is_active = true ORDER BY name'
    );
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch restaurants' });
  }
};

const getRestaurantById = async (req, res) => {
  try {
    const { restaurantId } = req.params;
    const result = await pool.query(
      'SELECT * FROM restaurants WHERE id = $1',
      [restaurantId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }

    const restaurant = result.rows[0];

    // Get menu items
    const menuResult = await pool.query(
      'SELECT * FROM menu_items WHERE restaurant_id = $1 AND is_available = true',
      [restaurantId]
    );

    res.json({ ...restaurant, menu: menuResult.rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch restaurant' });
  }
};

const createRestaurant = async (req, res) => {
  try {
    const { name, address, phone, cuisine_type } = req.body;
    const userId = req.user.id;

    const result = await pool.query(
      'INSERT INTO restaurants (owner_id, name, address, phone, cuisine_type) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [userId, name, address, phone, cuisine_type]
    );

    res.status(201).json({
      message: 'Restaurant created successfully',
      restaurant: result.rows[0],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create restaurant' });
  }
};

const getRestaurantMenu = async (req, res) => {
  try {
    const { restaurantId } = req.params;
    const result = await pool.query(
      'SELECT * FROM menu_items WHERE restaurant_id = $1 ORDER BY category',
      [restaurantId]
    );
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch menu' });
  }
};

module.exports = {
  getAllRestaurants,
  getRestaurantById,
  createRestaurant,
  getRestaurantMenu,
};