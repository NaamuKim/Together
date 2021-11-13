const asyncHandler = require('express-async-handler');
const createError = require('http-errors');
const db = require('../../models');
const { User } = db;

// User 관련 Controllers
exports.findUsers = asyncHandler(async (req, res) => {
  const { query: { page, limit } } = req;
  const _page = +(page || 1);
  const _limit = +(limit || 10);
  const skip = (page - 1) * limit;

  const total = await User.countDocuments({ role: 'User' });
  const documents = await User.find({}).skip(skip).limit(_limit);

  res.json({ total, page: _page, limit: _limit, data: documents })
});

exports.findUser = asyncHandler(async (req, res) => {
  const { params: { id } } = req;
  const user = await User.findById(id).select('-hashedPassword');
  if (!user) throw createError(404, 'User Not Found');
  res.json({ success: true, status: 200, message: `User ${id} Data`, data: user });
});

exports.updateUser = asyncHandler(async (req, res) => {
  const { body: $set, params: { id } } = req;

  delete $set.role;
  const nicknameDuple = await User.findOne({nickname: $set.nickname});
  const emailDuple = await User.findOne({email: $set.email});
  const user = await User.findById(id);
  if (!user) throw createError(404, 'User Not Found');
  if (emailDuple) throw createError(403, 'Email Already In Use');
  if (nicknameDuple) throw createError(403, 'Nickname Already In Use');
  await user.updateOne({ $set });
  res.json({ success: true, status: 200, message: 'User Info Updated' });
});


//Post 관련 Controller
exports.createPost = asyncHandler( async(req, res) => {
  const { body, user } = req;
  const next = await db.Post.findOne().limit(1).sort({id: -1}).select('id');
  const userInfo = await db.User.findById(user._id).select(-'hashedPassword');
  body.writer = {id:user._id, nickname: userInfo.nickname}
  if(!next) { body.id = 0 }
  else { body.id = next.id+1 };
  await db.Post.create(body);

  res.json({ success: true, status: 201, message:`Number ${body.id} Article Posted`});
})

exports.getPosts = asyncHandler( async(req, res) => {
  const { query: { page, limit } } = req;
  const _page = +(page || 1);
  const _limit = +(limit || 10);
  const skip = (page - 1) * limit;

  const total = await db.Post.countDocuments();
  const documents = await db.Post.find({}).skip(skip).limit(_limit);

  res.json({ total, page: _page, limit: _limit, data: documents });
});

exports.getNexts = asyncHandler(async(req, res)=> {
  const {params:{id}, query:{limit, page}} = req
  console.log(id)
  const _page = +(page || 1);
  const _limit = +(limit || 10);
  const skip = (page - 1) * limit;
  const idConfirm = await db.Post.find({"id":id});
  const documents = await db.Post.find({"id":{$gt:id}}).skip(skip).limit(_limit);
  if (idConfirm.length == 0)
    throw createError(403, `${id} Post Not Found`);
  if (documents.length == 0)
    throw createError(403, `${id} Is The Last Post`);
  res.json({page: _page, limit: _limit, data: documents, lastId: documents.slice(-1)[0].id});
})

exports.getMyPosts = asyncHandler( async(req, res) =>{
  const { user } = req;
  const userId = await User.findById(user._id).select(-'hashedPassword');

  const documents = await db.Post.find({"writer.id": user._id});

  res.json({ success: true, status: 200, message:`User ${userId.id}'s documents`, data: documents})
});

exports.getPost = asyncHandler(async(req, res)=>{
  const { params: {id} } = req;
  const document = await db.Post.findOne({id:id})

  res.json({ document });
});

exports.updatePost = asyncHandler( async(req, res) => {
  const { params: { id }, body: {content, hashTags}, user} = req;

  const userId = await User.findById(user._id).select('-hashedPassword');

  const document = await db.Post.findOne({id:id})
  if(document.writer.id == userId._id || user.role == 'admin') {
    await document.updateOne({content:content, hashTags: hashTags});
    res.json({ success: true, status: 200, message:`${id} Post updated`})
  } else {
    throw createError(403);
  }
});

exports.deletePost = asyncHandler( async(req, res) => {
  const { params: { id }, user} = req;
  const userId = await User.findById(user._id).select('-hashedPassword');
  const document = await db.Post.findOne({id:id})
  if(document.writer.id == userId._id || user.role == 'admin') {
    await document.delete();
    res.json({ success: true, status: 200, message:`${id} Post Deleted`})
  } else {
    throw createError(403);
  }
});

