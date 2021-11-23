const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentModel = new Schema({
  contentId: Number,
  writer: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    index: true,
    default: null,
  },
  comment: String

}, {timestamps: true});

exports.Comment = mongoose.model('Comment', commentModel);
