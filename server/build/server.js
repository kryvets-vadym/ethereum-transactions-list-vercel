import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import config from './config/config.js';
import balanceRouter from './routes/balanceRouter.js';
import transactionsRouter from './routes/transactionsRouter.js';
import { initDb } from './db.js';
import { blocksJob } from './services/blockService.js';
const app = express();
const PORT = config.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use('/api', balanceRouter);
app.use('/api', transactionsRouter);
mongoose
    .connect(config.DB_URL)
    .then(async () => {
    console.log('⚡️[database]: Connected to database');
    app.listen(PORT, () => {
        console.log(`⚡️[server]: Server started on port ${PORT}`);
    });
    await initDb();
    await blocksJob();
})
    .catch((error) => {
    console.log(error);
});
//# sourceMappingURL=server.js.map