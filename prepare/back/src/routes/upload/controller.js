const asyncHandler = require('express-async-handler');
const createError = require('http-errors');
const fs = require('fs');
const aws = require('aws-sdk');
const {AWS_S3_KEY, AWS_S3_PRIVATE_KEY, AWS_BUCKET_NAME_IMG, AWS_BUCKET_NAME_IMG_400} = require('../../config')
const { User, Post } = require('../../models');
const { signAccessToken, signRefreshToken, verifyRefreshToken } = require('../../utils/jwt');
const stream = require("stream");

const s3 = new aws.S3({
  accessKeyId: AWS_S3_KEY,
  secretAccessKey: AWS_S3_PRIVATE_KEY,
  region: 'ap-northeast-2'
})


//이미지 업로드 컨트롤러

//이미지 업로드, 가져오기

exports.uploadImages = asyncHandler( async(req, res) =>{
  const files = req.files
  const imgs = files.map(file => file.key);
  res.json({success:true, status:200, message:"Upload Complete", message: {imagePaths:imgs} })
})

exports.getImage = asyncHandler( async (req, res) => {
  const { params:{id} } = req
  res.sendFile(id,{root:process.cwd()+'/src/uploads/imgs'});
})

exports.getImage_S3 = asyncHandler( async(req, res) =>{
  const {params:{id}} = req;
  const streamParams = {
    downloadParams:{
      Bucket: AWS_BUCKET_NAME_IMG,
      Key: id
    },
  }
  res.type('jpeg')
  await s3.getObject(streamParams.downloadParams).createReadStream().pipe(res);
})

exports.getImage_S3_400 = asyncHandler(async(req, res) => {
  const {params:{id}} = req;
  const streamParams = {
    downloadParams:{
      Bucket: AWS_BUCKET_NAME_IMG_400,
      Key: id
    },
  }
  res.type('jpeg')
  await s3.getObject(streamParams.downloadParams).createReadStream().pipe(res);
})

