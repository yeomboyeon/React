const express = require("express");
const app = express();
const cors = require("cors");
const { query } = require("express");

// nodemon 설치전에는 수정되면 서버를 끄고 다시 시작하면 적용됨.
// nodemon 자동 서버 켜줌

// DB : 데이터 영구 저장소
// 새로고침했을 때 이곳에 데이터를 저장
// 장바구니 빈 배열에 데이터를 넣어주고 빼기
// 데이터 초기화는 서버를 껐을 때 초기화 됨
const DB = {
  장바구니: [],
  테스트: [],
};

app.use(
  cors({
    origin: true,
  })
);

const port = 4000;

// / 경로
// res.send 빈값이라도 보내줘야지 안그러면 네트워크 에러 발생

app.get("/", (req, res) => {
  res.send("Node.js 시작");
});

app.get("/test", (req, res) => {
  console.log(req, query);
  res.send({
    code: "success",
    msg: "테스트 성공",
  });
});

app.listen(port, () => {
  console.log("Hello Node.js 시작합니다.");
});
