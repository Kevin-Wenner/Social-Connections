const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    newThought,
    updateThought,
    removeThought,
    newReaction,
    removeReaction} = require('../../controllers/thoughtsController');
// localhost:PORT/thoughts
router.route('/')
    .get(getThoughts);
// localhost:PORT/thoughts/:id
router.route('/:id')
    .get(getSingleThought)
    .post(newThought)
    .put(updateThought)
    .delete(removeThought);
// localhost:PORT/thoughts/:id/reactions
router.route('/:thoughtId/reactions')
    .post(newReaction)
    .delete(removeReaction);

module.exports = router;

