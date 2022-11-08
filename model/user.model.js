const { default: mongoose } = require('mongoose')
const moongoose = require('mongoose')

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        username: {
            type: mongoose.Schema.Types.String,
            unique: true,
            required: true,
        },
        email: {
            type: moongoose.Schema.Types.String,
            required: true,
            unique: true,
        },
        thoughts: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ]
    })
)

module.exports = User;