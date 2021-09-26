import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from 'utils/renderWithProviders';
import Pagination from './index';

const setup = props => <Pagination {...props} />;

describe('Pagination component', () => {
  const props = {
    isNextDisabled: false,
    isPrevDisabled: true,
    onClick: jest.fn(),
    page: 1
  };

  test('should not render pagination', () => {
    render(setup(props));

    expect(screen.queryByTestId('pagination')).toBeNull();
  });

  test('should render pagination', () => {
    render(setup(props), { isLoading: false });

    expect(screen.getByTestId('pagination')).toBeInTheDocument();
    expect(screen.getByTestId('previous-button')).toBeInTheDocument();
    expect(screen.getByTestId('previous-button'))
      .toHaveAttribute('disabled');
    expect(screen.getByTestId('current-page')).toBeInTheDocument();
    expect(screen.getByTestId('next-button')).toBeInTheDocument();
    expect(screen.getByTestId('next-button'))
      .not.toHaveAttribute('disabled');
  });

  test('should call onClick', () => {
    const updatedProps = {
      ...props,
      isPrevDisabled: false,
      page: 2
    };

    render(setup(updatedProps), { isLoading: false });

    expect(updatedProps.onClick).not.toHaveBeenCalled();

    userEvent.click(screen.getByTestId('next-button'));
    expect(updatedProps.onClick).toHaveBeenCalledWith(updatedProps.page+1);

    userEvent.click(screen.getByTestId('previous-button'));
    expect(updatedProps.onClick).toHaveBeenCalledWith(updatedProps.page-1);
  });
});
