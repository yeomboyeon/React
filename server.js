const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("하이");
});

app.get("/mbti", (req, res) => {
  console.log(req.query);
  res.send("mbti 결과값 보여주세요");
});

app.listen(port, () => {
  console.log("서버 실행 완료");
});
