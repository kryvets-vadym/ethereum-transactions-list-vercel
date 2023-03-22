import { isValidEnteredData } from '../helpers/isValidEnteredData.js';
import { ValidationType } from '../types/types.js';
export const validateTransactionsData = (req, res, next) => {
    const { from, to, hash, blockNumber, } = req.query;
    const isSenderAddressValid = from
        ? isValidEnteredData(from.toString(), ValidationType.SenderAddress)
        : true;
    const isRecipientAddressValid = to
        ? isValidEnteredData(to.toString(), ValidationType.RecipientAddress)
        : true;
    const isTxHashValid = hash
        ? isValidEnteredData(hash.toString(), ValidationType.Hash)
        : true;
    const isBlockNumberValid = blockNumber
        ? isValidEnteredData(blockNumber.toString(), ValidationType.BlockNumber)
        : true;
    if (!isSenderAddressValid ||
        !isRecipientAddressValid ||
        !isTxHashValid ||
        !isBlockNumberValid) {
        res.status(400).json({ error: 'Invalid entered data' });
    }
    else {
        next();
    }
};
//# sourceMappingURL=validateTransactionsData.js.map