import express, { Request, Response } from 'express';
import cors from 'cors';
import config from './config/config.js';
import balanceRouter from './routes/balanceRouter.js';
import transactionsRouter from './routes/transactionsRouter.js';
import { connectDb, initDb } from './db.js';
import { blocksJob } from './services/blockService.js';
import router from './routes/balanceRouter.js';

const app = express();
const PORT = config.PORT || 5000;

app.use(cors());

app.use(express.json());

app.use('/api', balanceRouter);
app.use('/api', transactionsRouter);

app.get('/', async (req: Request, res: Response) => {
  await initDb();
  res.status(200).send({
    message: 'Ethereum transactions list server!',
  });
});

const start = async () => {
  await connectDb();

  app.listen(PORT, () => {
    console.log(`⚡️[server]: Server started on port ${PORT}`);
  });

  await initDb();

  await blocksJob();
};

await start();





