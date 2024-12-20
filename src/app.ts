import express from 'express';
const app = express();
import cookieParser from 'cookie-parser';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './routes';

app.use(cookieParser());
app.use(cors({ origin: ['http://localhost:5173'] }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', router);

app.use(globalErrorHandler);
app.use(notFound);

export default app;
