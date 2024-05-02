const { Schema, Types } = require('mongoose');

// settings for formatting the date and time in the toLocaleDateString getter
const datetimeOpts = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };

// reaction schema subdocument
const reactionSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: { type: String, required: true, maxlength: 280, },
    username: { type: String, required: true, },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAt) => createdAt.toLocaleDateString("en-US", datetimeOpts)
    },
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false,
    });

module.exports = reactionSchema;
