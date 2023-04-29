import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Starter: undefined;
};

export type StarterScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Starter'
>;
