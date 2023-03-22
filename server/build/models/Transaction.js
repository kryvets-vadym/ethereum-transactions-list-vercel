import { model, Schema } from 'mongoose';
const TransactionSchema = new Schema({
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
export const Transaction = model('Transaction', TransactionSchema);
//# sourceMappingURL=Transaction.js.map