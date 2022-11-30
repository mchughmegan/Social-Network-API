const router = require('express').Router();
const {
  createUser,
  getUsers,
  getSingleUser,
  removeUser,
  addFriend,
  removeFriend
} = require('../../controllers/userController.js');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).delete(removeUser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;