import styled from "styled-components";
import { SuggestionBox } from "../icons/mebubarIcons";
// 화면 맨 아래 고정된 메뉴바를 만드는 컴포넌트
function Menubar() {
  return (
    <Wrapper>
      <IconBox>
        <SuggestionBox />
        <p>부스찾기</p>
      </IconBox>
      {/* 나머지 아이콘 만들어 보기 */}
      <SuggestionBox />
      <SuggestionBox />
    </Wrapper>
  );
}
export default Menubar;

const Wrapper = styled.div`
  position: fixed; //화면 스크롤 여부와 관계없이 고정
  bottom: 0; //화면 맨 아래에 붙임
  left: 0; // 왼쪽 모서리에 붙임
  width: 100%; //화면 가로 전체를 차지
  height: 117px;
  display: flex;
  gap: 30%; // 아이콘 사이 간격 설정
  align-items: center;
  justify-content: center;
  background-color: #498349;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

const IconBox = styled.div`
  color: white;
  text-align: center;
  p {
    font-weight: bold;
    margin: 0;
  }
`;
