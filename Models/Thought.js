const {Schema, Types} = require('mongoose');

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
        reactions:{
            type: [reactionSchema]
        }
    }
)

module.exports(thoughtSchema)