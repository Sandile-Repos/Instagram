import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: true}}>
        <Stack.Screen
          name="Home"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="UserProfile"
          component={ProfileScreen}
          options={{title: 'Profile'}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
