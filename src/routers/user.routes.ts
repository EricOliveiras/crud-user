import { Router } from 'express';
import { UserController } from '../controller/user/UserController';

export const usersRouter = Router();

usersRouter.
  post('/',
    UserController.create
  );

usersRouter.
  patch('/update/:id',
    UserController.update
  );

usersRouter.
  delete('/delete/:id',
    UserController.delete
  );