import React from 'react';

import { User } from '../../../types';
import * as S from './styled';
import { Avatar } from '../../avatar';
import { Text } from '../../text';

export interface ItemProps { data: User }

export function Item({ data }: ItemProps) {
  return (
    <S.Wrapper>
      <S.Row>
        <Avatar source={data.image} />
        <Text value={data.username} />
      </S.Row>
    </S.Wrapper>
  );
}