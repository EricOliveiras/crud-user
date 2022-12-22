import { hash } from 'bcrypt';
import { IUser } from '../../interfaces/IUser';
import { UserRepository } from '../../repositories/user/UserRepository';
import { HttpException } from '../../errors/HttpException';

export const CreateUser = async ({ full_name, email, password, phone }: IUser): Promise<void> => {
  const checkUserExist = await UserRepository.findOneByEmail(email);

  if (checkUserExist) {
    throw new HttpException(400, 'User alreay exists!');
  };

  const hashPassword = await hash(password, 10);

  await UserRepository.create({
    full_name: full_name,
    email: email,
    password: hashPassword,
    phone: phone
  });
};
