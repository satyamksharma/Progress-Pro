const express = require('express');
const { check } = require('express-validator');

const userController = require('../controllers/userController');

const router = express.Router();

//Signup route for user
router.post(
    '/signup',
    [
        check('name').not().isEmpty(),
        check('email').normalizeEmail().isEmail(),
        check('password').isLength({ min: 6 }),
    ],
    userController.signup
);

//Login route for user
router.post('/login', userController.login);

module.exports = router;
