// RootNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import AppNavigator from './AppNavigator';
import { Text } from 'react-native';

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  )
}
