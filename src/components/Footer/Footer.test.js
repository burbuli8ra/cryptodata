import { screen } from '@testing-library/react';
import { render } from 'utils/renderWithProviders';
import Footer from './index';

const setup = () => <Footer />;

describe('Footer component', () => {
  test('should not render footer', () => {
    render(setup());

    expect(screen.queryByTestId('footer')).toBeNull();
  });

  test('should render footer', () => {
    render(setup(), { isLoading: false });

    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
