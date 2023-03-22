import { atom } from 'recoil';

export interface TransactionI {
  block: any,
  blockHash: string,
  blockNumber: string,
  date: string,
  from: string,
  gas: string,
  gasPrice: string,
  hash: string,
  to: string,
  confirmations: number,
  transactionIndex: string,
  value: number,
}

export interface TransactionStateI {
  numberOfTransactions: number;
  latestBlockNumber: string;
  transactions: Array<TransactionI>;
}

const initialState: TransactionStateI = {
  numberOfTransactions: 0,
  latestBlockNumber: '0x0',
  transactions: [],
};

export const transactionsState = atom({
  key: 'transactionsAtom',
  default: initialState,
});
