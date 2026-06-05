const pool = require('../config/database');

const getAvailableDrivers = async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, name, phone, vehicle_type, current_location FROM drivers WHERE is_available = true AND is_active = true'
    );
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch drivers' });
  }
};

const updateDriverLocation = async (req, res) => {
  try {
    const { latitude, longitude } = req.body;
    const driverId = req.user.id;

    const result = await pool.query(
      'UPDATE drivers SET current_location = ST_SetSRID(ST_MakePoint($1, $2), 4326) WHERE user_id = $1 RETURNING *',
      [longitude, latitude, driverId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Driver not found' });
    }

    res.json({
      message: 'Location updated',
      driver: result.rows[0],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update location' });
  }
};

const assignOrderToDriver = async (req, res) => {
  try {
    const { orderId } = req.params;
    const driverId = req.user.id;

    const result = await pool.query(
      'UPDATE orders SET driver_id = $1, status = $2 WHERE id = $3 RETURNING *',
      [driverId, 'assigned', orderId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.json({
      message: 'Order assigned successfully',
      order: result.rows[0],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to assign order' });
  }
};

const getDriverEarnings = async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT SUM(delivery_fee) as total_earnings, COUNT(*) as total_deliveries FROM orders WHERE driver_id = (SELECT id FROM drivers WHERE user_id = $1) AND status = $2',
      [req.user.id, 'delivered']
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch earnings' });
  }
};

module.exports = {
  getAvailableDrivers,
  updateDriverLocation,
  assignOrderToDriver,
  getDriverEarnings,
};