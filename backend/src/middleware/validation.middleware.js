const Joi = require('joi');

const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    req.validatedData = value;
    next();
  };
};

const schemas = {
  register: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    name: Joi.string().required(),
    role: Joi.string().valid('customer', 'restaurant', 'driver').required(),
  }),

  login: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),

  createOrder: Joi.object({
    restaurantId: Joi.number().required(),
    items: Joi.array().items(
      Joi.object({
        menuItemId: Joi.number().required(),
        quantity: Joi.number().required(),
      })
    ).required(),
    deliveryAddress: Joi.string().required(),
    paymentMethod: Joi.string().valid('cash', 'card', 'mobile').required(),
  }),
};

module.exports = { validateRequest, schemas };