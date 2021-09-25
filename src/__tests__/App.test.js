import { render, screen } from '@testing-library/react';
import App from '../App';

describe('CryptoData App', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('renders logo', () => {
    const logo = screen.getByTestId('logo');

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('height', '150');
    expect(logo).toHaveAttribute('width', '150');
  });

  test('renders greeting text', () => {
    const greeting = screen.getByTestId('greeting');

    expect(greeting).toBeInTheDocument();
    expect(greeting).toHaveTextContent(
      'Edit src/App.js and enjoy coding time! 🥂'
    );
  });
});
