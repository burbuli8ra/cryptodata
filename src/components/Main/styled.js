import styled from '@emotion/styled';

const Main = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  min-width: 720px;
  max-width: 960px;
  padding: 48px 24px;
  
  h2 {
    margin-top: 0;
  }
`;
Main.displayName = 'Main';

export default { Main };
