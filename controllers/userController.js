const { countReset } = require('console');
const {User, Thought, Reaction} = require('../Models');

module.exports = {
    getUsers(req, res){
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    }, 
    newUser(req, res){
        User.create(req.body)
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
            {id: req.params.userId},
            {$set: req.body},
            {runValidators: true, new: true}
        ).then((user) => 
            !user
                ? res.status(404).json({ message: "No user with specified ID"})
                : res.json(user) 
        ).catch((err) => res.status(500).json(err))
    }, 
    removeUser(req, res){
        User.findOneAndDelete({id: req.params.userId})
            .then((user) =>
            !user
                ? res.status(404).json({ message: "No user with specified ID"})
                : res.json(user) 
            ).catch((err) => res.status(500).jason(err));
    }, 
    addFriend(req, res){

    }, 
    removeFriend(req, res){

    }
}