import React, { useEffect } from "react";

// 1초에 한번씩 돌아가는 ..
// 정리를 해줘야 타이머가 종료가 된다.

const Timer = (props) => {
  // 이것만 사용하면 타이머는 계속 돌아감.
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 돌아가는중...");
    }, 1000);

    // 정리 작업해주는 함수
    return () => {
      clearInterval(timer);
      console.log("타이머 종료");
    };
  }, []);

  return (
    <div>
      <span>타이머를 시작하니 콘솔창을 보세요.</span>
    </div>
  );
};

export default Timer;
