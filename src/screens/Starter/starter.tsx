import React from 'react';
import { ScrollView, Text } from 'react-native';

import { useUsers } from '../../contexts/users';
import { StarterScreenProps } from '../../navigation/types';
import { List } from '../../components/list';


export function StarterScreen({ navigation }: StarterScreenProps) {
  const { users } = useUsers()

  return (
    <List data={users} />
  );
};
