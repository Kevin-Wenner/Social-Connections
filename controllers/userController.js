const {User, Thought, Reaction} = require('../Models');
const {ObjectID} = require('mongoose').Types;
module.exports = {
    getUsers(req, res){ 
        User.find({})
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    }, 
    newUser(req, res){
        User.create(req.body, res)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    }, 
    getSingleUser(req, res){
        User.findOne({id: req.params.userId})
        .then((user) => 
            !user
                ? res.status(404).json({message: "No user with specified ID"})
                : res.json(user)
                )
                .catch((err) => res.status(500).json(err));
    }, 
    updateUser(req, res){
        User.findOneAndUpdate(
            {id: req.params.id},
            {$set: req.body},
            {runValidators: true, new: true}
        ).then((user) => 
            !user
                ? res.status(404).json({ message: "No user with specified ID"})
                : res.json(user) 
        ).catch((err) => res.status(500).json(err))
    }, 
    removeUser(req, res){
        User.findOneAndDelete({_id: req.params.id})
            .then((pikachu) =>
            !pikachu
                ? res.status(404).json({ message: "No user with specified ID"})
                : res.json(user) 
            ).catch((err) => res.status(500).json(err));
    }, 
    addFriend(req, res){
        User.findOneAndUpdate(
            {_id: req.params.id},
            {$addToSet: {friends: req.params.friendId}},
            {new: true}
        )
            .then(user => res.json(user))
            .catch(err => res.status(400).json(err))
    }, 
    removeFriend(req, res){
        User.findOneAndUpdate(
            {_id: req.params.id},
            {$pull: {friends: req.params.friendId}},
            {new: true}
        )
            .then(friend => res.jason(friend))
            .catch(err => res.status(400).json(err));
    }
}