import * as dotenv from 'dotenv';

dotenv.config();

export const port = process.env.PORT || 3333;
export const secret = process.env.secret as string;