import { Request, Response } from 'express';
import { getWalletBalance } from '../services/balanceService.js';

export const getTokensBalance = async (req: Request, res: Response) => {
  const { address } = req.params;

  const walletBalance = await getWalletBalance(address);

  res.send(walletBalance);
};

