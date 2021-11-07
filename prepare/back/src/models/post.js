const mongoose = require('mongoose');
const { Schema } = mongoose;

const postModel = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  content:String,
  user:{
    id: String,
    nickname: String
  },
  images:[],
  hashTags:[],
}, {timestamps: true});

exports.Post = mongoose.model('post', postModel);
