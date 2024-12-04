const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'First name must have more than three characters'],
        },
        lastname: {
            type: String,
            required: true,
            minlength: [3, 'Last name must have more than three characters'],
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    socketId: {
        type: String,
    },
});

// Instance methods
userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    return token;
};

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// Static methods
userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
};

// Model registration
const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
