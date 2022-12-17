export interface IUser {
  full_name: string;
  email: string;
  phone?: string;
  password: string;
}

export interface IUserUpdate {
  full_name?: string;
  email?: string;
  phone?: string;
  password: string;
}