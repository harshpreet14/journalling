const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
        auth0_id: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            required: true,
        }
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
