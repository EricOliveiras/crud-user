import { HttpException } from '../../errors/HttpException';
import { UserRepository } from '../../repositories/user/UserRepository';

export const DeleteUser = async (id: string): Promise<void> => {
  const checkUserExist = await UserRepository.findOneById(id);

  if (!checkUserExist) {
    throw new HttpException(400, 'User not found!');
  };

  await UserRepository.delete(id);
};