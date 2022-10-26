import "./App.css";
import { useState } from "react"; // 추가

const work = () => {
  console.log("무거운 작업들");
  return ["염보연", "문연정"];
};

function App() {
  // 처음에만 실행되도록 콜백 함수로 추가
  const [names, setNames] = useState(() => {
    return work();
  });

  // const [names, setNames] = useState(["염보연", "문연정"]); // 초기값 (여러 문자열 넣을 때에는 [] 추가)
  //        현재상태, 변경값               초기값 설정(콜백 함수로 가능)

  const [input, setInput] = useState(""); // 업데이트 할 때마다 담을 수 있도록 추가(빈 문자열로)

  // 인자 e / 이벤트. 이벤트안에 있는 타겟에 값
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // 업로드 함수
  // setNames 안에 콜백함수로 넣고 이전 값 ...prevState 으로 받아오기
  // 인자에는 이전 값
  const handleUpload = () => {
    setNames((prevState) => {
      console.log("이전 State : ", prevState); // 콘솔창 확인
      return [input, ...prevState];
    });
  };

  console.log(input); // 콘솔창 확인

  // map 에는 엘리멘트 추가하기 위해서 key 값 작성 필, index 작성 추가
  // 사용자가 입력할 때마다 호출할 수 있도록 onChange 추가
  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleUpload}>Upload</button>
      {names.map((name, index) => {
        return <p key={index}>{name}</p>;
      })}
    </div>
  );
}

export default App;
