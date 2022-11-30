const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match:[/.+@.+\..+/,'must be a valid email address']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                reference: 'Thought',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                reference: 'User',
            },
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

userSchema.virtual('friendCount').get(function(){
    return this.friends.length
})

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;