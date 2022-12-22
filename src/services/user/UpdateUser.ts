import { hash } from 'bcrypt';
import { HttpException } from '../../errors/HttpException';
import { IUserUpdate } from '../../interfaces/IUser';
import { UserRepository } from '../../repositories/user/UserRepository';

export const UpdateUser = async (id: string, { full_name, email, phone, password }: IUserUpdate): Promise<void> => {
  const checkUserExist = await UserRepository.findOneById(id);

  if (!checkUserExist) {
    throw new HttpException(400, 'User not found!');
  };

  let newPassword = password;

  if (newPassword) {
    newPassword = await hash(password as string, 10);
  }

  await UserRepository.update(id, {
    full_name,
    email,
    phone,
    password: newPassword
  });
};