const { Schema, Types, model } = require('mongoose');
const { DateTime } = require("luxon");
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: string,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: DateTime,
      default: DateTime.now(),
      get: dt => dt.toLocaleString(),
    },
    username: {
        type: string,
        required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `friendCount` that gets the length of friends per user
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
  });

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
