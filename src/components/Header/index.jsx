import logo from 'assets/logo.svg';
import Styled from './styled';

const Header = () => (
  <Styled.Header data-testid="header">
    <Styled.Logo data-testid="logo">
      <Styled.LogoLink data-testid="logo-home-link" to="/">
        <Styled.Icon
          alt="CryptoData logo"
          data-testid="logo-icon"
          height={28}
          width={28}
          src={logo}
        />
        CryptoData
      </Styled.LogoLink>
    </Styled.Logo>
  </Styled.Header>
);

export default Header;
