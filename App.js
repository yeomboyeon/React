import "./App.css";
import { useState } from "react"; // 추가

function App() {
  const [time, setTime] = useState(1); // [변수값 설정 가능], 초기값 작성

  // 클릭할 때마다 타임 1씩 증가
  // if 문 통해서 12시가 넘어가면 다시 1시로 바뀌도록 구현
  const handleClick = () => {
    let newTime;
    if (time >= 12) {
      newTime = 1;
    } else {
      newTime = time + 1;
    }
    setTime(newTime);
  };

  // 랜더링되는지 여부 확인
  console.log("업데이트");

  return (
    <div>
      <span>현재시각 : {time}시</span>
      <button onClick={handleClick}>upDate</button>
    </div>
  );
}

export default App;
