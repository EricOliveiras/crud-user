import express from 'express';
import cors from 'cors';
import { routes } from './routers';
import { ErrorException } from './middlewares/errorMiddleware';

export const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);
app.use(ErrorException);