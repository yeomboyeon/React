const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

//서버 종료하는거는 Ctrl + c 눌르면 됨.

app.use(cors());

app.get("/", (req, res) => {
  res.send("안녕하세요~");
});

app.get("/mbti", (req, res) => {
  console.log(req.query);
  res.send("여기는 mbti 결과값 나오게 하기");
});

app.listen(port, () => {
  console.log("서버 실행 완료");
});
