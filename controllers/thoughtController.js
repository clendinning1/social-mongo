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
            const thought = await Thought.findOne({ _id: req.params.thoughtId })
                .select('-__v');

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // create a new thought
    async createThought(req, res) {
        try {
            const dbThoughtData = await Thought.create(req.body);
            res.json(dbThoughtData);
            // TO DO: push the created thought's `_id` to the associated user's `thoughts` array field
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // update a thought
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate({ _id: req.params.thoughtId }, );

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // delete a thought
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};
