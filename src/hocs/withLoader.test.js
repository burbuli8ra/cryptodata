import { screen } from '@testing-library/react';
import { render } from 'utils/renderWithProviders';
import withLoader from './withLoader';

jest.mock('./withLoader', () =>
  Component => props => <Component {...props} />
);

const MockedComponent = () => <div>Mocked component</div>;
const MockedComponentWithLoader = withLoader(MockedComponent);

const setup = props => <MockedComponentWithLoader {...props} />;

describe('withLoader HOC', () => {
  const props = {};

  test('should render component', () => {
    render(setup(props), { isLoading: false });

    expect(screen.queryByTestId('loader')).toBeNull();
    expect(screen.getByText('Mocked component')).toBeInTheDocument();
  });
});
