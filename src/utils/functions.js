export const getCurrencyPrice = price => new Intl.NumberFormat(
  'en-US',
  {
    style: 'currency',
    currency: 'USD'
  })
  .format(price);
