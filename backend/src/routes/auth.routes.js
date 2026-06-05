const express = require('express');
const { register, login } = require('../controllers/auth.controller');
const { validateRequest, schemas } = require('../middleware/validation.middleware');

const router = express.Router();

router.post('/register', validateRequest(schemas.register), register);
router.post('/login', validateRequest(schemas.login), login);

module.exports = router;