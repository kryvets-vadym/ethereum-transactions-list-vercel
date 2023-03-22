import { model, Schema } from 'mongoose';
const BlockSchema = new Schema({
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
export const Block = model('Block', BlockSchema);
//# sourceMappingURL=Block.js.map