import { Dispatch, SetStateAction } from 'react';
import { UsersService } from '../../services';
import { User } from '../../types';

export async function getAllUsers(setUsers: Dispatch<SetStateAction<User[]>>) {
  const response = await UsersService.getAllUsers();

  if (response?.users) setUsers(response?.users);
}
