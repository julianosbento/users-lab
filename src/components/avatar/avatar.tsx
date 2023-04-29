import React from 'react';

import * as S from './styled';

export interface AvatarProps {
  source: string;
}

export function Avatar({ source }: AvatarProps) {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Image source={{ uri: source }} resizeMode='cover' />
      </S.Container>
    </S.Wrapper>
  );
}