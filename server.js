const express = require('express');
const db = require('./config/connection');
// pull in model
const { Example } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/example', async (req, res) => {
    try {
        // use model in route to find all documents under that schema/model
        const result = await Example.find({});
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
