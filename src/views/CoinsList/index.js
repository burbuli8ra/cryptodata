/* eslint-disable camelcase */
import { useEffect, useState } from 'react';
import fetchRoute from 'api';
import { Pagination, TableList } from 'components';
import { useAppContext } from 'provider';
import { COINS_CURRENCY, COINS_PER_PAGE } from 'utils/constants';

const CoinsList = () => {
  const [, appDispatch] = useAppContext();

  const [coins, setCoins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);

  const getCoinsList = async () => {
    appDispatch({ type: 'SET_IS_LOADING' });

    return fetchRoute.coinsList({
      page: currentPage,
      per_page: COINS_PER_PAGE,
      vs_currency: COINS_CURRENCY
    });
  };

  const handlePageClick = page => setCurrentPage(page);

  useEffect(() => {
    getCoinsList()
      .then(response => {
        appDispatch({ type: 'RESET_IS_LOADING' });

        setCoins(response);
        setIsPrevDisabled(currentPage === 1);
        setIsNextDisabled(response.length < COINS_PER_PAGE);
      })
  }, [currentPage]);

  return (
    <>
      <h2 data-testid="coins-list-title">Coins List</h2>
      <TableList coins={coins} />
      <Pagination
        page={currentPage}
        isNextDisabled={isNextDisabled}
        isPrevDisabled={isPrevDisabled}
        onClick={handlePageClick}
      />
    </>
  );
};

export default CoinsList;
