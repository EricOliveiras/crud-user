import { compareSync } from 'bcrypt';
import { UserRepository } from '../../repositories/user/UserRepository';
import { HttpException } from '../../errors/HttpException';

export const UserAuthenticate = async (email: string, password: string) => {
  const user = await UserRepository.findOneByEmail(email);

  if (!user || !compareSync(password, user.password)) {
    throw new HttpException(401, 'Email or password incorrect');
  }

  return { 
    id: user.id 
  };
};