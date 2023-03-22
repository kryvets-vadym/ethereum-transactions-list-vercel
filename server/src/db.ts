import { ITransaction, Transaction } from './models/Transaction.js';
import { Block } from './models/Block.js';
import {
  getBlockByNumber,
  getLatestBlockNumber,
  loadBlocks
} from './services/blockService.js';
import { getTransactionDate, getTransactionGas } from './services/transactionsSrvice.js';
import mongoose from 'mongoose';
import config from './config/config.js';

export const initDb = async () => {
  try {
    const dbTransactionsCount = await Transaction.countDocuments();
    const lastBlockNumber = parseInt(await getLatestBlockNumber(), 16);

    if (dbTransactionsCount === 0) {
      await loadBlocks({
        count: 0,
        number: lastBlockNumber,
        lastBlockNumber,
      });
    }
  } catch (e) {
    console.log(e);
  }
};

export const saveData = async (blocksNumbers: number[], lastBlockNumber: number) => {
  try {
    const promises = blocksNumbers.map(async (blockNumber) => {
      const blockData = await getBlockByNumber(blockNumber.toString(16));
      const blockDto = new Block({
        ...blockData,
        transactions: [],
      });

      if (blockData.transactions && blockData.transactions.length > 0) {
        const transactionsToSave = blockData.transactions.map((tx: any) => {
          const txDto = new Transaction(tx);
          txDto.block = blockDto._id;
          txDto.value = parseInt(tx.value, 16) / Math.pow(10, 18);
          txDto.date = getTransactionDate(blockData);
          txDto.confirmations = lastBlockNumber - blockData.number;
          txDto.gas = getTransactionGas(tx.gasPrice, tx.gas);

          blockDto.transactions.push(txDto._id);

          return txDto;
        }).filter((tx: ITransaction) => tx.value > 0);

        await Promise.all(transactionsToSave);
        await Transaction.insertMany(transactionsToSave);
      }

      await blockDto.save();
    });
    await Promise.all(promises);
  } catch (e) {
    console.log(e);
  }
};

export const connectDb = async () => {
  try {
    await mongoose
      .connect(config.DB_URL)
      .then(async () => {
        console.log('⚡️[database]: Connected to database');
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (e) {
    console.log(e);
  }
};


