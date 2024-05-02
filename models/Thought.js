const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };

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
        get: (createdAt) => createdAt.toLocaleDateString("en-US", options)
        // TO DO: use a getter method to format the timestamp on query
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




// TRYING TO BUILD FORMAT DATETIME

// // virtual (formats the date/time)
// thoughtSchema.virtual('formatDateTime').get(function () {
//     return this.createdAt.toLocaleDateString("en-US");
// });

// function formatDT(createdAt) {
//     return createdAt.toLocaleDateString("en-US");
// }

// app.get(function(req, res){
//     return Thought.createdAt.toLocaleDateString("en-US");
// })





// initialize model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;