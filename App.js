import React, { useState } from "react";

import "./App.css";

function App() {
  const [list, setList] = React.useState([
    {
      id: 1,
      title: "리액트 공부",
    },
    {
      id: 2,
      title: "자바스트립트 공부",
    },
    {
      id: 3,
      title: "html 공부",
    },
    {
      id: 4,
      title: "css 공부",
    },
  ]);

  let [test, setTest] = React.useState(0);

  const 숫자올리기 = () => {
    setTest((test += 1));
  };
  return (
    // 삼항연산자 활용
    // 버튼 10번이상 눌렸을 때 값 바꾸게 하기
    <div className="App">
      <header className="App-header">
        {test >= 10 ? <p>test 값이 10 이상입니다.</p> : <p>Number : {test} </p>}
        <button style={{ marginTop: 10 }} type="button" onClick={숫자올리기}>
          버튼
        </button>
        {list.map((item, index) => {
          return (
            <div key={item.id}>
              <h2>{item.title}</h2>
            </div>
          );
        })}
      </header>
    </div>
  );
}

export default App;
