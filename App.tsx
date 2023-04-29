import React from 'react';
import { UsersProvider } from './src/contexts/users';
import { AppStack } from './src/navigation';

export default function App() {
  return (
    <UsersProvider>
      <AppStack />
    </UsersProvider>
  )
}
