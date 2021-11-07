const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentModel = new Schema({
  contentId: String,
  comments:[
    {
      writer: String,
      comment: String,
    }
  ]
}, {timestamps: true});

exports.Comment = mongoose.model('comment', commentModel);
