const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

const characters = [
  {
    name: "콘",
    content: "https://kakaofriendsmbti.netlify.app/images/ENFJ.png",
    mbti: "ENFJ", // for , for of [구글 에서 검색]
  },
  {
    name: "빠냐",
    content: "https://kakaofriendsmbti.netlify.app/images/ESTJ.png",
    mbti: "ESTJ",
  },
  {
    name: "앙몬드",
    content: "https://kakaofriendsmbti.netlify.app/images/INFP.png",
    mbti: "INFP",
  },
  {
    name: "어피치",
    content: "https://kakaofriendsmbti.netlify.app/images/ENTP.png",
    mbti: "ENTP",
  },
  {
    name: "죠르디",
    content: "https://kakaofriendsmbti.netlify.app/images/ISFJ.png",
    mbti: "ISFJ",
  },
];

//서버 종료하는거는 Ctrl + c 눌르면 됨.

app.use(cors());

app.get("/", (req, res) => {
  res.send("안녕하세요~");
});

app.get("/mbti", (req, res) => {
  // 결과 값이 문자열을 더해주기 위해서, 계속 바뀌기에 let 적용
  let result = "";

  const mbti = req.query;
  // console.log(req.query);

  // for in 코드로 적용
  for (let key in mbti) {
    // console.log(key);
    const 객체 = mbti[key];

    // 코드는 어려우나 간결해짐
    // 키를 동일하게 맞춰준다. (index 0,1번으로)
    // 디스트럭쳐링
    const [one, two] = Object.keys(객체);
    // console.log(one, two);
    const [oneVal, twoVal] = Object.values(객체);
    // console.log(oneVal, twoVal);
    if (oneVal >= twoVal) {
      result += one;
    } else {
      result += two;
    }

    // 코드가 쉬우나 노가다와 코드가 길어짐
    // if (key === "0") {
    //   if (value["I"] >= value["E"]) {
    //     result += "I";
    //   } else {
    //     result += "E";
    //   }
    // }
    // if (key === "1") {
    //   if (value["S"] >= value["N"]) {
    //     result += "S";
    //   } else {
    //     result += "N";
    //   }
    // }
    // if (key === "2") {
    //   if (value["T"] >= value["F"]) {
    //     result += "T";
    //   } else {
    //     result += "F";
    //   }
    // }
    // if (key === "3") {
    //   if (value["P"] >= value["J"]) {
    //     result += "P";
    //   } else {
    //     result += "J";
    //   }
    // }
  }

  const [캐릭터결과] = characters.filter((item) => {
    return item.mbti === result;
  });
  // console.log(캐릭터결과);

  console.log(result);

  res.send(캐릭터결과);
});

app.listen(port, () => {
  console.log("서버 실행 완료");
});
