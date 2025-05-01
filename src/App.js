import styled from "styled-components";
import Menubar from "./components/common/menubar";
import { Routes, Route, Link } from "react-router-dom";
import TestPage from "./pages/test";
import HomePage from "./pages/home";

function App() {
  return (
    <>
      <Wrapper>
        <Link to={"/"}>
          <LogoBox>
            <img src={"/asset/logo.png"} />
          </LogoBox>
        </Link>
        <Routes>
          <Route path="/" element={<TestPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
        <Menubar />
      </Wrapper>
    </>
  );
}
export default App;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoBox = styled.div`
  margin: auto;
  padding: 10px;
`;
