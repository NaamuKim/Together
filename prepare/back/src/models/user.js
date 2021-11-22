const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  nickname: {
    type: String,
    unique: true,
  },
  hashedPassword: String,
  role: {
    type: String,
    enum: ['Admin', 'User'],
    default: 'User'
  },
  followers: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
    index: true,
    default: null,
  }],
  followings: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
    index: true,
    default: null,
  }],
  likedPosts: [ ],
},{timestamps:true});

schema.virtual('password')
  .set(function (password) {
    this.hashedPassword = bcrypt.hashSync(password, 12);
  });

schema.virtual('profile')
  .get(function () {
    return {
      _id: this._id,
      role: this.role,
    };
  });

schema.methods.authenticate = function (password) {
  return bcrypt.compareSync(password, this.hashedPassword);
};

exports.User = mongoose.model('User', schema);
