export interface IUser {
  full_name: string;
  email: string;
  phone?: string;
}

export interface IUserUpdate {
  full_name?: string;
  email?: string;
  phone?: string;
}