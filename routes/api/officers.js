const express = require('express');
const router = express.Router();

//Load Input Validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// Load Officer model
const Officer = require('../../models/Officer');

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (request, response) =>
    response.json({ msg: 'Users Works!' })
);

// @route   POST api/users/register
// @desc    Register user, check if email already exists, set avatar options, hash password
// @access  Public
router.post('/register', (request, response) => {
    // error = validateRegisterInput(req.body).error
    // isValid = validateRegisterInput(req.body).isValid
    // const { errors, isValid } = validateRegisterInput(request.body);

    // Check Validation
    // if (!isValid) {
    //     return response.status(400).json(errors);
    // }

    Officer.findOne({ email: request.body.badgeNumber }).then(user => {
        if (user) {
            //errors.email = 'Email already exists';
            return response.status(400).json('errors');
        } else {
            // Creates new user since email does not exist based on the Schema
            const newUser = Officer({
                badgeNumber: request.body.badgeNumber,
                email: request.body.email,
                name: request.body.name,
                phone: request.body.phone
            });
            newUser
                .save()
                .then(user => response.json(user))
                .catch(error => console.log(error));
        }
    });
});

// @route   GET api/users/login
// @desc    Login Officer / Returning Token
// @access  Public
router.post('/login', (request, response) => {
    const { errors, isValid } = validateLoginInput(request.body);

    // Check Validation
    if (!isValid) {
        return response.status(400).json(errors);
    }

    const { email, password } = request.body;
    // const email = request.body.email;
    // const password = request.body.password;

    // Find user by email
    Officer.findOne({ email: email }).then(user => {
        // Check for user
        if (!user) {
            errors.email = 'Officer not found';
            return response.status(404).json(errors);
        }
    });
});

// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get('/current', (request, response) => {
    response.json({
        id: request.user.id,
        name: request.user.name,
        email: request.user.email
    });
});

module.exports = router;
