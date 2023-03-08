const router = require('express').Router();
const {
    getUsers, 
    newUser, 
    getSingleUser, 
    updateUser, 
    removeUser, 
    addFriend, 
    removeFriend} = require('../../controllers/userController');
    
router.route('/')
    .get(getUsers)
    .post(newUser);

router.route('/:id')
    .get(getSingleUser)
    .put(updateUser)
    .delete(removeUser);

router.route('/:userId/:friendId')
    .post(addFriend)
    .delete(removeFriend);

