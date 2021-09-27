import styled from '@emotion/styled';

const Button = styled.button`
  border: none;
  border-radius: 16px;
  line-height: 1;
  font-weight: 400;
  padding: 10px;
`;
Button.displayName = 'Button';

const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 48px;
`;
Pagination.displayName = 'Pagination';

export default { Button, Pagination };
