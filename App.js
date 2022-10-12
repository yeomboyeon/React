import logo from "./logo.svg";
import "./App.css";

console.clear();

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

// React 에서는 컴포넌트라고 불린다.
// <Hello /> 새로 작성한 함수 호출하는 방법
// 데이터를 줄 수 있다.
// 작성요령 <Item image="1" title="219화" />
// 객체,배열,변수 등 표시할 때 반드시 표시 : 중괄호{number}
function App() {
  const number = 10;
  const arr = [1, 2, 3, 4, 5];

  return (
    <div className="App">
      <header className="App-header">
        변수 연습 : {number * 100}, 배열 연습 : {arr}
        <Item image="1" title="219화" date="'22.10.12" number={number} />
        <Item image="2" title="218화" date="'22.10.12" number={number} />
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
