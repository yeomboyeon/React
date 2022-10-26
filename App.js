import "./App.css";
import { useState, useEffect } from "react"; // 추가
import Timer from "./component/Timmer";
/**
클린 업
 */

function App() {
  const [showTimer, setShowTimer] = useState(false);

  // showTimer 참일때만 보여주기 &&
  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
    </div>
  );
}

export default App;
