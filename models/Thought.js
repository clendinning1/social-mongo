const { Schema, model } = require('mongoose');

// reaction schema subdocument
const reactionSchema = new mongoose.Schema({
    // reactionID: {},     ???
    reactionBody: { type: String, required: true, maxlength: 280, },
    username: { type: String, required: true, },
    createdAt: {
        type: Date,
        default: Date.now,
        // TO DO: use a getter method to format the timestamp on query
    },
});


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
        reactions: [reactionSchema],
        // or maybe `{ type: Schema.Types.ObjectId, ref: 'reaction' }` ???
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// create a virtual called "reactionCount" that retrieves the length of the thought's reactions array field on query
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

// initialize model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
