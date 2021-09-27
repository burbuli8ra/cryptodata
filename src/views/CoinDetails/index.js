/* eslint-disable camelcase, max-len */

// @todo clean-up and write tests for view and child components
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchRoute from 'api';
import CoinInfo from 'components/CoinInfo';
import { useAppContext } from 'provider';
import { COINS_CURRENCY } from 'utils/constants';
import { getCurrencyPrice, getFormattedDate } from 'utils/functions';

const CoinDetails = () => {
  const [, appDispatch] = useAppContext();

  const { id } = useParams();

  const [coinInfo, setCoinInfo] = useState({});

  const getCoinDetails = async () => {
    appDispatch({ type: 'SET_IS_LOADING' });

    return fetchRoute.coinDetails(id);
  };

  useEffect(() => {
    getCoinDetails()
      .then(response => {
        appDispatch({ type: 'RESET_IS_LOADING' });

        const getValue = value => value || '-';

        setCoinInfo({
          currentPrice: response?.market_data?.current_price?.[COINS_CURRENCY],
          description: getValue(response?.description?.en),
          fromCreation: {
            highest_price: getCurrencyPrice(getValue(response?.market_data?.ath?.[COINS_CURRENCY])),
            highest_price_date: getFormattedDate(getValue(response?.market_data?.ath_date?.[COINS_CURRENCY])),
            lowest_price: getCurrencyPrice(getValue(response?.market_data?.ath?.[COINS_CURRENCY])),
            lowest_price_date: getFormattedDate(getValue(response?.market_data?.ath_date?.[COINS_CURRENCY]))
          },
          gitHubStatistics: {
            closed_issues: getValue(response?.developer_data?.closed_issues),
            forks: getValue(response?.developer_data?.forks),
            subscribers: getValue(response?.developer_data?.subscribers),
            stars: getValue(response?.developer_data?.stars),
            total_issues: getValue(response?.developer_data?.total_issues)
          },
          id: response.id,
          image: response?.image?.small || response?.image?.large,
          lastDay: {
            highest_price: getCurrencyPrice(getValue(response?.market_data?.high_24h?.[COINS_CURRENCY])),
            lowest_price: getCurrencyPrice(getValue(response?.market_data?.low_24h?.[COINS_CURRENCY]))
          },
          links: response?.links || {},
          name: response.name,
          priceChange: {
            '24_hours':
              getCurrencyPrice(getValue(response?.market_data?.price_change_24h_in_currency?.[COINS_CURRENCY])),
            '7_days':
              getCurrencyPrice(getValue(response?.market_data?.price_change_percentage_7d_in_currency?.[COINS_CURRENCY])),
            '14_days':
              getCurrencyPrice(getValue(response?.market_data?.price_change_percentage_14d_in_currency?.[COINS_CURRENCY])),
            '1_month':
              getCurrencyPrice(getValue(response?.market_data?.price_change_percentage_30d_in_currency?.[COINS_CURRENCY])),
            '2_months':
              getCurrencyPrice(getValue(response?.market_data?.price_change_percentage_60d_in_currency?.[COINS_CURRENCY])),
            '200 days':
              getCurrencyPrice(getValue(response?.market_data?.price_change_percentage_200d_in_currency?.[COINS_CURRENCY])),
            '1 year':
              getCurrencyPrice(getValue(response?.market_data?.price_change_percentage_1h_in_currency?.[COINS_CURRENCY]))
          },
          reputation: {
            down: getValue(response?.sentiment_votes_down_percentage),
            up: getValue(response?.sentiment_votes_up_percentage)
          },
          socialStatistics: response?.community_data || {}
        });
      })
  }, []);

  return (
    <CoinInfo coin={coinInfo} />
  )
};

export default CoinDetails;
