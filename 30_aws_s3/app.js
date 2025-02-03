const express = require("express");
const dotenv = require("dotenv");
const multer = require("multer");
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");
const path = require("path");

const app = express();
const PORT = 8080;
dotenv.config();

app.set("view engine", "ejs");

// aws s3 설정
aws.config.update({
  accessKeyId: process.env.AWS_S3_ACCESS_KEY,
  secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
  region: process.env.AWS_S3_REGION,
});

// s3 객체 만들기
const s3 = new aws.S3();

// multer 설정
// 로컬 서버에 사진을 저장하는 기존 코드
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     const ext = path.extname(file.originalname); //확장자

//     cb(null, path.basename(file.originalname, ext) + Date.now() + ext); //중복방지
//   },
// });

//multer 설정 2
// AWS S3에 사진을 저장 하는 코드
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_S3_BUCKET,
    acl: "public-read", // 파일 접근 권한 설정

    key: (req, file, cb) => {
      cb(null, Date.now().toString() + "_" + file.originalname);
    },
  }),
});

app.get("/", (req, res) => {
  res.render("index", { imageUrl: "" });
});

app.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.file);

  if (req.file) {
    const imageUrl = req.file.location; // S3에 업로드된 파일의 경로주소
    res.render("index", { imageUrl });
  } else {
    res.send("이미지를 주세요");
  }
  res.send("이미지 잘 받음");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// {
//   fieldname: 'image',
//   originalname: 'ì\x8A¤í\x81¬ë¦°ì\x83· 2024-12-26 130831.png',
//   encoding: '7bit',
//   mimetype: 'image/png',
//   size: 113943,
//   bucket: 'sesacbig-bucket',
//   key: '1738560971138_ì\x8A¤í\x81¬ë¦°ì\x83· 2024-12-26 130831.png',
//   acl: 'public-read',
//   contentType: 'application/octet-stream',
//   contentDisposition: null,
//   contentEncoding: null,
//   storageClass: 'STANDARD',
//   serverSideEncryption: null,
//   metadata: null,
//   location: 'https://sesacbig-bucket.s3.ap-northeast-2.amazonaws.com/1738560971138_%C3%AC%C2%8A%C2%A4%C3%AD%C2%81%C2%AC%C3%AB%C2%A6%C2%B0%C3%AC%C2%83%C2%B7%202024-12-26%20130831.png',
//   etag: '"49a4ca3ddb504c58fe8a9fec0bdb8a5f"',
//   versionId: undefined
// }
