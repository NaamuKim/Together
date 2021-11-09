const asyncHandler = require('express-async-handler');
const createError = require('http-errors');
const { User, RefreshToken, Post } = require('../../models');
const { signAccessToken, signRefreshToken, verifyRefreshToken } = require('../../utils/jwt');

exports.login = asyncHandler(async (req, res) => {
  const { body: { email, password }, user } = req;

  const exUser = await User.findOne({ email:email});
  const nickname = exUser.nickname;
  const id = exUser._id
  const followers = exUser.followers;
  const followings = exUser.followings;
  const posts = await Post.find({"writer.id": id});
  if (!exUser) throw createError(404, 'User Not Found');
  if (exUser.withdrawn) throw createError(403, 'Forbidden');
  if (!exUser.authenticate(password)) throw createError(400, 'Invalid Password');
  const [accessToken, refreshToken] = await Promise.all([
    signAccessToken(exUser.profile), signRefreshToken(exUser._id)
  ]);

  await RefreshToken.updateToken(exUser._id, refreshToken);
  res.json({ success: true, status:200, message: 'Login Success',
    data: {
    accessToken, refreshToken, nickname:nickname, id:id, email:email, followers: followers, followings: followings, posts: posts
  }});
});

exports.logout = asyncHandler(async (req, res) => {
  const token = req.headers['x-refresh-token'];
  const id = await verifyRefreshToken(token);
  await RefreshToken.removeToken(id, token);
  res.json({ success: true, status: 200, message:'Logout'});
});

exports.getMe = asyncHandler(async (req, res) => {
  const { user } = req;
  const data = await User.findById(user._id).select('-hashedPassword');
  const posts = await Post.find({writer:user._id})
  res.json({ success: true, status: 200, message: `User ${data.nickname}'s Info`, data:{
    nickname:data.nickname, id:data.id, email:data.email, followers: data.followers, followings: data.followings, posts: posts } });
});

exports.updateNickname = asyncHandler( async (req, res) =>{
  const { user, body : {nickname}} = req
  const findUser = await User.findById({_id:user._id});
  const dupleCheck = await User.findOne({ nickname:nickname });
  if(dupleCheck) {
    res.json({success:true, status:409, message:`Nickname ${nickname} Already In Use`});
  } else {
    await findUser.updateOne({nickname:nickname});
    res.json({success:true, status:200, message:`User Nickname Successfully Updated`, nickname:nickname})
  }
})

exports.updateMe = asyncHandler(async (req, res) => {
  const { body: $set, user } = req;
  delete $set.role;
  const document = await User.findById(user._id);
  await document.updateOne({ $set });
  res.json({ success: true, status: 200, message:'Updated Success' });
});

exports.refreshToken = asyncHandler(async (req, res) => {
  const oldToken = req.headers['x-refresh-token'];
  console.log(oldToken);
  
  if (!oldToken) throw createError(401, 'Token Required');

  const id = await verifyRefreshToken(oldToken);
  const user = await User.findById(id);
  const accessToken = await signAccessToken(user.profile);
  const refreshToken = await signRefreshToken(id);

  await RefreshToken.updateToken(id, refreshToken, oldToken);

  res.json({success: true, status: 200, message: 'Token Refreshed', data: {accessToken, refreshToken}});
});

exports.register = asyncHandler(async (req, res) => {
  const { body } = req;
  body.role = 'User';

  const nicknameDupleCheck = await User.findOne({nickname:body.nickname})
  const emailDupleCheck = await User.findOne({email:body.email})

  if(nicknameDupleCheck) {
    res.json({ success: true, status: 409, message: `${body.nickname} Nickname Already In Use`})
  } else if(emailDupleCheck) {
    res.json({ success: true, status: 409, message: `${body.email} Email Already In Use`})
  } else {
    User.create(body);
    res.json({ success: true, status: 200, message: 'User Registered' });
  }
});
