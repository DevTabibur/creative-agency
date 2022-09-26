import Home from "./Pages/Home/Home";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Header from "./Shared/Header/Header";

function App() {
  return (
    <>
      <Header>

        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>


      </Header>
    </>
  );
}

export default App;
