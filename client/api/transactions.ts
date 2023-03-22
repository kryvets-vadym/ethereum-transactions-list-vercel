import axios from 'axios';
import config from './config/config';

const { API_URL } = config;

export const getTransactions = (setTransactions: any, params?: {
  limit?: number,
  skip?: number,
  address?: string,
  transactionId?: string,
  blockNumber?: string,
}) => {
  axios.get(
      API_URL,
      {
        params,
      }
  ).then((r) => {
    setTransactions(r.data);
  });
}
