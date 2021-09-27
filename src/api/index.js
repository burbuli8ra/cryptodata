import qs from 'qs';

const API = 'https://api.coingecko.com/api/v3';

const appendSearchParams = (url, searchParams) => {
  if (Object.keys(searchParams).length > 0) {
    return `${url}?${qs.stringify(searchParams)}`
  }

  return url;
};

const apiRequest = ({
  url,
  searchParams = {}
}) => {
  const headers = new Headers({
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  });

  const request = new Request(appendSearchParams(url, searchParams), {
    headers,
    method: 'GET'
  });

  return fetch(request)
    .then(response => response.json())
    .catch(error => error);
};

const fetchRoute = {
  coinDetails: id =>
    apiRequest({
      url: `${API}/coins/${id}`
    }),
  coinChart: (id, searchParams) =>
    apiRequest({
      url: `${API}/coins/${id}/market_chart`,
      searchParams
    }),
  coinsList: searchParams =>
    apiRequest({
      url: `${API}/coins/markets`,
      searchParams
    })
};

export default fetchRoute;
