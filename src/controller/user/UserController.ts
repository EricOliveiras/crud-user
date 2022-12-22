import { Request, Response } from "express";
import { IUser, IUserUpdate } from "../../interfaces/IUser";
import { CreateUser, UpdateUser, DeleteUser } from "../../services/user";
import { UserAuthenticate } from "../../services/user/UserAuthenticate";

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
    const id = req.user?.id as string;
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
    const id = req.user?.id as string;
    
    await DeleteUser(id);
    
    return res.sendStatus(200);
  },

  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const logged = await UserAuthenticate(email, password);
    req.session.singin = true;

    return res.status(200).json(logged);
  },

  async logout(req: Request, res: Response) {
    req.session.singin = false;

    return res.sendStatus(200);
  }
};