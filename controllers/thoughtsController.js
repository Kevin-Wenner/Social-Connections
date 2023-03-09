const {User, Thought, Reaction} = require('../Models');

module.exports = {
    getThoughts(req, res){
        Thought.find()
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));
    },
    getSingleThought(req, res){
        Thought.findOne({_id: req.params.Id})
        .then((thought) => 
            !thought
                ? res.status(404).json({message: "No thought with specified ID"})
                : res.json(thought)
                )
                .catch((err) => res.status(500).json(err));
    },
    newThought(req, res){
         Thought.create(req.body)
            .then((thought) =>{return User.findOneAndUpdate(
                {_id: body.userId},
                {$push: {thoughts: thought._id}},
                {new: true}
            )})
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));
    },
    updateThought(req, res){
        Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$set: req.body},
            {runValidators: true, new: true}
        ).then((thought) => 
            !thought
                ? res.status(404).json({ message: "No thought with specified ID"})
                : res.json(thought) 
        ).catch((err) => res.status(500).json(err))

    },
    removeThought(req, res){
         Thought.findOneAndDelete({_id: req.params.thoughtId})
            .then((thought) =>
            !thought
                ? res.status(404).json({ message: "No thought with specified ID"})
                : res.json(thought) 
            ).catch((err) => res.status(500).jason(err));
    },
    newReaction(req, res){
         Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: body } },
            { new: true}
         )
            .then((reaction) => res.json(reaction))
            .catch((err) => res.status(500).json(err));
    },
    removeReaction(req, res){
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: {reactionId: req.params.reactions} } },
            { new: true}
        )
            .then((reaction) =>
            !reaction
                ? res.status(404).json({ message: "No reaction with specified ID"})
                : res.json(reaction) 
            ).catch((err) => res.status(500).jason(err));
    }
}