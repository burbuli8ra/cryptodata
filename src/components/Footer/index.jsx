import { useAppContext } from 'provider';
import Styled from './styled';

const Footer = () => {
  const [{ isLoading }] = useAppContext();

  if (isLoading) return null;

  const currentYear = new Date().getFullYear();

  return (
    <Styled.Footer data-testid="footer">
      {currentYear} © CryptoData
    </Styled.Footer>
  );
};

export default Footer;
