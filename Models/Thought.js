const {Schema, Types, model} = require('mongoose');
const reactionSchema = require("./Reaction")

const thoughtSchema = new Schema(
    {
        thoughtText:{
            type: String,
            require: true,
            max_length: 280
        },
        createdAt:{
            type: Date,
            default: Date.now(),

        },
        username:{
            type: String,
            require: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
)
const Thought = model("Thought", thoughtSchema);
module.exports = Thought;