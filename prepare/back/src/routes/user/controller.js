const asyncHandler = require('express-async-handler');
const createError = require('http-errors');
const { User, Post, Comment } = require('../../models');
const { signAccessToken, signRefreshToken, verifyRefreshToken } = require('../../utils/jwt');

//팔로워 관련 컨트롤러

//팔로잉 추가, 제거
exports.followings = asyncHandler( async  (req, res) => {
  const { params: {id}, query: {option}, user} = req
  const targetInfo = await User.findById({_id:id});
  const exists = await User.findById({_id:user._id}).find({followings:id});
  const userInfo = await User.findById({_id:user._id});

  if(exists.length == 1 && option == "follow") {
    res.json({success:true, status: 400, message:`Already Followed User ${targetInfo.nickname}`});
  } else if(exists.length == 0 && option == "follow") {
    await userInfo.updateOne({$push:{followings: id}});
    await targetInfo.updateOne({$push:{followers: user._id}});
    res.json({success:true, status: 200, message:`User ${targetInfo.nickname} Followed`, data:{userId:targetInfo._id}});
  } else if(exists.length == 0 && option == "unfollow") {
    res.json({success:true, status: 400, message:`User ${targetInfo.nickname} Is Not Followed`});
  } else if(exists.length == 1 && option == "unfollow") {
    await userInfo.updateOne({$pull:{followings: id}});
    await targetInfo.updateOne({$pull:{followers: user._id}});
    res.json({success:true, status: 200, message:`User ${targetInfo.nickname} Unfollowed`, data:{userId:targetInfo._id}});
  } else {
    res.json({success:true, status: 400, message:"Unable To Handle The Request"})
  }
});

exports.followers = asyncHandler(async (req, res)=>{
  const { params: {userid}, user} = req
  const targetInfo = await User.findById({_id:userid});
  const exists = await User.findById({_id:user._id}).find({followers:userid});
  const userInfo = await User.findById({_id:user._id});

  if(exists.length == 1) {
    await userInfo.updateOne({$pull:{followers:userid}});
    await targetInfo.updateOne({$pull:{followings:user._id}});
    res.json({success:true, status: 200, message:`Follower ${targetInfo.nickname} UnFollowed`});
  } else if(exists.length == 0) {
    res.json({success:true, status: 200, message:`Unable To Handle The Request`})
  }
});

exports.getfollowers = asyncHandler( async(req, res)=> {
  const { user, query:{limit} } = req
  const limitNum = +(limit||10);
  const userInfo = await User.findById(user._id)
    .populate({path: 'followers', select:'nickname'})
    .select('-hashedPassword');
  res.json({success:true, status: 200, message:`User Followers`, followers:userInfo.followers.slice(0,limitNum)});
});

exports.getfollowings = asyncHandler( async(req, res)=> {
  const { user, query:{limit} } = req
  const limitNum = +(limit||10);
  const userInfo = await User.findById(user._id)
    .populate({path: 'followings', select:'nickname'})
    .select('-hashedPassword');
  res.json({success:true, status: 200, message:`User Followings`, followings:userInfo.followings.slice(0,limitNum)});
});


//댓글관련
exports.addComments = asyncHandler(async(req, res)=> {
  const { params:{ id }, body, user } = req
  const post = await Post.findOne({id:id});
  if(!post) throw createError(400, "Post Not Found")
  body.writer = user._id
  body.contentId = id
  const documents = await Comment.create(body)
  const data = await Comment.findById(documents._id)
    .populate({path:"writer", select:'nickname' })
  await post.updateOne({$push:{comments:documents._id}})

  res.json({success:true, status: 200, message: "Comment Added", data:{postId:id, comment:data.comment, writer:data.writer}});
})

exports.removeComments = asyncHandler(async(req,res) => {
  const { params:{id}, user} = req
  const document = await Comment.findById(id);
  if (!document) throw createError(400, "Comment Not Found")
  const post = await Post.findOne({id:document.contentId})
  if (!post) throw createError(400, "Post Not Found")
  if( document.writer == user._id || user.role == "Admin") {
    await document.delete()
    await post.updateOne({$pull:{Comments:id}})
    res.json({success: true, status: 200, message: "Comment Deleted", data:{postId: document.contentId}})
  } else {
    throw createError(400, "Unable To Handle The Request")
  }
})

