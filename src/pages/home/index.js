import ProductCard from "../../components/homepage/productCard";
import styled from "styled-components";

function HomePage() {
  return (
    <Wrapper>
      <ProductCard />
    </Wrapper>
  );
}
export default HomePage;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* 중앙 정렬 */
  gap: 20px; /* 카드 간 간격 */
  max-width: 600px; /* 한 줄에 3개 정도 들어가게 제한 */
  margin: 0 auto; /* 가운데 정렬 */
`;
