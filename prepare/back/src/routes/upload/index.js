const { Router } = require('express');
const { requireLoggedIn } = require('../../middlewares/auth');
const {AWS_S3_KEY, AWS_S3_PRIVATE_KEY, AWS_BUCKET_NAME_IMG} = require('../../config')
const controller = require('./controller');
const randomstring = require("randomstring");
const multerS3 = require('multer-s3');
const multer = require('multer');
const aws = require('aws-sdk')


let storage = multer.diskStorage(
  {
    destination: './src/uploads/imgs',
    filename: (req, file, cb) => {
      let fileName = randomstring.generate(25);
      let mimeType;
      switch (
        file.mimetype // 파일 타입
        ) {
        case "image/jpeg":
          mimeType = "jpg";
          break;
        case "image/png":
          mimeType = "png";
          break;
        case "image/gif":
          mimeType = "gif";
          break;
        case "image/bmp":
          mimeType = "bmp";
          break;
        default:
          mimeType = "jpg";
          break;
      }
      cb(null, fileName + "." + mimeType);
    }
  }
);

const s3 = new aws.S3({
  accessKeyId: AWS_S3_KEY,
  secretAccessKey: AWS_S3_PRIVATE_KEY,
  region: 'ap-northeast-2'
})

const upload_s3 = multer({
  storage: multerS3({
    s3: s3,
    acl: 'public-read',
    bucket: AWS_BUCKET_NAME_IMG
  })});

const router = Router();

router.post('/img/:id', requireLoggedIn, upload_s3.array('img'),controller.uploadImages);
router.get('/img/:id', requireLoggedIn, controller.getImage_S3 );
module.exports = router;
