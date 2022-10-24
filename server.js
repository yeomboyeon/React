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
// mysql 사용전 이렇게 활용
const DB = {
  상품: [],
};

app.use(
  cors({
    origin: true,
  })
);

const port = 4000;

// / 경로
// res.send 빈값이라도 보내줘야지 안그러면 네트워크 에러 발생

app.get("/add/cart", (req, res) => {
  DB.상품.push(req.query);
  console.log(DB);
  res.send({
    code: "success",
    msg: "성공적으로 저장",
  });
});

// DB에 있는 장바구니 데이터 send 하기
app.get("/myCart", (req, res) => {
  res.send(DB.상품);
});

app.get("/", (req, res) => {
  res.send("Node.js 시작");
});

app.get("/test", (req, res) => {
  DB.테스트.push("테스트중");
  console.log(DB.테스트);
  // console.log(req, query); // 쿼리스트링 받기
  res.send({
    code: "success",
    msg: "테스트 성공",
  });
});

app.listen(port, () => {
  console.log("Hello Node.js 시작합니다.");
});
