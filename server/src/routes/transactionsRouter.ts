import { Request, Response, Router } from 'express';
import { getTransactionsData } from '../controllers/transactionsController.js';
import { catchErrors } from '../helpers/catchErrors.js';
import { validateTransactionsData } from '../middlewares/validateTransactionsData.js';

const router = Router();

router.get('/transactions',
  validateTransactionsData,
  catchErrors(getTransactionsData),
);

router.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Ethereum transactions list server',
  });
});

export default router;
