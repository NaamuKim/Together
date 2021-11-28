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
  const documents = await User.find({})
    .populate({path: 'likedUsers', select: 'nickname'})
    .skip(skip).limit(_limit);
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
  body.writer = userInfo._id
  if(body.content.match(/#[^\s#]+/g)) body.hashTags = body.content.match(/#[^\s#]+/g);
  if(!next) { body.id = 0 }
  else { body.id = next.id+1 };
  const updatedPost = await db.Post.create(body)
  const document = await db.Post.findById(updatedPost._id)
    .populate({path:"writer", select:"nickname"});
  res.json({ success: true, status: 201, message:`Number ${body.id} Article Posted`, data: document});
})

exports.getPosts = asyncHandler( async(req, res) => {
  const { query: { page, limit } } = req;
  const _page = +(page || 1);
  const _limit = +(limit || 10);
  const skip = (page - 1) * limit;

  const total = await db.Post.countDocuments();
  const documents = await db.Post.find({})
    .populate({path: 'writer', select: 'nickname'})
    .populate({path: 'likedUsers', select: 'nickname'})
    .populate({path: 'comments', populate: {path: 'writer', select: 'nickname'}, select:'comment'})
    .sort({createdAt:-1}).skip(skip).limit(_limit);

  res.json({ total, page: _page, limit: _limit, data: documents });
});

exports.getMyPosts = asyncHandler(async(req, res) => {
  const {query:{limit, page, lastid},user} = req
  let searchId = lastid
  if(searchId == 'first'){
    firstDoc = await db.Post.find({writer:user._id}).sort({createdAt:-1})
    if(firstDoc.length!=0) searchId = firstDoc[0].id
    else throw createError(400, `${user.nickname} Post Not Found`);
  }
  const _page = +(page || 1);
  const _limit = +(limit || 10);
  const skip = (page - 1) * limit;
  const idConfirm = await db.Post.find({"id":searchId});
  const documents = await db.Post.find({$and:[{writer:user._id},{"id":{$lte:searchId}}]})
    .populate({path: 'writer', select: 'nickname'})
    .populate({path: 'likedUsers', select: 'nickname'})
    .populate({path: 'comments', populate: {path: 'writer', select: 'nickname'}, select:'comment'})
    .sort({createdAt:-1}).skip(skip).limit(_limit);
  if (idConfirm.length == 0)
    throw createError(400, `${user.nickname} Post Search Not Found`);
  if (documents.length == 0)
    throw createError(400, `${searchId} Is The Last Post`);
  res.json({page: _page, limit: _limit, data: documents, lastId: documents.slice(-1)[0].id});
})

exports.getNexts = asyncHandler(async(req, res)=> {
  const {params:{id}, query:{limit, page}} = req
  let searchId = id
  if(searchId == 'first'){
    firstDoc = await db.Post.find().sort({createdAt:-1})
    searchId = firstDoc[0].id
  }
  const _page = +(page || 1);
  const _limit = +(limit || 10);
  const skip = (page - 1) * limit;
  const idConfirm = await db.Post.find({"id":searchId});
  const documents = await db.Post.find({"id":{$lte:searchId}})
    .populate({path: 'writer', select: 'nickname'})
    .populate({path: 'likedUsers', select: 'nickname'})
    .populate({path: 'comments', populate: {path: 'writer', select: 'nickname'}, select:'comment'})
    .sort({createdAt:-1}).skip(skip).limit(_limit);
  if (idConfirm.length == 0)
    throw createError(400, `${searchId} Post Not Found`);
  if (documents.length == 0)
    throw createError(400, `${searchId} Is The Last Post`);
  res.json({page: _page, limit: _limit, data: documents, lastId: documents.slice(-1)[0].id});
})

exports.getPost = asyncHandler(async(req, res)=>{
  const { params: {id} } = req;
  const document = await db.Post.findOne({id:id})
    .populate({path: 'writer', select: 'nickname'})
    .populate({path: 'likedUsers', select: 'nickname'})
    .populate({path: 'comments', populate: {path: 'writer', select: 'nickname'}, select:'comment'})
  res.json({ document });
});

exports.updatePost = asyncHandler( async(req, res) => {
  const { params: { id }, body: {content, hashTags}, user} = req;

  const userId = await User.findById(user._id).select('-hashedPassword');

  const document = await db.Post.findOne({id:id})
  if(document.writer == userId._id || user.role == 'Admin') {
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
  if(document.writer == userId._id || user.role == 'Admin') {
    await document.delete();
    res.json({ success: true, status: 200, message:`${id} Post Deleted` ,data:{postId: id}})
  } else {
    throw createError(403);
  }
});

//좋아요 관련

exports.addLikes = asyncHandler(async(req, res) =>{
  const { params: { id }, user} = req
  const postData = await db.Post.findOne({id:id});
  const userInfo = await db.User.findById(user._id);
  console.log(userInfo);
  if(postData.likedUsers.includes(user._id) && userInfo.likedPosts.includes(id))
  { throw createError(403, 'User Already Liked Post'); }

  await postData.updateOne({$push:{likedUsers: user._id}});
  await userInfo.updateOne({$push:{likedPosts: id}});

  res.json({status: 200, success: true, message:`User ${userInfo.nickname} Liked Post ${id}`, data:{postId:id, userId:userInfo._id}})

})

exports.removeLikes = asyncHandler(async(req, res)=> {
  const { params: { id }, user} = req;
  const postData = await db.Post.findOne({id:id});
  const userInfo = await db.User.findById(user._id);

  if(!postData.likedUsers.includes(user._id) && !userInfo.likedPosts.includes(id))
    throw createError(403, 'Nothing To Unlike');
  await postData.updateOne({$pull:{likedUsers: user._id}});
  await userInfo.updateOne({$pull:{likedPosts: id}});

  res.json({status: 200, success: true, message:`User ${user.nickname} Unliked Post ${id}`, data:{postId:id, userId:userInfo._id}})
})

//해쉬태그 서치
exports.searchHashTags = asyncHandler(async(req, res) =>{
  const {params:{id}, query:{limit, page, lastid}} = req
  let searchKey = "#"+id
  let searchId = lastid
  if(searchId == 'first'){
    firstDoc = await db.Post.find({hashTags:{"$in":searchKey}}).sort({createdAt:-1})
    if(firstDoc.length!=0) searchId = firstDoc[0].id
    else throw createError(400, `${searchKey} HashTag Search Not Found`);
  }
  const _page = +(page || 1);
  const _limit = +(limit || 10);
  const skip = (page - 1) * limit;
  const idConfirm = await db.Post.find({"id":searchId});
  const documents = await db.Post.find({$and:[{hashTags:{"$in":searchKey}},{"id":{$lte:searchId}}]})
    .populate({path: 'writer', select: 'nickname'})
    .populate({path: 'likedUsers', select: 'nickname'})
    .populate({path: 'comments', populate: {path: 'writer', select: 'nickname'}, select:'comment'})
    .sort({createdAt:-1}).skip(skip).limit(_limit);
  if (idConfirm.length == 0)
    throw createError(400, `${searchKey} HashTag Search Not Found`);
  if (documents.length == 0)
    throw createError(400, `${searchKey} Is The Last Post`);
  res.json({page: _page, limit: _limit, data: documents, lastId: documents.slice(-1)[0].id});
})

//유저 정보 검색
exports.searchUserInfo = asyncHandler(async(req, res)=> {
  const{params:{id}} = req

  const document = await db.User.findById(id)
  if(document.length == 0) throw createError(400, "No User Found");

  const postCount = await db.Post.countDocuments({writer:id})
  const followersCount = document.followers.length;
  const followingsCount = document.followings.length;

  res.json({status: 200, success: true, message: `${document.nickname}'s Info`,data:{postCount:postCount, followersCount:followersCount, followingsCount:followingsCount, nickname: document.nickname}})
})
