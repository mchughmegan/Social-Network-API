const router = require('express').Router();
const {
  getSingleThought,
  getThoughts,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getSingleThought);

router.route('/:thoughtId').post(updateThought);

router.route('/:thoughtId').delete(deleteThought);

router.route('/:thoughtId').post(addReaction);

router.route('/:thoughtId').delete(removeReaction);

module.exports = router;