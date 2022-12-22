import { Router } from 'express';
import { usersRouter } from './user.routes';

export const routes = Router();

routes.use('/user', usersRouter);