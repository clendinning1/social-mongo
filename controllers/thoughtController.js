const Thought = require('../models/Thought');

module.exports = {
    // get all thoughts
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // get one thought by id
    async getSingleThought(req, res) {
        try {
            const user = await Thought.findOne({ _id: req.params.thoughtId })
                .select('-__v');

            if (!user) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // create a new thought
    async createThought(req, res) {
        try {
            const dbThoughtData = await Thought.create(req.body);
            res.json(dbThoughtData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};
