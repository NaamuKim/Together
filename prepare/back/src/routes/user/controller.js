const asyncHandler = require('express-async-handler');
const createError = require('http-errors');
const { User, Post } = require('../../models');
const { signAccessToken, signRefreshToken, verifyRefreshToken } = require('../../utils/jwt');

//팔로워 관련 컨트롤러

//팔로잉 추가, 제거
exports.followings = asyncHandler( async  (req, res) => {

  const { params: {userid}, query: {option}, user} = req
  const targetInfo = await User.findById({_id:userid});
  const exists = await User.findById({_id:user._id}).find({followings:userid});
  const userInfo = await User.findById({_id:user._id});

  if(exists.length == 1 && option == "follow") {
    res.json({success:true, status: 409, message:`Already Followed User ${targetInfo.nickname}`});
  } else if(exists.length == 0 && option == "follow") {
    await userInfo.updateOne({$push:{followings: userid}});
    await targetInfo.updateOne({$push:{followers: user._id}});
    res.json({success:true, status: 200, message:`User ${targetInfo.nickname} Followed`});
  } else if(exists.length == 0 && option == "unfollow") {
    res.json({success:true, status: 400, message:`User ${targetInfo.nickname} Is Not Followed`});
  } else if(exists.length == 1 && option == "unfollow") {
    await userInfo.updateOne({$pull:{followings: userid}});
    await targetInfo.updateOne({$pull:{followers: user._id}});
    res.json({success:true, status: 200, message:`User ${targetInfo.nickname} Unfollowed`});
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
  const userInfo = await User.findById(user._id).select('-hashedPassword');
  res.json({success:true, status: 200, message:`User Followers`, followers:userInfo.followers.slice(0,limitNum)});
});

exports.getfollowings = asyncHandler( async(req, res)=> {
  const { user, query:{limit} } = req
  const limitNum = +(limit||10);
  const userInfo = await User.findById(user._id).select('-hashedPassword');
  res.json({success:true, status: 200, message:`User Followings`, followers:userInfo.followings.slice(0,limitNum)});
});

