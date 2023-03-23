import axios from 'axios';
import config from './config/config';

export const getTransactions = (setTransactions: any, params?: {
  limit?: number,
  skip?: number,
  address?: string,
  transactionId?: string,
  blockNumber?: string,
}) => {
  const API_URL: any = process.env.API_URL || config.API_URL;

  axios.get(
      API_URL,
      {
        params,
      }
  ).then((r) => {
    setTransactions(r.data);
  });
}
