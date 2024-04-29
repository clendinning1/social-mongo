const { Schema, model } = require('mongoose');
const Thought = require('./Thought');

// email validator
const validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};


// new schema
const userSchema = new Schema(
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

// virtual (retrieves the length of the user's friends array field)
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

// initialize new schema as model
const User = model('User', userSchema);

module.exports = User;
