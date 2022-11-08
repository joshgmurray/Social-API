const { default: mongoose } = require('mongoose')
const moongoose = require('mongoose')

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        reactionId: {
            type: mongoose.Schema.Types.ObjectId,
            default: mongoose.Types.ObjectId(),
        },
        reactionBody: {
            type: moongoose.Schema.Types.String,
            maxlength: 280,
        },
        username: {
            type: mongoose.Schema.Types.String,
            required: true
        },
        createdAt: {
            teype: moongoose.Schema.Types.Date,
            default: Date.now
        }
    })
)

module.exports = User;