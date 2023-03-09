const router = require('express').Router();
const {
    getUsers, 
    newUser, 
    getSingleUser, 
    updateUser, 
    removeUser, 
    addFriend, 
    removeFriend} = require('../../controllers/userController');
// localhost:PORT/api/users
router.route('/')
    .get(getUsers)
    .post(newUser);
// localhost:PORT/users/:userId
router.route('/:id')
    .get(getSingleUser)
    .put(updateUser)
    .delete(removeUser);
// localhost:PORT/users/:userID/:friendID
router.route('/:userId/:friendId')
    .post(addFriend)
    .delete(removeFriend);

module.exports = router;