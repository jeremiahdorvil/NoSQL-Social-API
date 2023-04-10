const { Schema, Types } = require('mongoose');
const { DateTime } = require("luxon");

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: DateTime.now(),
      get: dt => dt.toLocaleString(),
    },
  },
  {
    toJSON: {
      getters: true,
      setters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;