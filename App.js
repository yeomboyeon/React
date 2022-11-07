import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

/**
 * 1. react router dom 설정
 * 2. context provider 설정
 *
 *
 */
function Join() {
  return <div>Join</div>;
}

function Login() {
  return <div>Login</div>;
}

function Main() {
  return <div>Main</div>;
}

const StoreContext = React.createContext({});

function App() {
  const [dispatch, setDispatchType] = React.useState({
    code: null,
    params: null,
  });

  return (
    <StoreContext.Provider value={{ setDispatchType }}>
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/join" element={<Join />}></Route>
      </Routes>
    </StoreContext.Provider>
  );
}

export default App;
