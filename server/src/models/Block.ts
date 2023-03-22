import { model, Schema } from 'mongoose';

export interface IBlock {
  gasLimit: string,
  gasUsed: string,
  hash: string,
  number: string,
  size: string,
  timestamp: string,
  transactions: any[],
}

const BlockSchema = new Schema<IBlock>({
  gasLimit: {
    type: String,
  },
  gasUsed: {
    type: String,
  },
  hash: {
    type: String,
  },
  number: {
    type: String,
  },
  size: {
    type: String,
  },
  timestamp: {
    type: String,
  },
  transactions: [{
    type: Schema.Types.ObjectId,
    ref: 'Transaction',
  }],
});

export const Block = model<IBlock>('Block', BlockSchema);
