import React from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import logo from '../assets/images/logo.png';

import CommentsScreen from '../screens/CommentsScreen/CommentsScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import PostUploadScreen from '../screens/PostUploadScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Feed"
        screenOptions={{headerShown: true}}>
        <Stack.Screen
          name="Feed"
          component={HomeScreen}
          options={{headerTitle: HeaderTitle, headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="UserProfile"
          component={ProfileScreen}
          options={{title: 'Profile'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HeaderTitle = () => {
  return (
    <Image
      source={logo}
      resizeMode="contain"
      style={{width: 150, height: 40}}
    />
  );
};

export default Navigation;
