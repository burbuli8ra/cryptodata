import { screen } from '@testing-library/react';
import { render } from 'utils/renderWithProviders';
import Main from './index';

const MockComponent = () => <div>Dummy component</div>;

const setup = ({ children = MockComponent }) => (
  <Main>
    {children}
  </Main>
);

describe('Main component', () => {
  const props = {};

  test('should render with loader', () => {
    render(setup(props));

    expect(screen.getByTestId('main')).toBeInTheDocument();
    expect(screen.getByTestId('loader')).toBeInTheDocument();
    expect(screen.queryByTestId('Dummy component')).toBeNull();
  });

  test('should render with component', () => {
    render(setup(props), { isLoading: false });

    expect(screen.getByTestId('main')).toBeInTheDocument();
    expect(screen.queryByTestId('loader')).toBeNull();
    expect(screen.getByText('Dummy component')).toBeInTheDocument();
  });
});
