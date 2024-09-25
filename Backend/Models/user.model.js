const mongoose = require('mongoose')
const { Schema } = mongoose
// Define user schema


const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    userEmail: {
        type: String,
        required: true,
        unique: true
    },
    userPass: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        date: Date.now
    }
});

// Create the user model from the schema 

const User = mongoose.model('User', userSchema);

module.exports = User

