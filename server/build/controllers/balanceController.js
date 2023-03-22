import { getWalletBalance } from '../services/balanceService.js';
export const getTokensBalance = async (req, res) => {
    const { address } = req.params;
    const walletBalance = await getWalletBalance(address);
    res.send(walletBalance);
};
//# sourceMappingURL=balanceController.js.map