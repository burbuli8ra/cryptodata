import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from 'theme';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  color: ${colors.white};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  &::before {
    animation: ${spin} 1.4s linear infinite;
    content: '';
    border: 4px solid transparent;
    border-radius: 50%;
    border-top: 4px solid ${colors.white};
    display: inline-flex;
    height: 24px;
    width: 24px;
    margin-bottom: 6px;
  }
`;
Loader.displayName = 'Loader';


export default {
  Loader
};
