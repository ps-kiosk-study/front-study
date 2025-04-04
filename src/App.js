import styled from "styled-components";

function App() {
  return (
    <>
      <Wrapper>
        <ItemBox>
          <h1>2025 키오스크 만들기 스터디</h1>
          <MyButton>시작하기</MyButton>
        </ItemBox>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MyButton = styled.button`
  background-color: pink;
  color: white;
  padding: 10px 40px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
`;
export default App;
