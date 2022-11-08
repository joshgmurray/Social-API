const { default: mongoose } = require('mongoose')
const moongoose = require('mongoose')

const Reaction = mongoose.model(
    "Reaction",
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
            type: moongoose.Schema.Types.Date,
            default: Date.now()
        }
    })
)

module.exports = Reaction;