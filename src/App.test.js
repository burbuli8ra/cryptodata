import { render, screen } from '@testing-library/react';
import App from './App';

describe('CryptoData App', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('renders header', () => {
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});
