const {User, Thought, Reaction} = require('../Models');

module.exports = {
    getThoughts(req, res){
        Thought.find()
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));
    },
    getSingleThought(req, res){
        Thought.findOne({id: req.params.thoughtId})
        .then((thought) => 
            !thought
                ? res.status(404).json({message: "No thought with specified ID"})
                : res.json(thought)
                )
                .catch((err) => res.status(500).json(err));
    },
    newThought(req, res){
         Thought.create(req.body)
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));
    },
    updateThought(req, res){
        Thought.findOneAndUpdate(
            {id: req.params.thoughtId},
            {$set: req.body},
            {runValidators: true, new: true}
        ).then((thought) => 
            !thought
                ? res.status(404).json({ message: "No thought with specified ID"})
                : res.json(thought) 
        ).catch((err) => res.status(500).json(err))

    },
    removeThought(req, res){
         Thought.findOneAndDelete({id: req.params.thoughtId})
            .then((thought) =>
            !thought
                ? res.status(404).json({ message: "No thought with specified ID"})
                : res.json(thought) 
            ).catch((err) => res.status(500).jason(err));
    },
    newReaction(req, res){
         Reaction.create(req.body)
            .then((reaction) => res.json(reaction))
            .catch((err) => res.status(500).json(err));
    },
    removeReaction(req, res){
        Reaction.findOneAndDelete({id: req.params.reactionId})
            .then((reaction) =>
            !reaction
                ? res.status(404).json({ message: "No reaction with specified ID"})
                : res.json(reaction) 
            ).catch((err) => res.status(500).jason(err));
    }
}