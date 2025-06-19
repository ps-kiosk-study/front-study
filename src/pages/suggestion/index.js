import styled from 'styled-components';
import { Link } from "react-router-dom";
import { LogoIcon } from "../../components/icons/logoIcon";
import Menubar from "../../components/common/menubar";
import SuggestionButton from '../../components/buttons/suggestionButton';
import SuggestionCheckButton from '../../components/buttons/suggestionCheck';


function SuggestionPage() {
  return (
    <>
      <Link to={"/"}>
        <LogoBox>
          <LogoIcon />
        </LogoBox>
      </Link>
      <Wrapper>
        <ButtonBox>
          <SuggestionButton />
        </ButtonBox>
        <ButtonBox>
          <SuggestionCheckButton />
        </ButtonBox>
      </Wrapper>
      <Menubar/>
    </>
  );
}
export default SuggestionPage;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* 중앙 정렬 */

  margin: 0 auto; /* 가운데 정렬 */
`;
const LogoBox = styled.div`
  margin: auto;
  padding-top: 70px;
`;

const ButtonBox = styled.div`
  padding: 50px 0;

  width: 100%;
  display: flex;
  justify-content: center;
`;
