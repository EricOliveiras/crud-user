import { Response, NextFunction, Request } from 'express';
import { HttpException } from './../errors/HttpException';

export const authenticated = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new HttpException(400, 'Missing auth header');
  }
  
  const token = authHeader.split(' ')[1];
  
  if (req.session.singin) {
    req.user = {
      id: token
    };

    return next();
  } else {
    throw new HttpException(401, 'you are not logged');
  }
    
};
