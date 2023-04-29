import { User } from './user';

export interface UsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}

export type UserResponse = {
  user: User;
};
