const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        default: ''
    },
    mobilenumber: {
        type: String
    },
    otp: {
        type: Number
    },
    token: {
        type: String
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
})



userSchema.methods.generateAuthToken = async function () {

    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET)

    user.token = token
    await user.save()
    return token
}

const User = mongoose.model('user', userSchema);
module.exports = User;