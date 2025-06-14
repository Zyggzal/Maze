const { connection, Schema } = require('../db');

const validateEmail = function(email) {
    const res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return res.test(email);
};

const validatePassword = function(pass) {
    return pass.length >= process.env.PASSWORD_MIN_LENGTH;
};

const userSchema = {
    login: {
        type: String, 
        required: [true, 'User login is required'],
        trim: true
    },
    password: {
        type: String, 
        required: [true, 'User password is required'],
        trim: true,
        validate: {
            validator: validatePassword,
            message: 'Invalid password.'
        }
    },
    email: {
        type: String, 
        required: [true, 'User email is required'],
        trim: true,
        validate: {
            validator: validateEmail,
            message: 'Invalid email'
        },
        lowercase: true,
        unique: [true, 'A user with this email is already registered']
    },
    items: {
        type: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
        required: false,
        default: []
    }
};

const User = connection.model('User', userSchema);

module.exports = User;