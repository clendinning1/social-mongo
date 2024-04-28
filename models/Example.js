const mongoose = require('mongoose');

const exampleSchema = new mongoose.Schema({
    example: { type: String, required: true },
    stockCount: Number,
    price: Number,
    inStock: Boolean,
    lastAccessed: { type: Date, default: Date.now },
});

// new schema as model
const Example = mongoose.model('Example', exampleSchema);

// errorwhen trying to save a document
const handleError = (err) => console.error(err);

// create individual document
Example
    .create({
        example: 'banana',
        stockCount: 10,
        price: 1,
        inStock: true,
    })
    .then(result => console.log('Created new document', result))
    .catch(err => handleError(err));

module.exports = Example;
