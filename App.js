import "./App.css";
import { useState, useEffect } from "react"; // 추가

/**
useEffect(( ) => { // 작업할 코드 }, [value]);
* 콜백함수 + 배열(dependency array)
* 값이 변할때에만 실행되도록 할려면 [ ] 추가
* 해당 값만 실행되기에 효율적임

useEffect(( ) => { // 작업할 코드 }, [  ]);
* 첫 랜더링 할때만 실행
 */

function App() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  console.log(count);

  // 랜더링 될 때마다 실행
  useEffect(() => {
    console.log("랜더링");
  });

  // 처음 랜더링 될 때만 실행
  useEffect(() => {
    console.log("랜더링");
  }, []);

  // 마운트 + [해당값] 만 변경 될 때마다 실행
  useEffect(() => {
    console.log("랜더링");
  }, [count]);

  // 마운트 + [해당값] 만 변경 될 때마다 실행
  useEffect(() => {
    console.log("랜더링");
  }, [name]);

  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count : {count}시</span>
      <input type="text" value={name} onChange={handleInputChange} />
      <span>name : {name}</span>
    </div>
  );
}

export default App;
