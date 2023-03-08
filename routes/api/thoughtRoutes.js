const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    newThought,
    updateThought,
    removeThought,
    newReaction,
    removeReaction} = require('../../controllers/thoughtsController');
    
router.route('/')
    .get(getThoughts);

router.route('/:id')
    .get(getSingleThought)
    .post(newThought)
    .put(updateThought)
    .delete(removeThought);

router.route('/:thoughtId/reactions')
    .post(newReaction)
    .delete(removeReaction);

