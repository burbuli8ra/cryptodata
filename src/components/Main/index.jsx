import { useAppContext } from 'provider';
import { withLoader } from 'hocs';
import Styled from './styled';

const Main = ({ children: Component }) => {
  const [{ isLoading }] = useAppContext();

  const MainWithLoader = withLoader(Component);

  return (
    <Styled.Main data-testid="main">
      <MainWithLoader isLoading={isLoading} />
    </Styled.Main>
  )
};

export default Main;
