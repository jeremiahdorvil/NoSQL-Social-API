const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

module.exports = router;




// const { Thought, User } = require('../models');

// module.exports = {
//   // Get all Thoughts
//   getThoughts(req, res) {
//     Thought.find()
//       .then((thoughts) => res.json(thoughts))
//       .catch((err) => res.status(500).json(err));
//   },
//   // Get a Thought
//   getSingleThought(req, res) {
//     Thought.findOne({ _id: req.params.thoughtId })
//       .select('-__v')
//       .then((Thought) =>
//         !Thought
//           ? res.status(404).json({ message: 'No thought with that ID' })
//           : res.json(Thought)
//       )
//       .catch((err) => res.status(500).json(err));
//   },
//   // Create a Thought
//   createThought(req, res) {
//     Thought.create(req.body)
//       .then((thought) => res.json(thought))
//       .catch((err) => {
//         console.log(err);
//         return res.status(500).json(err);
//       });
//   },
//   // Delete a Thought
//   deleteThought(req, res) {
//     Thought.findOneAndDelete({ _id: req.params.thoughtId })
//       .then((thought) =>
//         !Thought
//           ? res.status(404).json({ message: 'No thought with that ID' })
//           : User.deleteMany({ _id: { $in: Thought.Users } })
//       )
//       .then(() => res.json({ message: 'Thoughts and Users deleted!' }))
//       .catch((err) => res.status(500).json(err));
//   },
//   // Update a Thought
//   updateThought(req, res) {
//     Thought.findOneAndUpdate(
//       { _id: req.params.thoughtId },
//       { $set: req.body },
//       { runValidators: true, new: true }
//     )
//       .then((thought) =>
//         !Thought
//           ? res.status(404).json({ message: 'No thought with this id!' })
//           : res.json(thought)
//       )
//       .catch((err) => res.status(500).json(err));
//   },
// };
