import { Link } from "react-router-dom";

import styled from "styled-components";
import { LogoIcon } from "../../components/icons/logoIcon";
import Menubar from "../../components/common/menubar";
import NoticeCard from "../../components/homepage/noticeCard";

function HomePage() {
  return (
    <>
      <Link to={"/"}>
        <LogoBox>
          <LogoIcon />
        </LogoBox>
      </Link>
      <Wrapper>
        <ContentsBox>
          <Label>우리반 공지사항</Label>
          <NoticeCard
            isNotice={true}
            content={"이러쿵 저러쿵 수학 어쩌구 저쩌구 얄리얄리"}
          />
        </ContentsBox>
      </Wrapper>
      <Menubar />
    </>
  );
}
export default HomePage;

const Wrapper = styled.div`
  width: 600px;
  display: block;
`;

const ContentsBox = styled.div``;

const Label = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-start;
`;

const LogoBox = styled.div`
  margin: auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
