import React from 'react';
import {LinkingOptions, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTabNavigator from './BottomTabNavigator';
import CommentsScreen from '../screens/CommentsScreen/CommentsScreen';
import {RootNavigatorParamList} from '../types/navigation';
import AuthStackNavigator from './AuthStackNavigator';

const Stack = createNativeStackNavigator<RootNavigatorParamList>();
const linking: LinkingOptions<RootNavigatorParamList> = {
  prefixes: ['instaphoto://', 'https://instaphoto.com'],
  config: {
    initialRouteName: 'Home',
    screens: {
      Comments: 'comments', //instaphoto://comments
      //instaphoto://user//123
      Home: {
        screens: {
          HomeStack: {
            initialRouteName: 'Feed',
            screens: {
              UserProfile: 'user/:userId',
            },
          },
        },
      },
    },
  },
};

const Navigation = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        initialRouteName="Auth"
        screenOptions={{headerShown: true}}>
        <Stack.Screen
          name="Auth"
          component={AuthStackNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Comments" component={CommentsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
