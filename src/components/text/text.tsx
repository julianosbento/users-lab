import React from 'react';
import { Text as RNText } from 'react-native';

import type { TextStyle } from 'react-native/types';

export interface TextProps extends TextStyle {
  value: string | number;
}

export function Text({ value, ...style }: TextProps) {
  return (
    <RNText style={style}>
      {value}
    </RNText>
  );
}