import { Request, Response } from "express";
import { IUser, IUserUpdate } from "../../interfaces/IUser";
import { CreateUser, UpdateUser, DeleteUser } from "../../services/user";

export const UserController = {
  async create(req: Request, res: Response) {
    const { full_name, email, password, phone }: IUser = req.body;

    await CreateUser({
      full_name,
      email,
      password,
      phone
    });

    return res.sendStatus(201);
  },

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { full_name, email, phone, password }: IUserUpdate = req.body;

    await UpdateUser(id, {
      full_name,
      email,
      phone, 
      password
    });

    return res.sendStatus(200);
  },
  
  async delete(req: Request, res: Response) {
    const { id } = req.params;
    
    await DeleteUser(id);
    
    return res.sendStatus(200);
  }
};