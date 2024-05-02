const Thought = require('../models/Thought');
const User = require('../models/User');

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
    // create a new thought (post)
    async createThought(req, res) {
        try {
            const dbThoughtData = await Thought.create(req.body);

            const user = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $addToSet: { thoughts: dbThoughtData._id } },
                { new: true }
            );

            if (!user) {
                return res.status(404).json({
                    message: 'Thought created, but found no user with that ID',
                });
            }

            res.json(dbThoughtData);

        } catch (err) {
            res.status(500).json(err);
        }
    },
    // update a thought (put)
    async updateThought(req, res) {
        try {
            const newThoughtText = await req.body.thoughtText

            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: { thoughtText: newThoughtText } }
            );

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }

            res.json(newThoughtText);

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

    // add a reaction to a thought (post)
    async addReaction(req, res) {
        try {
            const newReaction = await req.body;

            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: newReaction } },
                { new: true }
            );

            res.json(thought);

        } catch (err) {
            res.status(500).json(err);
            console.log(err);
        }
    },
    // delete a reaction from a thought
    async deleteReaction(req, res) {
        try {
            const reactionToRemove = await req.body;

            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: reactionToRemove } },
                { new: true }
            );

            res.json(thought);

        } catch (err) {
            res.status(500).json(err);
            console.log(err);
        }
    },
};
