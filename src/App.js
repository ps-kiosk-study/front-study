import styled from "styled-components";
import Menubar from "./components/common/menubar";
import { Routes, Route, Link } from "react-router-dom";
import TestPage from "./pages/test";
import HomePage from "./pages/home";
import { LogoIcon } from "./components/common/logoIcon";

function App() {
  return (
    <>
      <Wrapper>
        <Link to={"/"}>
          <LogoBox>
            <LogoIcon />
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
  min-height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column; // flex 방향을 column으로 설정
  align-items: center; // align-items: 세로 방향 정렬 (위, 가운데, 아래 등)
`;

const LogoBox = styled.div`
  margin: auto;
  padding: 10px;
`;
