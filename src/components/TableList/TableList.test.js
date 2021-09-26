import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MockedCoinsList } from '__mocks__';
import { getCurrencyPrice } from 'utils/functions';
import { TableList } from './index';

const setup = props => (
  <Router>
    <TableList {...props} />
  </Router>
);

describe('TableList component', () => {
  test('should render empty component', () => {
    const props = { coins: [] };

    render(setup(props));

    expect(screen.getByTestId('table-list')).toBeInTheDocument();
    expect(screen.getByTestId('table-list')).toHaveStyle({ padding: '48px' });
    expect(screen.getByText('List is empty')).toBeInTheDocument();
    expect(screen.queryAllByTestId('table-item')).toHaveLength(0);
  });

  test('should render coin items', () => {
    const props = { coins: MockedCoinsList };

    render(setup(props));

    expect(screen.getByTestId('table-list')).toBeInTheDocument();
    expect(screen.getByTestId('table-list')).toHaveStyle({ padding: 0 });
    expect(screen.queryByText('List is empty')).toBeNull();
    expect(screen.getAllByTestId('table-item'))
      .toHaveLength(MockedCoinsList.length);
  });

  test('should render coin item data', () => {
    const props = { coins: MockedCoinsList };

    render(setup(props));

    expect(screen.getAllByTestId('item-symbol')[0])
      .toHaveTextContent(MockedCoinsList[0].symbol);

    expect(screen.getAllByTestId('item-name')[1])
      .toHaveTextContent(MockedCoinsList[1].name);

    expect(screen.getAllByTestId('item-current-price')[2])
      .toHaveTextContent(getCurrencyPrice(MockedCoinsList[2].current_price));

    expect(screen.getAllByTestId('item-statistics'))
      .toHaveLength(MockedCoinsList.length);

    expect(screen.getAllByTestId('item-statistics-title')[3])
      .toHaveTextContent('Latest 24 hours');

    expect(screen.getAllByTestId('item-statistics-labels')[3])
      .toHaveTextContent(getCurrencyPrice(MockedCoinsList[3].high_24h));
    expect(screen.getAllByTestId('item-statistics-labels')[3])
      .toHaveTextContent(getCurrencyPrice(MockedCoinsList[3].low_24h));
    expect(screen.getAllByTestId('item-statistics-labels')[3])
      .toHaveTextContent(MockedCoinsList[3].price_change_percentage_24h);

    expect(screen.getAllByTestId('item-statistics-high-label')[4])
      .toHaveTextContent(getCurrencyPrice(MockedCoinsList[4].high_24h));

    expect(screen.getAllByTestId('item-statistics-low-label')[4])
      .toHaveTextContent(getCurrencyPrice(MockedCoinsList[4].low_24h));

    expect(screen.getAllByTestId('item-statistics-diff-label')[4])
      .toHaveTextContent(MockedCoinsList[4].price_change_percentage_24h);
  });
});
