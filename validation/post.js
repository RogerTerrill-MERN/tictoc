const Validator = require("validator");
const isEmpty = require("./is-empty");

const validatePostInput = data => {
    let errors = {};

    // Checks if data.name is empty
    data.text = !isEmpty(data.text) ? data.text : "";
    
    if(!Validator.isLength(data.text, { min: 10, max: 300 })) {
        errors.text = 'Post must be between 10 and 300 characters';
    }
    
    if (Validator.isEmpty(data.text)) {
        errors.text = "Text field is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};

module.exports = validatePostInput;
