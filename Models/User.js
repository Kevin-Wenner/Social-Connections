const {Schema, Types} = require('mongoose');

const userSchema = new Schema(
    {
        userName: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: [validateEmail, "Please enter a valid email address"]
        },
        thoughts: {
            type: Schema.Thought.id,
            ref: 'Thought'
        },
        friends: {
            type: Schema.User.id,
            ref: 'User'
        }
    }
);

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

module.exports = userSchema;