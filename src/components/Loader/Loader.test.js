import { render, screen } from '@testing-library/react';
import Loader from './index';

const setup = () => <Loader />;

describe('Loader component', () => {
  test('should render component', () => {
    render(setup())
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });
});
