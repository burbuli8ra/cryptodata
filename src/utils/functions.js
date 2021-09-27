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
