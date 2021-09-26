import { screen } from '@testing-library/react';
import { render } from 'utils/renderWithProviders';
import Main from './index';

const MockedComponent = () => <div>Mocked component</div>;
const setup = ({ children }) => <Main>{children}</Main>;

describe('Main component', () => {
  const props = { children: <MockedComponent /> };

  test('should render component with children', () => {
    render(setup(props));

    expect(screen.getByTestId('main')).toBeInTheDocument();
    expect(screen.getByText('Mocked component')).toBeInTheDocument();
  });
});
