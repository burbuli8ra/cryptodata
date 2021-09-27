import { COINS_CURRENCY } from 'utils/constants';

export const getCurrencyPrice = price => new Intl.NumberFormat(
  'en-US',
  {
    style: 'currency',
    currency: COINS_CURRENCY.toUpperCase()
  })
  .format(price);

export const getFormattedDate = timestamp => {
  const date = new Date(timestamp);

  return date.toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
}

export const getChartsDate = (timestamp, days) => {
  const date = new Date(timestamp);
  let options = {};

  if (days === 1) {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      hour12: false,
      minute: 'numeric'
    });
  }

  if (days > 1 && days <= 365) {
    options = {
      day: '2-digit',
      month: 'short'
    };
  }

  if (days > 365) {
    options = {
      month: 'short',
      year: 'numeric'
    };
  }

  return date.toLocaleDateString('en-US', options);
};
