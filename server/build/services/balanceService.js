import Web3 from 'web3';
import axios from 'axios';
import config from '../config/config.js';
const { COINGECKO_API_URL, ERC20ABI, BASE_ETHEREUM_NODE_URL, INFURA_ID_1, } = config;
const web3 = new Web3(`${BASE_ETHEREUM_NODE_URL}${INFURA_ID_1}`);
export const getErc20Tokens = async () => {
    const coinsList = await axios.get(COINGECKO_API_URL);
    const tokens = coinsList.data.filter((token) => {
        return token.platforms && token.platforms.ethereum;
    });
    return tokens;
};
export const getEthBalance = async (address) => {
    const balance = await web3.eth.getBalance(address);
    return web3.utils.fromWei(balance, 'ether');
};
export const getTokenBalance = async (address, tokenAddress) => {
    const contract = new web3.eth.Contract(ERC20ABI, tokenAddress);
    const balance = await contract.methods.balanceOf(address).call().catch(console.log);
    let decimals;
    if (balance > 0) {
        decimals = await contract.methods.decimals().call();
    }
    return balance / Math.pow(10, decimals);
};
export const getWalletBalance = async (address) => {
    const erc20Tokens = await getErc20Tokens();
    const tokenBalances = await Promise.all(erc20Tokens.map((token) => {
        return getTokenBalance(address, token.platforms.ethereum);
    }));
    const ethBalance = await getEthBalance(address);
    const userErc20Tokens = erc20Tokens.reduce((result, token, index) => {
        if (Number(tokenBalances[index]) > 0) {
            result[token.symbol] = tokenBalances[index];
        }
        return result;
    }, {});
    const balanceToReturn = {
        ERC20: userErc20Tokens,
        ETH: Number(ethBalance),
        timestamp: new Date().toLocaleString(),
    };
    return balanceToReturn;
};
//# sourceMappingURL=balanceService.js.map