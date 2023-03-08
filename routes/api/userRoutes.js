const router = require('express').Router();

router.route('/')
    .get()
    .post();

router.route('/:id')
    .get()
    .put()
    .delete();

router.route('/:userId/:friendId')
    .post()
    .delete();

