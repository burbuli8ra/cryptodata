import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { colors } from 'theme';

const Header = styled.header`
  padding: 20px;
  position: relative;
  text-align: center;
  z-index: 1;
`;
Header.displayName = 'Header';

const Icon = styled.img`
  height: 28px;
  width: 28px;
  margin-right: 4px;
`;
Icon.displayName = 'Icon';

const Logo = styled.h1`
  font-size: 24px;
  margin-bottom: 0;
  margin-top: 0;
`;
Logo.displayName = 'Logo';

const LogoLink = styled(Link)`
  align-items: center;
  color: ${colors.dullMustard};
  display: inline-flex;
  font-size: inherit;
  font-weight: inherit;
  text-decoration: none;
  vertical-align: top;
`;
LogoLink.displayName = 'Link';

export default {
  Header,
  Icon,
  Logo,
  LogoLink
}
