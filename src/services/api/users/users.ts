import { BaseService } from '../base';
import type { UserResponse, UsersResponse } from '../../../types';

export class UsersService {
  static async getAllUsers(): Promise<UsersResponse | null> {
    return await BaseService.get<UsersResponse>('https://dummyjson.com/users');
  }

  static async getSingleUser(id: number): Promise<UserResponse | null> {
    return await BaseService.get<UserResponse>(`https://dummyjson.com/users/${id}`);
  }
}