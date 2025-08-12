const API_KEY = 'd2d10005198e28c8d3ddf52c';
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest`;

function wait(delay) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

async function request(url, method = 'GET', data = null) {
  const options = { method };

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
  }

  return wait(300)
    .then(() => fetch(BASE_URL + url, options))
    .then(response => response.json())
    .then(response => response.conversion_rates);
}

export const client = {
  get: url => request(url),
  post: (url, data) => request(url, 'POST', data),
  patch: (url, data) => request(url, 'PATCH', data),
  delete: url => request(url, 'DELETE'),
};
