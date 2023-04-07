const { Schema, Types, model } = require('mongoose');
const thought = require('./Thought');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Invalid email address!'],
    },
    friends: [{ type: Schema.Types.ObjectId, ref: 'users'}],
    thoughts: [{ type: Schema.Types.ObjectId, ref: thought}],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

// Create a virtual property `friendCount` that gets the length of friends per user
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  });

const User = model('users', userSchema);

module.exports = User;
