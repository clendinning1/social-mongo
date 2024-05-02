const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// settings for formatting the date and time in the toLocaleDateString getter
const datetimeOpts = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };

// parent schema
const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        minLength: 1,
        maxLength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAt) => createdAt.toLocaleDateString("en-US", datetimeOpts)
    },
    username: { type: String, required: true, },
    reactions: [ reactionSchema ],
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false,
    });

// virtual (retrieves the length of the thought's reactions array field)
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});


// initialize model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;