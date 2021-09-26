import { withLoader } from 'hocs';
import { getCurrencyPrice } from 'utils/functions';
import Styled from './styled';

const TableList = ({ coins }) => {
  const isEmpty = !coins.length;

  return (
    <Styled.TableList data-testid="table-list" isEmpty={isEmpty}>
      {!isEmpty
        ? coins.map(coin => (
          <Styled.TableItem data-testid="table-item" key={coin.id}>
            <Styled.Symbol data-testid="item-symbol" title="Symbol">
              <img alt={coin.id} src={coin.image} height={32} width={32} />
              {coin.symbol}
            </Styled.Symbol>
            <Styled.Name data-testid="item-name" title="Name" to={`/coin/${coin.id}`}>
              {coin.name}
            </Styled.Name>
            <Styled.Price
              data-testid="item-current-price"
              title="Current price"
            >
              {getCurrencyPrice(coin.current_price)}
            </Styled.Price>
            <Styled.Statistics data-testid="item-statistics">
              <div data-testid="item-statistics-title">Latest 24 hours</div>
              <Styled.Labels data-testid="item-statistics-labels">
                <Styled.Label
                  data-testid="item-statistics-high-label"
                  status="high"
                  title="Highest price"
                >
                  {getCurrencyPrice(coin.high_24h)}
                </Styled.Label>
                <Styled.Label
                  data-testid="item-statistics-low-label"
                  status="low"
                  title="Lowest price"
                >
                  {getCurrencyPrice(coin.low_24h)}
                </Styled.Label>
                <Styled.Label
                  data-testid="item-statistics-diff-label"
                  title="Price change percentage"
                >
                  {`${coin.price_change_percentage_24h}%`}
                </Styled.Label>
              </Styled.Labels>
            </Styled.Statistics>
          </Styled.TableItem>
        )) : 'List is empty'
      }
    </Styled.TableList>
  );
};

const TableListWithLoader = withLoader(TableList);

export { TableListWithLoader as default, TableList };
