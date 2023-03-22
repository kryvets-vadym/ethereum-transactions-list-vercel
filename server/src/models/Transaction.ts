import { model, Schema } from 'mongoose';

export interface ITransaction {
  block: any,
  blockHash: string,
  blockNumber: string,
  date: string,
  from: string,
  gas: number,
  hash: string,
  to: string,
  confirmations: number,
  transactionIndex: string,
  value: number,
}

const TransactionSchema: Schema = new Schema<ITransaction>({
  block: {
    type: Schema.Types.ObjectId,
    ref: 'Block',
  },
  blockHash: {
    type: String,
  },
  blockNumber: {
    type: String,
  },
  date: {
    type: String,
  },
  from: {
    type: String,
  },
  gas: {
    type: Number,
  },
  hash: {
    type: String,
  },
  to: {
    type: String,
  },
  confirmations: {
    type: Number,
  },
  transactionIndex: {
    type: String,
  },
  value: {
    type: Number,
  },
});

export const Transaction = model<ITransaction>(
  'Transaction',
  TransactionSchema,
);



