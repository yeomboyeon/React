import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// root 컴포넌트(Component) 사용
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode> // 출력시 1개가 추가로 더 나옴
  <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
