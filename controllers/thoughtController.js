const { Thought, User } = require('../models');
const userController = require('./userController');

module.exports = {
  getThoughts(req, res) {
    Thought.find()
    .sort({
      createdAt:-1
    })
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((dbThoughtData) => {
        return User.findOneAndUpdate(
          { _id:req.body.userId},
          {$push:{thoughts:dbThoughtData._id}},
          {new:true}
        )
      })
      .then((dbUserdata)=>{
        if (!dbUserdata){
          return req.status(404).json({message:'thought created but no user with this ID'})
        }
        res.json({message:'Thought created successfully'})
      })
      .catch((err) => res.status(500).json(err));
  },
  updateThought(req, res){
    Thought.findOneAndUpdate(
      {_id:req.params.thoughtId},
      {$set:req.body},
      {runValidators:true, new:true}
    )
    .then((dbThoughtData)=>{
     if (!dbThoughtData){
        return req.status(404).json({message:'no thought with this ID'})
      }
      res.json(dbThoughtData)
    }).catch((err) => res.status(500).json(err));
  },
  deleteThought(req,res){
    Thought.findOneAndRemove({_id:req.params.thoughtId})
    .then((dbThoughtData)=>{
      if (!dbThoughtData){
        return req.status(404).json({message:'no thought with this ID'})
      }
      return User.findOneAndUpdate(
        {thoughts:req.params.thoughtId},
        {$pull:{thoughts:req.params.thoughtId}},
        {new:true}
      )
    })
    .then((dbUserdata)=>{
      if (!dbUserdata){
        return req.status(404).json({message:'thought created but no user with this id'})
      }
      res.json({message:'thought successfully deleted'})
    })
    .catch((err) => res.status(500).json(err));
  },
  addReaction(req, res){
    Thought.findOneAndUpdate(
      {_id:req.params.thoughtId},
      {$addToSet:{reactions:req.body}},
      {runValidators:true, new:true}
    )
    .then((dbThoughtData)=>{
      if (!dbThoughtData){
        return req.status(404).json({message:'no thought with this ID'})
      }
      res.json(dbThoughtData)
    })
    .catch((err) => res.status(500).json(err));
  },
  removeReaction(req,res){
    Thought.findOneAndRemove(
    {_id:req.params.thoughtId},
    {$pull:{reactions:{reactionId:req.params.reactionId}}},
    {runValidators:true, new:true}
  )
  .then((dbThoughtData)=>{
    if (!dbThoughtData){
      return req.status(404).json({message:'no thought with this ID'})
    }
    res.json({message:'reaction successfully deleted'})
  })
  .catch((err) => res.status(500).json(err));}
};