import { IUser, IUserUpdate } from '../../interfaces/IUser';
import { prisma as db } from '../../prismaService/prisma';

export const UserRepository = {
  async create(User: IUser) {
    await db.user.create({
      data: User
    })
  },

  async findAll() {
    return await db.user.findMany({
      select: {
        id: true,
        full_name: true,
        email: true,
        phone: true,
        created_at: true,
        updated_at: true
      }
    });
  },

  async findOneByEmail(email: string) {
    return await db.user.findUnique({
      where: { 
        email: email 
      }
    })
  },

  async findOneById(id: string) {
    return await db.user.findUnique({
      where: { 
        id: id 
      }
    })
  },

  async update(id: string, { full_name, email, phone, password }: IUserUpdate) {
    await db.user.update({
      where: {
        id: id
      },
      data: {
        full_name,
        email,
        phone,
        password
      }
    })
  },

  async delete(id: string) {
    await db.user.delete({
      where: {
        id: id
      }
    })
  }
}