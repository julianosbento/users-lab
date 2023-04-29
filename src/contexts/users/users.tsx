import { createContext, useContext, useEffect, useState } from 'react';
import { ViewProps } from 'react-native/types';
import { User } from '../../types';
import { USERS } from './constants';
import { getAllUsers } from './service';

const UsersContext = createContext({ users: USERS });

export function UsersProvider({ children }: ViewProps) {
  const [users, setUsers] = useState<User[]>(USERS)

  useEffect(() => {
    getAllUsers(setUsers);
  }, [])

  return (
    <UsersContext.Provider value={{ users }}>
      {children}
    </UsersContext.Provider>
  );
}

export function useUsers() {
  return useContext(UsersContext);
}
