const router = require('express').Router();
const {
  createUser,
  getUsers,
  getSingleUser,
  removeUser
} = require('../../controllers/userController.js');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).delete(removeUser);

module.exports = router;