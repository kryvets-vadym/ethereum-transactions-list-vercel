import { Transaction } from '../models/Transaction.js';
import { getLatestBlockNumber } from '../services/blockService.js';
import { getTransactions } from '../services/transactionsSrvice.js';
export const getTransactionsData = async (req, res) => {
    const latestBlockNumber = await getLatestBlockNumber();
    const numberOfTransactions = await Transaction.count({});
    const transactions = await getTransactions(req.query);
    res.status(200).json({
        transactions,
        numberOfTransactions,
        latestBlockNumber,
    });
};
//# sourceMappingURL=transactionsController.js.map