import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login/LoginScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import TabNavigator from './TabNavigator';

export type AppStackParamList = {
  HomeScreen: undefined;
  LoginScreen: undefined;
  TabNavigator: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export default function AppNavigator() {

  console.log('LoginScreen:', LoginScreen);
console.log('HomeScreen:', HomeScreen);

  return (
    <Stack.Navigator initialRouteName='TabNavigator' screenOptions={{headerShown: false}}>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}
