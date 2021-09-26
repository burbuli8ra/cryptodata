import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Header from './index';

const setup = () => (
  <Router>
    <Header />
  </Router>
);

describe('Header component', () => {
  beforeEach(() => {
    render(setup());
  });

  test('should render component and children', () => {
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getByTestId('logo-home-link')).toBeInTheDocument();
    expect(screen.getByTestId('logo-icon')).toBeInTheDocument();

    expect(screen.getByTestId('logo')).toHaveTextContent('CryptoData');

    expect(screen.getByTestId('logo-icon')).toHaveAttribute('height', '28');
    expect(screen.getByTestId('logo-icon')).toHaveAttribute('width', '28');
  });
});
