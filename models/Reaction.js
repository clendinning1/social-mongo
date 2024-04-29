const { Schema, Types } = require('mongoose');

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
        // TO DO: use a getter method to format the timestamp on query
    },
});

module.exports = reactionSchema;
