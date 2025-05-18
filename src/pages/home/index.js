import { Link } from "react-router-dom";

import styled from "styled-components";
import { LogoIcon } from "../../components/icons/logoIcon";
import Menubar from "../../components/common/menubar";

function HomePage() {
  return (
    <>
      <Link to={"/"}>
        <LogoBox>
          <LogoIcon />
        </LogoBox>
      </Link>
      <Wrapper></Wrapper>
      <Menubar />
    </>
  );
}
export default HomePage;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const LogoBox = styled.div`
  margin: auto;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
