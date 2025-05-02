import styled from "styled-components";

function ProductCard() {
  return (
    <>
      <Wrapper>
        <Img src="https://i.pinimg.com/736x/d4/8f/e3/d48fe31cc9b26dcb11d5c03ca22d8963.jpg" />
        <ContentsBox>
          <BoothName>부스 이름</BoothName>
          <ProductName>제품명</ProductName>
        </ContentsBox>
      </Wrapper>
    </>
  );
}
export default ProductCard;

const Wrapper = styled.div`
  width: 160ox;
  height: 180px;
  border-radius: 20px;
  border: solid 1px #d9d9d9;
  padding: 10px;
`;

const Img = styled.img`
  border: solid 1px #d9d9d9;
  border-radius: 10px;
  width: 130px;
  height: 110px;
  object-fit: contain;
  background-color: black;
`;

const ContentsBox = styled.div`
  width: 130px;
  text-align: center;
  font-size: 12px;
  white-space: nowrap; /* 줄바꿈 안 함 */
  overflow: hidden; /* 넘친 텍스트 숨김 */
  text-overflow: ellipsis; /* 넘친 부분 ... 표시 */
`;

const BoothName = styled.p`
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;
const ProductName = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;
