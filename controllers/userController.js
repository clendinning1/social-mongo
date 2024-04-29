const User = require('../models/User');

module.exports = {
    // get all users
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // get one user by id
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
                .select('-__v');

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // create a new user (post)
    async createUser(req, res) {
        try {
            const dbUserData = await User.create(req.body);
            res.json(dbUserData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // update a user (put)
    async updateUser(req, res) {
        try {
            const newUsername = await req.body.username;
            const newEmail = await req.body.email;

            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: { username: newUsername, email: newEmail } }
            );

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }

            res.json(newUsername + ', ' + newEmail);

        } catch (err) {
            res.status(500).json(err);
        }
    },
    // delete a user
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId });

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // add a friend (post)
    async addFriend(req, res) {
        try {
            // newFriendData = id of the friend we're trying to add via URL (params)
            const newFriendData = await req.params.friendId;

            const baseUser = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { friends: newFriendData } },
                { new: true }
            );

            if (!baseUser) {
                return res.status(404).json({
                    message: 'Invalid base user',
                });
            }

            res.json(newFriendData);

        } catch (err) {
            res.status(500).json(err);
        }
    },
    // delete a friend
    async deleteFriend(req, res) {
        try {
            // newFriendData = id of the friend we're trying to delete via URL (params)
            const friendToRemove = await req.params.friendId;

            const baseUser = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friends: friendToRemove } }
            );

            if (!baseUser) {
                return res.status(404).json({ message: 'Invalid base user' });
            }

            res.json(friendToRemove);

        } catch (err) {
            res.status(500).json(err);
        }
    },
};
