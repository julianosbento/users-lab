// In App.js in a new project

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StarterScreen } from '../screens';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

export function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Starter" component={StarterScreen} options={{ title: 'Usuários' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
