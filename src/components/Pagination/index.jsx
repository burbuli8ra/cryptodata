import { useAppContext } from 'provider';
import Styled from './styled';

const Pagination = ({
  isNextDisabled,
  isPrevDisabled,
  onClick,
  page
}) => {
  const [{ isLoading }] = useAppContext();

  if (isLoading) return null;

  return (
    <Styled.Pagination data-testid="pagination">
      <Styled.Button
        data-testid="previous-button"
        disabled={isPrevDisabled}
        onClick={() => onClick(page-1)}
        type="button">
        Prev
      </Styled.Button>
      <strong data-testid="current-page">Page: {page}</strong>
      <Styled.Button
        data-testid="next-button"
        disabled={isNextDisabled}
        onClick={() => onClick(page+1)}
        type="button">
        Next
      </Styled.Button>
    </Styled.Pagination>
  );
};

export default Pagination;
