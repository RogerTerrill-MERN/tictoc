const Validator = require('validator');
const isEmpty = require('./is-empty');

const validateExperienceInput = data => {
    let errors = {};

    // Checks if data.name is empty
    data.title = !isEmpty(data.title) ? data.title : '';
    data.company = !isEmpty(data.company) ? data.company : '';
    data.from = !isEmpty(data.from) ? data.from : '';

    if (Validator.isEmpty(data.title)) {
        errors.title = 'Job title field is required';
    }

    if (Validator.isEmpty(data.company)) {
        errors.company = 'Company field is required';
    }

    if (Validator.isEmpty(data.from)) {
        errors.from = 'From field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};

module.exports = validateExperienceInput;
