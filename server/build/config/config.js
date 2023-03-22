export default {
    PORT: 5000,
    DB_URL: 'mongodb+srv://qwerty:qwerty123@cluster0.tukpude.mongodb.net/?retryWrites=true&w=majority',
    ETHERSCAN_API_URL: 'https://api.etherscan.io/api',
    ETHERSCAN_API_KEY: 'C7QEKBS2FAYF1WQR989WEWFKDJSE7GQPVY',
    REQUESTS_PER_SECOND: 5,
    SLEEP_TIME: 500,
    NUMBER_OF_BLOCKS_FOR_INIT: 1000,
    COINGECKO_API_URL: 'https://api.coingecko.com/api/v3/coins/list?include_platform=true',
    BASE_ETHEREUM_NODE_URL: 'https://mainnet.infura.io/v3/',
    INFURA_ID_1: '3c052e3a6c774bf79e3052a0c1cef169',
    INFURA_ID_2: '3534dd2b55f74909ba201eb0c9afcdaf',
    TEST_WALLET_ADDRESS: '0xA145ac099E3d2e9781C9c848249E2e6b256b030D',
    ERC20ABI: [
        {
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "decimals",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
    ],
};
//# sourceMappingURL=config.js.map