import React from "react";
import "./App.css";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

// 1. import 추가 ({ Routes, Route }, "react-router-dom")
// 2. App Routes, Route 실행 경로 및 함수 추가
// 3. Main, sub 등 구현 내용에 맞게 추가 (*** 대문자로 시작)
// 4. css 꾸며주기
// 5. navigation(네비게이션) 함수, import 추가
// 6. navigation 버튼을 눌렀을 때 해당 화면으로 이동하도록 onClick에 경로('/on1')추가
// 7. 페이지별 퍼센트박스크기 자동으로 변경되도록 구현하기 (props)
// 8. compornent 화하기 (함수, 경로 추가)(같은 태그를 묶기)(가독성 향상)(props로 주고받기)

// 상단 퍼센트창
const ProgressBar = (props) => {
  // (총길이 / 총 페이지(스탭)수) * 받아오는 스텝(페이지)
  const width = (400 / 5) * props.step;

  return (
    <div className="progress-bar">
      <div className="percent" style={{ width: width }}></div>
    </div>
  );
};

// 결과 이미지창
const Question = (props) => {
  return (
    <div className="image-box">
      <img src={props.image} alt="온보딩이미지" />
    </div>
  );
};

// 하단 버튼창
// useContext 활용
const Answer = (props) => {
  const navigation = useNavigate();

  const { setDispatchType } = React.useContext(StoreContext);

  // 주소 경로 찾아서 보여주기(window.location.pathname)
  // charAt(length-1) 해당 위치 인덱스 가져오기 - 마지막 인덱스 가져오기
  // 현재 스탭 - pathname.charAt(pathname.length - 1)
  // 다음 스탭 - pathname.charAt(pathname.length - 1) + 1
  // 문자열 취급이기에 숫자로 변환 처리(parseInt로 묶기)
  // 비지니스 로직이라고 칭함(onClick에 쓰인 함수)
  return (
    <button
      className="btn"
      onClick={() => {
        setDispatchType({
          code: "답변",
          params: {
            value: props.value, // 클릭한 값
          },
        });

        // console.log(`내가 누른 값 ${props.value}, cloneMbti`);
        // const pathname = window.location.pathname;
        // const nextStep = parseInt(pathname.charAt(pathname.length - 1) + 1);
        // // console.log(nextStep); // 11(문자+숫자로 표기됨)
        // navigation(`/on${nextStep}`);
      }}
    >
      {props.text}
    </button>
  );
};

// compornent 작업
function On1() {
  return (
    <div className="main-app">
      <ProgressBar step={1} />
      <Question image="https://kakaofriendsmbti.netlify.app/images/01-01.png" />
      <Answer text="당연하지! 어디서 할지 고민 중이야!" value="E" />
      <Answer text="그냥 맛있는거 먹으러 갈까 생각 중이야!" value="I" />
    </div>
  );
}

function On2() {
  return (
    <div className="main-app">
      <ProgressBar step={2} />
      <Question image="https://kakaofriendsmbti.netlify.app/images/02-01.png" />
      <Answer text="영화 완전 재미있어! 너도 한번 봐봐!" value="S" />
      <Answer
        text="좀비가 너무 리얼했어. 실제 상황이면 난 바로 죽었을거야..."
        value="N"
      />
    </div>
  );
}

function On3() {
  return (
    <div className="main-app">
      <ProgressBar step={3} />
      <Question image="https://kakaofriendsmbti.netlify.app/images/03-01.png" />
      <Answer text="무슨 꽃 샀어? 향은 좋아?" value="T" />
      <Answer text="왜 우울해? 무슨 일 있어?" value="F" />
    </div>
  );
}

function On4() {
  return (
    <div className="main-app">
      <ProgressBar step={4} />
      <Question image="https://kakaofriendsmbti.netlify.app/images/04-01.png" />
      <Answer
        text="지금 PPT 만드는 중이니까 아마 한 2시간 뒤면 끝날거 같아!"
        value="J"
      />
      <Answer text="모르겠어. 근데 지금 PPT 만들고 있어!" value="P" />
    </div>
  );
}

function On5() {
  return (
    <div className="main-app">
      <ProgressBar step={5} />
      <Question image="https://kakaofriendsmbti.netlify.app/images/05-01.png" />
      <Answer
        text="그래! 역시 사람 많고 유명한 벚꽃 명소가 예쁘겠지 어디로 갈까?"
        value="E"
      />
      <Answer text="그래! 사람 적은 벚꽃 명소 한 번 찾아볼까?" value="I" />
    </div>
  );
}

function Result() {
  const navigation = useNavigate();

  const { state } = useLocation();
  // console.log(state);

  // 데이터 저장하기
  const [result, setResult] = React.useState(undefined);

  // axios
  const MBTI결과가져오기 = async () => {
    await axios({
      url: "http://localhost:5000/mbti",
      method: "GET", // GET , POST
      responseType: "json",
      params: state,
    })
      .then(({ data }) => {
        // console.log(data);
        setResult(data);
      })
      .catch((err) => {
        console.log("에러", err);
      });
  };

  React.useEffect(() => {
    MBTI결과가져오기();
  }, []);

  // console.log(MBTI결과가져오기);

  // 에러 방지 위해서
  if (result === undefined) {
    return <div></div>;
  }

  return (
    <div className="result-img-wrap">
      <img className="result-img" src={result.content} alt="결과화면" />
      <button
        className="btn"
        onClick={() => {
          navigation(`/on1`); // 여기 보완이 필요 다시하기 눌렀을 때 에러
        }}
      >
        다시하기
      </button>
    </div>
  );
}

function Main() {
  const { setDispatchType } = React.useContext(StoreContext);

  const navigation = useNavigate();

  // 임시 저장 기능 값 가져와서 보여주기
  // pc(브라우저)가 꺼졌다가 켜져도 웹에 저장해서 기억할 수 있게 하기(localStorage)
  // localStorage : 작업자도구(f12) > 애플리케이션 > 로컬스토리지
  // 로컬스토리지, 쿠키는 문자열밖에 못넣기에 변환 필요
  React.useEffect(() => {
    setDispatchType({
      code: "임시저장",
    });
  }, []);

  return (
    <div className="main-app">
      <img
        src="https://kakaofriendsmbti.netlify.app/static/media/00.88f71908.png"
        alt="메인이미지"
      />
      <button
        className="btn"
        type="button"
        onClick={() => {
          navigation("/on1");
        }}
      >
        시작하기
      </button>
    </div>
  );
}

const StoreContext = React.createContext({});

// useContext 활용
// React useReducer(비지니스 로직 분리되어 있는걸 한곳에 모음)
function App() {
  const navigation = useNavigate();

  // 모든 컴포넌트(경로)에서 사용할 수 있도록
  // mbti 값을 추가로 보내지 않고 디스패치 하나로 모든 값을 한번에 적용되도록 하기 위함
  const [dispatch, setDispatchType] = React.useState({
    code: null,
    params: null,
  });

  // 내가 답변한 mbti 값 저장해놓을 곳
  const [mbti, setMbti] = React.useState([
    {
      I: 0, // 내향
      E: 0, // 외향
    },
    {
      S: 0, // 현실
      N: 0, // 이상주의
    },
    {
      T: 0, // 이성
      F: 0, // 감성
    },
    {
      P: 0, // 즉흥
      J: 0, // 계획
    },
  ]);

  // // 버튼을 누를때마다 setMbti 를 통해 값 변경
  // // findIndex 활용 index 값을 찾기
  // const findIndex = setMbti.findIndex((item) => {
  //   // console.log(item);
  //   return item == setMbti;
  // });

  //페이지 이동
  let [page, setPage] = React.useState(1);

  //mbti state 값 바꾸는 로직 구현(의존) * 한번 실행하고 끝.
  React.useEffect(() => {
    // console.log(dispatch);
    switch (dispatch.code) {
      case "답변":
        const cloneMbti = [...mbti];
        const findIndex = cloneMbti.findIndex((item) => {
          return item[dispatch.params.value] !== undefined;
        });

        cloneMbti[findIndex][dispatch.params.value] += 1;
        setMbti(cloneMbti);
        // console.log(cloneMbti[findIndex][dispatch.params.value]);

        // 클릭해서 답변 담길 때 페이지 이동
        const nextPage = (page += 1);

        setPage(nextPage);

        // 임시저장 기능 구현중(페이지 이동 전에 구현해야 함)
        // 자료형 구조를 배열 또는 객체로 바꾸는 함수 : JSON.stringify()
        // 페이지 번호도 기억해야 함

        localStorage.setItem("MBTI", JSON.stringify(cloneMbti));
        localStorage.setItem("PAGE", nextPage);

        if (nextPage === 6) {
          navigation("/result", {
            state: mbti,
          });
        } else {
          navigation(`/on${nextPage}`); // 경로 주소에 맞게 작성(대소문자 구분)
        }
        break;

      case "임시저장":
        const 기억되어있는MBTI = localStorage.getItem("MBTI");
        const 기억되어있는PAGE = localStorage.getItem("PAGE");
        // 마지막페이지라면 기억 값 삭제
        if (기억되어있는PAGE === "6") {
          localStorage.removeItem("MBTI");
          localStorage.removeItem("PAGE");
          return;
        }

        if (기억되어있는MBTI && 기억되어있는PAGE) {
          const 기억되어있는MBTI배열 = JSON.parse(기억되어있는MBTI);

          setMbti(기억되어있는MBTI배열);
          setPage(Number(기억되어있는PAGE));
          navigation(`/on${기억되어있는PAGE}`);
        }

        break;

      default:
        break;
    }
    // 의존성(dispatch 실행될 때마다 함수 실행)
  }, [dispatch]);

  // StoreContext 사용을 통해 setMbti 전 경로에서 사용 가능
  //
  return (
    // mbti를 여기에 줘도 되나, 결과창에만 보여주기에 낭비여서 주지 않음
    <StoreContext.Provider value={{ setDispatchType }}>
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route exact path="/on1" element={<On1 />}></Route>
        <Route exact path="/on2" element={<On2 />}></Route>
        <Route exact path="/on3" element={<On3 />}></Route>
        <Route exact path="/on4" element={<On4 />}></Route>
        <Route exact path="/on5" element={<On5 />}></Route>
        <Route exact path="/result" element={<Result />}></Route>
      </Routes>
    </StoreContext.Provider>
  );
}

export default App;
