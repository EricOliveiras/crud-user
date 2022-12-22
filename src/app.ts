import express from 'express';
import cors from 'cors';
import { routes } from './routers';
import { ErrorException } from './middlewares/errorMiddleware';
import session from 'express-session';
import { secret } from './config';

export const app = express();

app.use(session({
  secret: secret,
  resave: false,
  saveUninitialized: true
}));

app.use(express.json());
app.use(cors());

app.use(routes);
app.use(ErrorException);