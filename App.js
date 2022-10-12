import React from "react";

import logo from "./logo.svg";
import "./App.css";

// console.clear();

function Item(props) {
  console.log(props.image);

  return (
    <div>
      <h1>이미지 주소 : {props.image}</h1>
      <p>{props.title}</p>
      <p>{props.date}</p>
    </div>
  );
}

// React
// 1. Component
// 2. useState
// 3. useEffect
// <Hello /> 새로 작성한 함수 호출하는 방법
// 데이터를 줄 수 있다.
// 작성요령 <Item image="1" title="219화" />
// 객체,변수 등 표시할 때 반드시 표시 : 중괄호{number}
// 배열 : []

function App() {
  // Destructring(구조 분해 할당)
  const [todos, setTodos] = React.useState([
    {
      title: "밥먹기",
      date: "10.08",
      done: false,
    },
    {
      title: "양치하기",
      date: "10.09",
      done: false,
    },
    {
      title: "백화점 가서 옷사기",
      date: "10.10",
      done: false,
    },
    {
      title: "React 공부하기",
      date: "10.11",
      done: false,
    },
  ]);
  // console.log(todos);
  // console.log(setTodos);

  // 구조 분해 할당 전 기본 코드
  // useState 규칙
  // 1. 기존 데이터 불변성(얕은 복사, ...변수 활용) ★★★★★★★★
  const test = React.useState();
  // console.log(test);
  //(2) [undefined, ƒ]
  //0  :   undefined
  //1  :   ƒ ()

  const [text, setText] = React.useState("");

  // 유니크 key 값은 최상위 부모에게 줘야 한다. // <li key={index}>
  // class 는 className로 작성 // <button className="button">완료</button>

  // onClick 처리하기 위해서는 함수 처리
  // Deepy Copy
  // Shallow Copy(얕은 복사)({...배열변수})a와b 값 모두 가져오고 a값만 바꿔서 가져오는.

  const 완료처리 = (클릭한인덱스번호) => {
    const cloneTodos = [...todos];
    cloneTodos[클릭한인덱스번호].done = !cloneTodos[클릭한인덱스번호].done;
    // false 면 true 로 true 면 false 로 바꾸는 코드

    // alert(클릭한인덱스번호);
    // todos[클릭한인덱스번호].done = true;
    setTodos(cloneTodos); // 바뀐 값을 넣어줘야 적용됨
  };

  const 삭제처리 = (클릭한인덱스번호) => {
    const cloneTodos = [...todos];
    const newTodos = cloneTodos.filter((item, index) => {
      return index !== 클릭한인덱스번호;
    });
    setTodos(newTodos); // 바뀐 값을 넣어줘야 적용됨
  };

  const 저장처리 = () => {
    console.log(text);
    const cloneTodos = [...todos];
    cloneTodos.unshift({
      // 배열 맨 앞 추가
      title: text,
      date: "10.12",
      done: false,
    });
    // console.log(cloneTodos);
    setTodos(cloneTodos);
  };

  return (
    <div className="App">
      <input
        type="text"
        className="input"
        onChange={(event) => {
          setText(event.target.value);
          // console.log(event.target.value);
          // ...변수를 사용하지 않는 이유?  예초부터 String은  불변성이라 사용할 필요가 없음
        }}
      />
      <button type="button" onClick={저장처리}>
        저장
      </button>

      <ul>
        {todos.map((item, index) => {
          const doneName = item.done === true ? "완료" : "미완료";
          const buttonName = item.done === true ? "완료" : "미완료";
          return (
            <li key={index}>
              <span>제목 : {item.title}</span>
              <span>날짜 : {item.date}</span>
              {/* <span>{item.done === true ? " 완료" : " 미완료"}</span> */}
              <button className="blue">{doneName}</button>
              <button className="button" onClick={완료처리.bind(this, index)}>
                {buttonName}
              </button>
              <button onClick={삭제처리.bind(this, index)}>삭제</button>
            </li>
          );
        })}
      </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; // 다른 곳에서 사용 가능
