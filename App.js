import React from "react";
import "./App.css";

// React 약속
// 최상위 부모태그는 반드시 감싸져 있어야 한다.
// 형제태그들만 있으면 안된다.
// 부모태그용 : <> </> 이렇게 써줘도 된다.
/**<>
 * <div></div>
 * <div></div>
 * </>
 */

function App() {
  const [showModal, setShowModal] = React.useState(false);

  // 클릭 이벤트 생성
  React.useEffect(() => {
    window.addEventListener("click", (event) => {
      if (event.target.className === "modal-bg") {
        setShowModal(false);
      }
    });
  });

  // showModal 바뀔 때마다 콘솔창 출력
  React.useEffect(() => {
    console.log("showModal 추가");
  }, [showModal]);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",

        height: "100vh",
        alignItems: "center",
      }}
    >
      <button
        onClick={() => {
          setShowModal(true);
        }}
      >
        팝업오픈버튼
      </button>
      {showModal && (
        <>
          <div className="modal-bg">modal-bg</div>
          <div className="modal">modal</div>
        </>
      )}
    </div>
  );
}

export default App;
