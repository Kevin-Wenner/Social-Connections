const { ObjectId } = require('bson');
const {Schema, Types} = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: ObjectId,
            default: new ObjectId
        },
        reactionBody: {
            type: String,
            require: true,
            max_length: 280
        },
        username:{
            type: String,
            require: true
        },
        createdAt:{
            type: Date,
            default: Date.now()
        }
    }
)

module.export = reactionSchema;