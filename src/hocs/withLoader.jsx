import { Loader } from 'components';
import { useAppContext } from 'provider';

const withLoader = Component => props => {
  const [{ isLoading }] = useAppContext();

  return isLoading ? <Loader /> : <Component {...props} />;
};

export default withLoader;
