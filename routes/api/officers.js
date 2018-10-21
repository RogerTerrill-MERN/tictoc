const express = require("express");
const router = express.Router();

//Load Input Validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load Officer model
const Officer = require("../../models/Officer");

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get("/test", (request, response) =>
  response.json({ msg: "Users Works!" })
);

// @route   POST api/users/register
// @desc    Register user, check if email already exists, set avatar options, hash password
// @access  Public
router.post("/register", (request, response) => {
  Officer.findOne({ badgeNumber: request.body.badgeNumber }).then(user => {
    if (user) {
      //errors.email = 'Email already exists';
      return response.status(400).json("That badge number already exists.");
    } else {
      // Creates new user since email does not exist based on the Schema
      const newUser = Officer({
        badgeNumber: request.body.badgeNumber,
        email: request.body.email,
        name: request.body.name,
        phone: request.body.phone
      });
      console.log(newUser);
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
router.post("/login", (request, response) => {
  Officer.findOne({ badgeNumber: request.body.badgeNumber }).then(user => {
    // Check for user
    if (!user) {
      errors.email = "Officer not found";
      return response.status(404).json(errors);
    }
    response.status(200).json({ welcome: "Welcome Back Officer " + user.name });
  });
});

module.exports = router;
