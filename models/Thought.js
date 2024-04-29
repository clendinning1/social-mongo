const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

// parent schema
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // TO DO: use a getter method to format the timestamp on query
        },
        username: { type: String, required: true, },
        reactions: [Reaction],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// virtual (retrieves the length of the thought's reactions array field)
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

// initialize model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
