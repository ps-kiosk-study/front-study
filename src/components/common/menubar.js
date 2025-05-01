import { MapIcon } from "./mebubarIcons";
import styled from "styled-components";

function Menubar() {
  return (
    <Wrapper>
      <IconBox>
        <MapIcon />
        <p>부스찾기</p>
      </IconBox>
      {/* 나머지 아이콘 만들어 보기 */}
      <MapIcon />
      <MapIcon />
    </Wrapper>
  );
}
export default Menubar;

const Wrapper = styled.div`
  position: fixed; //화면 스크롤 여부와 관계없이 고정
  bottom: 0; //화면 맨 아래에 붙임
  left: 0;
  width: 100%;
  height: 117px;
  display: flex;
  gap: 30%;
  align-items: center;
  justify-content: center;
  background-color: #3d5f2d;
`;

const IconBox = styled.div`
  color: white;
  text-align: center;
  p {
    font-weight: bold;
    margin: 0;
  }
`;
