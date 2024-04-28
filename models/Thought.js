const { Schema, model } = require('mongoose');

// new schema
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
        username: {
            type: String,
            required: true,
        },
        // reactions: { [reactionSchema] },

        // TO DO: create a virtual called "reactionCount" that retrieves the length of the thought's reactions array field on query
    },
    // {
    //     toJSON: {
    //         virtuals: true,
    //     },
    //     id: false,
    // }
);

// // Create a virtual property `upvoteCount` that gets the amount of comments per user
// thoughtSchema
//     .virtual('upvoteCount')
//     // Getter
//     .get(function () {
//         return this.meta.upvotes;
//     });

// initialize model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
