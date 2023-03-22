import axios from 'axios';
import config from '../config/config.js';
import { Block } from '../models/Block.js';
import { sleep } from '../helpers/sleep.js';
import { saveData } from '../db.js';
export const blocksJob = async () => {
    try {
        const latestBlockNumber = await getLatestBlockNumber();
        const startValue = latestBlockNumber;
        const checkExists = await Block.findOne({ number: latestBlockNumber });
        if (!checkExists) {
            console.log('Start Blocks Fetch');
            await fetchBlocks(startValue, latestBlockNumber);
        }
        if (checkExists) {
            await sleep(5000);
        }
        await sleep(1000);
        await blocksJob();
    }
    catch (e) {
        console.log(e);
    }
};
export const fetchBlocks = async (number, latestBlockNumber) => {
    try {
        await sleep(1000);
        const block = await getBlockByNumber(number);
        const checkExists = await Block.findOne({ number: block.number });
        if (checkExists) {
            return;
        }
        const lastBlockNumber = parseInt(latestBlockNumber, 16);
        await saveData([parseInt(block.number, 16)], lastBlockNumber);
        const previousBlockNumber = (parseInt(block.number, 16) - 1).toString(16);
        await fetchBlocks(previousBlockNumber, latestBlockNumber);
    }
    catch (e) {
        console.log(e);
    }
};
export const loadBlocks = async ({ count, number, lastBlockNumber }) => {
    try {
        const { REQUESTS_PER_SECOND, SLEEP_TIME, NUMBER_OF_BLOCKS_FOR_INIT, } = config;
        if (count === NUMBER_OF_BLOCKS_FOR_INIT) {
            console.log('The data were successfully saved to the database!');
            return;
        }
        if (count % REQUESTS_PER_SECOND === 0) {
            await sleep(SLEEP_TIME);
        }
        const numbersOfBlocks = Array.from({ length: REQUESTS_PER_SECOND }, (_, i) => number - i);
        await saveData(numbersOfBlocks, lastBlockNumber);
        const previousBlockNumber = number - REQUESTS_PER_SECOND;
        await loadBlocks({
            count: count + REQUESTS_PER_SECOND,
            number: previousBlockNumber,
            lastBlockNumber,
        });
    }
    catch (e) {
        console.log(e);
    }
};
export const getLatestBlockNumber = async () => {
    try {
        const { ETHERSCAN_API_URL, ETHERSCAN_API_KEY } = config;
        const response = await axios.get(ETHERSCAN_API_URL, {
            params: {
                module: 'proxy',
                action: 'eth_blockNumber',
                apiKey: ETHERSCAN_API_KEY,
            },
        });
        return response.data.result;
    }
    catch (e) {
        console.log(e);
    }
};
export const getBlockByNumber = async (blockNumber) => {
    try {
        const { ETHERSCAN_API_URL, ETHERSCAN_API_KEY } = config;
        const response = await axios.get(ETHERSCAN_API_URL, {
            params: {
                module: 'proxy',
                action: 'eth_getBlockByNumber',
                tag: blockNumber,
                boolean: true,
                apiKey: ETHERSCAN_API_KEY,
            },
        });
        return response.data.result;
    }
    catch (e) {
        console.log(e);
    }
};
//# sourceMappingURL=blockService.js.map