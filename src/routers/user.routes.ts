import { Router } from 'express';
import { UserController } from '../controller/user/UserController';
import { authenticated } from '../middlewares/authenticateMiddleware';
import { validateAuthenticate, validateCreateUser, validateDeleteUser, validateUpdateUser } from '../middlewares/userMiddleware';

export const usersRouter = Router();

usersRouter.
  post('/',
    validateCreateUser,
    UserController.create
  );

usersRouter.
  post('/login',
    validateAuthenticate,
    UserController.login
  );

usersRouter.
  post('/logout',
    authenticated,
    UserController.logout
  );

usersRouter.
  put('/update',
    authenticated,
    validateUpdateUser,
    UserController.update
  );

usersRouter.
  delete('/delete',
    authenticated,
    validateDeleteUser,
    UserController.delete
  );