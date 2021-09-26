import Styled from './styled';

const Main = ({ children }) => (
  <Styled.Main data-testid="main">
    {children}
  </Styled.Main>
);

export default Main;
