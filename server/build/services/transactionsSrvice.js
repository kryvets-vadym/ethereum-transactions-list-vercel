import { Transaction } from '../models/Transaction.js';
export const getTransactionDate = (block) => {
    const timestampNumber = parseInt(block.timestamp, 16);
    const date = new Date(timestampNumber * 1000)
        .toDateString()
        .split(' ');
    const [, Month, Day, Year] = date;
    return `${Month}-${Day}-${Year}`;
};
export const getTransactionGas = (gasPrice, gas) => {
    const decimals = Math.pow(10, 18);
    return parseInt(gasPrice, 16) * parseInt(gas, 16) / decimals;
};
export const getTransactions = async (query) => {
    const conditionsList = {
        from: query.address,
        to: query.address,
        hash: query.hash,
        blockNumber: query.blockNumber,
    };
    const conditions = [];
    Object.keys(conditionsList).forEach((key) => {
        if (conditionsList[key]) {
            const r = {};
            r[key] = conditionsList[key];
            conditions.push(r);
        }
    }, {});
    const transactions = await Transaction
        .find(conditions.length
        ? {
            $or: conditions,
        }
        : {})
        .skip(Number(query.skip) || 0)
        .limit(Number(query.limit) || 14)
        .sort({
        name: 'asc',
    });
    return transactions;
};
//# sourceMappingURL=transactionsSrvice.js.map