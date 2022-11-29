const User = require('../models/User');

module.exports = {
  getUsers(req, res) {
    User.find()
    .sort({
      createdAt:-1
    })
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  removeUser(req, res) {
    User.findOneAndRemove({_id:req.params.userId})
      .then((dbUserData) => res.json({message:'user successfully deleted'}))
      .catch((err) => res.status(500).json(err));
  }
};