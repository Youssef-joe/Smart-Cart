const { body } = require('express-validator')

let userValidations = () => {
    return [
        body('name').notEmpty().withMessage("name field can not be empty"),
        body('email').notEmpty().withMessage("email field can not be empty").isEmail().withMessage("please enter a valid email"),
        body('password').notEmpty().withMessage("password field can not be empty")
    ]
}


module.exports = userValidations