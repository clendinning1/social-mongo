const router = require('express').Router();
const {
    getThoughts,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts);

module.exports = router;