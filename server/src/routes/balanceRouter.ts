import { Request, Response, Router } from 'express';
import { getTokensBalance } from '../controllers/balanceController.js';
import { validateEthereumAddress } from '../middlewares/validateEthereumAddress.js';
import { catchErrors } from '../helpers/catchErrors.js';

const router = Router();

router.get('/balances/:address',
  validateEthereumAddress,
  catchErrors(getTokensBalance),
);

router.get('/balances', (req: Request, res: Response) => {
  res.status(400).send({
    message: 'Wallet address is required!',
  });
});

export default router;









