import React from 'react';

import { FlatList, ListRenderItemInfo } from 'react-native';
import { User } from '../../types';
import { Item } from './item';

export interface ListProps { data: User[] };

export function List({ data }: ListProps) {
  function renderItem({ item }: ListRenderItemInfo<User>) {
    return (<Item data={item} />);
  }

  return (<FlatList data={data} keyExtractor={item => item.id.toString()} renderItem={renderItem} />);
}