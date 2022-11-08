const { default: mongoose } = require('mongoose')
const moongoose = require('mongoose')

const Thought = mongoose.model(
    "Thought",
    new mongoose.Schema({
        thoughtText: {
            type: mongoose.Schema.Types.String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: moongoose.Schema.Types.Date,
            default: Date.now
        },
        username: {
            type: mongoose.Schema.Types.String,
            required: true
        },
        reactions: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'reactionSchema'
            }
        ]
    })
)

module.exports = Thought;