import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

// TODO import routes file
import { userRouter } from './routes/userRoutes.js';

const app = express();

app.use(morgan('dev'));

// if (process.env.SQUARES_ENV === 'development') {
//   console.log(`morgan?`);
//   app.use(morgan('dev'));
// }

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// TODO mount router on route
app.use('/auth', userRouter);

export default app;
