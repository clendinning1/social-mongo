const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

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
        // TO DO: use a getter method to format the timestamp on query
    },
    username: { type: String, required: true, },
    reactions: [ reactionSchema ],
    // does it need to be typed like below to work?
    // if so, how do I 'ref' it since it's not
    //          supposed to be a model?
    // {
    //      type: Schema.Types.ObjectId,
    //      ref: 'reactionSchema',
    // },
},
    {
        toJSON: {
            virtuals: true,
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
