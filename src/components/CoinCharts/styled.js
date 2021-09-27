import styled from '@emotion/styled/macro';
import { colors } from 'theme';

const Button = styled.button`
  background-color: ${({ isActive }) => (isActive ? colors.green : colors.silver)};
  border: none;
  border-radius: 16px;
  color: ${({ isActive }) => (isActive ? colors.white : 'initial')};
  cursor: pointer;
  line-height: 1;
  font-weight: 400;
  padding: 10px;
`;
Button.displayName = 'Button';

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 48px;
  
  ${Button} {
    &:not(:last-of-type) {
      margin-right: 8px;
    }
  }
`;
Buttons.displayName = 'Buttons';

const Label = styled.div`
  color: ${colors.silver};
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 4px;
  margin-top: 64px;
  text-decoration: underline;
`;
Label.displayName = 'Label';

export default { Button, Buttons, Label };
