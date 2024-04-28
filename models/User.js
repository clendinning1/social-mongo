const mongoose = require('mongoose');

// email validator
const validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

// new schema
const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true, trim: true },
    email: { 
        type: String,
        unique: true,
        required: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    // thoughts: [thoughtSchema],
    // friends: [userSchema],
    
    // TO DO: create a virtual called "friendCount" that retrieves the length of the user's friends array field on query.
});

// initialize new schema as model
const User = mongoose.model('User', userSchema);

// if error when trying to save a document
const handleError = (err) => console.error(err);

// create individual document for schema
User
    .create({
        username: 'example-user',
        email: 'example@gmail.com'
    })
    .then(result => console.log('Created new document', result))
    .catch(err => handleError(err));

module.exports = User;
