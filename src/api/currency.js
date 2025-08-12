import { client } from './utils/fetchClient';

export const getRates = currency => {
  return client.get(`/${currency}`);
};

