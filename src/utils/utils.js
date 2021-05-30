export const formatToCurrency = (value, currency = 'USD') => {
  const options = { style: 'currency', currency: currency };
  const format = new Intl.NumberFormat('en-US', options);

  return format.format(value);
}
