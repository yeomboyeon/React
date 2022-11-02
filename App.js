import "./App.css";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import React from "react";
import axios from "axios";

// 1. import 추가 ({ Routes, Route }, "react-router-dom")
// 2. App Routes, Route 실행 경로 및 함수 추가
// 3. Main, on1 등 구현 내용에 맞게 추가 (*** 대문자로 시작)
// 4. css 꾸며주기
// 5. navigation(네비게이션) 함수, import useNavigate 추가
// 6. navigation 버튼을 눌렀을 때 해당 화면으로 이동하도록 onClick에 경로('/on1')추가
// 7. 이미지창, 하단 결과창, 페이지별 퍼센트박스크기 자동으로 변경되도록 구현하기 (props)
// 8. compornent 화하기 (함수, 경로 추가)(같은 태그를 묶기)(가독성 향상)(props로 주고받기)
// 9. useContext() 구현
// 10. dispatch, mbti 로직 구현
// 11. mbti state 값 바꾸는 로직 구현(useEffect())
// 12. 결과창 구현(useLocation()) import useLocation 추가 (현재 url 정보 가져오기)
// 13. 서버 연동(axios) import axios 추가

// 상단 퍼센트창(props)
const ProgressBar = (props) => {
  const width = (400 / 5) * props.step;

  return (
    <div className="percent-Bar">
      <div className="percent" style={{ width: width }}></div>
    </div>
  );
};

// 이미지창(props)
const Question = (props) => {
  return (
    <div className="image-box">
      <img src={props.image} alt="온보딩이미지" />
    </div>
  );
};

// 하단 결과창 (props)
const Answer = (props) => {
  const navigation = useNavigate(); // 페이지 이동하기 위함

  const { setDispatchType } = React.useContext(StoreContext);

  return (
    <button
      className="btn"
      onClick={() => {
        setDispatchType({
          code: "답변",
          params: {
            value: props.value,
          },
        });
      }}
    >
      {props.text}
    </button>
  );
};

function On1() {
  return (
    <div className="main-App">
      <ProgressBar step={1} />
      <Question image="https://kakaofriendsmbti.netlify.app/images/01-01.png" />
      <Answer text="당연하지! 어디서 할지 고민 중이야!" value="E" />
      <Answer text="그냥 맛있는거 먹으러 갈까 생각 중이야!" value="I" />
    </div>
  );
}

function On2() {
  return (
    <div className="main-App">
      <ProgressBar step={2} />
      <Question image="https://kakaofriendsmbti.netlify.app/images/02-01.png" />
      <Answer text="영화 완전 재미었어! 너도 한번 봐봐!" value="S" />
      <Answer
        text="좀비가 너무 리얼했어. 실제 상황이면 난 바로 죽었을거야..."
        value="N"
      />
    </div>
  );
}

function On3() {
  return (
    <div className="main-App">
      <ProgressBar step={3} />
      <Question image="https://kakaofriendsmbti.netlify.app/images/03-01.png" />
      <Answer
        text="지금 PPT 만드는 중이니까 아마 한 2시간 뒤면 끝날거 같아!"
        value="T"
      />
      <Answer text="모르겠어. 근데 지금 PPT 만들고 있어!" value="F" />
    </div>
  );
}

function On4() {
  return (
    <div className="main-App">
      <ProgressBar step={4} />
      <Question image="https://kakaofriendsmbti.netlify.app/images/04-01.png" />
      <Answer
        text="그래! 역시 사람 많고 유명한 벚꽃 명소가 예쁘겠지 어디로 갈까?"
        value="J"
      />
      <Answer text="그래! 사람 적은 벚꽃 명소 한 번 찾아볼까?" value="P" />
    </div>
  );
}

function On5() {
  return (
    <div className="main-App">
      <ProgressBar step={5} />
      <Question image="https://kakaofriendsmbti.netlify.app/images/05-01.png" />
      <Answer text="지구는 멸망하지 않아!" value="E" />
      <Answer text="일단 가장 좋아하는 음식부터 먹으러 갈거야!" value="I" />
    </div>
  );
}

function Result() {
  // state(mbti) 값을 변수로 잡기
  const { state } = useLocation();
  // console.log(state);

  // axios 서버 연동하기
  const MBTI결과가져오기 = () => {
    axios({
      url: "http://localhost:4000/mbti",
      method: "get", // 기본 타입으로 생락 가능
      responseType: "json", // 기본 타입으로 생락 가능
      params: state,
    })
      .than(() => {})
      .catch((e) => {
        console.log("에러", e);
      });
  };

  React.useEffect(() => {
    MBTI결과가져오기();
  });

  console.log(MBTI결과가져오기);

  return <div>결과창</div>;
}

function Main() {
  const navigation = useNavigate();

  return (
    <div className="main-App">
      <div className="image-box">
        <img
          src="https://kakaofriendsmbti.netlify.app/static/media/00.88f71908.png"
          alt="메인이미지"
        />
      </div>
      <button
        className="btn"
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

function App() {
  const navigation = useNavigate();

  const [dispatch, setDispatchType] = React.useState({
    code: null,
    params: null,
  });

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

  // 페이지 이동(초기값 1페이지)
  let [page, setPage] = React.useState(1);

  // // 버튼을 누를때마다 setMbti 를 통해 값 변경
  // // findIndex 활용 index 값을 찾기
  // const findIndex = setMbti.findIndex((item) => {
  //   // console.log(item);
  //   return item == setMbti;
  // });

  React.useEffect(() => {
    // console.log(dispatch);
    switch (dispatch.code) {
      case "답변":
        // const { value } = dispatch.params;
        const cloneMbti = [...mbti];
        const findIndex = cloneMbti.findIndex((item) => {
          return item[dispatch.params.value] !== undefined;
        });

        // console.log(cloneMbti[findIndex][dispatch.params.value]);
        cloneMbti[findIndex][dispatch.params.value] += 1;
        setMbti(cloneMbti);

        const nextPage = (page += 1);
        setPage(nextPage);
        // console.log(nextPage);

        if (nextPage === 6) {
          navigation("/result", {
            state: mbti,
          });
        } else {
          navigation(`/on${nextPage}`);
        }

        break;

      default:
        break;
    }
  }, [dispatch]);

  // StoreContext.Provider 통해서 모든 컴포넌트에서 활용 가능
  return (
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
