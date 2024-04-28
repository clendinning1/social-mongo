const mongoose = require('mongoose');

// email validator
const validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};


// new schema
const userSchema = new mongoose.Schema(
    {
        username: { type: String, unique: true, required: true, trim: true },
        email: {
            type: String,
            unique: true,
            required: true,
            validate: [validateEmail, 'Please fill a valid email address'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// create a virtual called "reactionCount" that retrieves the length of the user's friends array field on query.
thoughtSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

// initialize new schema as model
const User = mongoose.model('User', userSchema);

module.exports = User;
