const express = require('express');
const db = require('./config/connection');
// pull in model
const { User } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/all-users', async (req, res) => {
    try {
        // use model in route to find all documents under that schema/model
        const result = await User.find({});
        res.status(200).json(result);
    } catch (err) {
        res.status(500).send({ message: 'Internal Server Error' })
    }
});

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});
