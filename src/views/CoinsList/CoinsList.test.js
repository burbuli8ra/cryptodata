import { screen } from '@testing-library/react';
import { render } from 'utils/renderWithProviders';
import CoinsList from './index';

const setup = () => (
  <CoinsList />
);

describe('CoinsList component', () => {
  test('should render title', () => {
    render(setup());

    expect(screen.getByTestId('coins-list-title')).toBeInTheDocument();
  });
});
