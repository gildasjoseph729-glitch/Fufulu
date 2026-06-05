const pool = require('../config/database');

const processPayment = async (req, res) => {
  try {
    const { orderId, amount, paymentMethod, transactionId } = req.body;

    // Create payment record
    const result = await pool.query(
      'INSERT INTO payments (order_id, amount, payment_method, transaction_id, status) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [orderId, amount, paymentMethod, transactionId, 'completed']
    );

    // Update order status
    await pool.query(
      'UPDATE orders SET status = $1, payment_status = $2 WHERE id = $3',
      ['confirmed', 'paid', orderId]
    );

    res.json({
      message: 'Payment processed successfully',
      payment: result.rows[0],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Payment processing failed' });
  }
};

const getPaymentHistory = async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT p.* FROM payments p JOIN orders o ON p.order_id = o.id WHERE o.user_id = $1 ORDER BY p.created_at DESC',
      [req.user.id]
    );
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch payment history' });
  }
};

const verifyPayment = async (req, res) => {
  try {
    const { paymentId } = req.params;
    const result = await pool.query(
      'SELECT * FROM payments WHERE id = $1',
      [paymentId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Payment not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to verify payment' });
  }
};

module.exports = { processPayment, getPaymentHistory, verifyPayment };