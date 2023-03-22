import { isValidEnteredData } from '../helpers/isValidEnteredData.js';
import { ValidationType } from '../types/types.js';
export const validateEthereumAddress = (req, res, next) => {
    const { address } = req.params;
    if (!isValidEnteredData(address, ValidationType.WalletAddress)) {
        res.status(400).json({ error: 'Invalid Ethereum address' });
    }
    else {
        next();
    }
};
//# sourceMappingURL=validateEthereumAddress.js.map