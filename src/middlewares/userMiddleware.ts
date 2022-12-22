import { Request, Response, NextFunction } from 'express';
import { HttpException } from '../errors/HttpException';
import validate from '../helpers/validator';

export const validateCreateUser = (req: Request, res: Response, next: NextFunction) => {
  const { full_name, email, password } = req.body;
  const missingData: string[] = [];

  if (!validate.isNotEmpty(full_name)) {
    missingData.push('full_name');
  }

  if (!validate.isNotEmpty(email)) {
    missingData.push('email');
  }

  if (!validate.isNotEmpty(password)) {
    missingData.push('password');
  }

  if (missingData.length > 0) {
    throw new HttpException(
      400,
      `Missing required fields: ${missingData.join(', ')}`,
    );
  }

  const invalidData: string[] = [];

  if (!validate.isString(full_name)) {
    invalidData.push('full_name must be a string');
  }

  if (!validate.email(email)) {
    invalidData.push('email invalid format');
  }

  if (!validate.isString(password)) {
    invalidData.push('password must be a string');
  }

  if (!validate.contentLengthLimit(password, { min: 6 })) {
    invalidData.push('password length invalid');
  }

  if (invalidData.length > 0) {
    throw new HttpException(400, `Invalid fields: ${invalidData.join(', ')}`);
  }

  next();
};

export const validateUpdateUser =  (req: Request, res: Response, next: NextFunction) => {
  const id = req.user?.id as string;
  const { full_name, email, password } = req.body;
  const missingData: string[] = [];

  if (!validate.isNotEmpty(id)) {
    missingData.push('id');
  }

  if (missingData.length > 0) {
    throw new HttpException(
      400,
      `Missing required fields: ${missingData.join(', ')}`,
    );
  }

  const invalidData = [];

  if (!validate.isString(id)) {
    invalidData.push('id must be a string');
  }

  if (full_name) {
    if (!validate.isString(full_name)) invalidData.push('full_name: full_name must be a string');
  }

  if (email) {
    if (!validate.isString(email)) invalidData.push('email must be a string');
    if (!validate.email(email)) invalidData.push('email invalid format');
  }

  if (password) {
    if (!validate.isString(password)) invalidData.push('password must be a string');
    if (!!validate.contentLengthLimit(password, { min: 6 })) invalidData.push('password length invalid');
  }

  if (invalidData.length > 0) {
    throw new HttpException(400, `Invalid fields: ${invalidData.join(', ')}`);
  }

  next();
};

export const validateDeleteUser =  (req: Request, res: Response, next: NextFunction) => {
  const id = req.user?.id as string;
  const missingData: string[] = [];

  if (!validate.isNotEmpty(id)) {
    missingData.push('id');
  }

  if (missingData.length > 0) {
    throw new HttpException(
      400,
      `Missing required fields: ${missingData.join(', ')}`,
    );
  }

  const invalidData = [];

  if (!validate.isString(id)) {
    invalidData.push('id must be a string');
  }

  if (invalidData.length > 0) {
    throw new HttpException(400, `Invalid fields: ${invalidData.join(', ')}`);
  }

  next();
};

export const validateAuthenticate = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  const missingData: string[] = [];

  if (!validate.isNotEmpty(email)) {
    missingData.push('id');
  }

  if (!validate.isNotEmpty(password)) {
    missingData.push('password');
  }

  if (missingData.length > 0) {
    throw new HttpException(
      400,
      `Missing required fields: ${missingData.join(', ')}`,
    );
  }

  const invalidData = [];

  if (!validate.email(email)) {
    invalidData.push('Email format invalid');
  }

  if (!validate.isString(email)) {
    invalidData.push('Email must be a string');
  }

  if (!validate.isString(password)) {
    invalidData.push('Password must be a string');
  }

  if (invalidData.length > 0) {
    throw new HttpException(400, `Invalid fields: ${invalidData.join(', ')}`);
  }

  next();
};