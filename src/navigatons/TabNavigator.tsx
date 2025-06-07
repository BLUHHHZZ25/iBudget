import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import { Icon } from '@rneui/themed';
import AnalysisScreen from '../screens/Analysis/AnalysisScreen';
import BudgetScreen from '../screens/Budget/BudgetScreen';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {


  function setIcon(iconName:any){
    const chosenIcon = iconName === 'Home' ? 'home-outline' :
    iconName === 'Settings' ? 'settings-outline' : 
    iconName === 'Analysis' ? 'podium-outline' : 
    iconName === 'Budget' ? 'wallet-outline' : 
    iconName === 'Categories' ? 'square-outline' : 
    iconName === 'Settings' ? 'apps-outline' :  'square-outline'

    return chosenIcon
  }

  return (
    <Tab.Navigator
    
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          // let iconName = route.name === 'Home' ? 'home-outline' : 'settings-outline';
          return <Icon type='ionicon' name={setIcon(route.name)} size={size} color={color} />;
        },
        tabBarItemStyle: {
          marginHorizontal: 10,  // space between icons horizontally
          paddingVertical: 5,    // vertical padding
        },
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{ headerShown: false}}
        />
      <Tab.Screen 
        name="Analysis" 
        component={AnalysisScreen}
        options={{ headerShown: false}}
        />
      <Tab.Screen 
        name="Budget" 
        component={BudgetScreen}
        options={{ headerShown: false}}
        />
      <Tab.Screen 
        name="Categories" 
        component={CategoriesScreen}
        options={{ headerShown: false}}
        />
      <Tab.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{ headerShown: false}}
      />
    </Tab.Navigator>
  );
}
