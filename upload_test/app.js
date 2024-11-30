const { render } = require("ejs");
const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8080;

// 미들 웨어설정
app.set("view engine", "ejs");
app.set("views", "./views");

// static 폴더 설정
app.use("/static", express.static(__dirname + "/public"));
app.use("/uploads", express.static(__dirname + "/uploads"));

// body pareser post 요청을 클라이언트로 부터 잘받도록
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// multer 설정
const uploadDetail = multer({
  storage: multer.diskStorage({
    // 파일 경로를 지정하고 이름과 확장자를 설정
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      // 업로드한 파일의 확장자를 가져오기 위해
      const ext = path.extname(file.originalname);
      //   업로드한 파일명을 확장자와 결합하여 정상적으로 사용할 수 있도록 정제
      done(null, path.basename(req.body.id, ext) + ext);
    },
  }),
  //   업로드 제한을 5MB로
  limits: { fileSize: 5 * 1024 * 1024 },
});

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/result", uploadDetail.single("userpoto"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.render("result", {
    fileInfo: req.body,
    file: req.file,
  });
});

app.get("/result", (req, res) => {
  res.render("result");
});

app.listen(PORT, () => {
  console.log(`${PORT} 포트 서버 실행`);
});
