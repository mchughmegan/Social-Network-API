const { Schema, model } = require('mongoose');

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    text: String,
    username: String,
    // comments: [{ type: Schema.Types.ObjectId, ref: 'comment' }],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `commentCount` that gets the amount of comments per post
// postSchema.virtual('commentCount').get(function () {
//   return this.comments.length;
// });

// Initialize our Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;