import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CommentsScreen from '../screens/CommentsScreen/CommentsScreen';
import colors from '../theme/colors';
import {SearchTabNavigatorParamList} from '../types/navigation';
import UserSearchScreen from '../screens/UserSearchScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const Tab = createMaterialTopTabNavigator<SearchTabNavigatorParamList>();

const SearchTabNavigator = () => {
  const insets = useSafeAreaInsets(); //dynamically adding padding to the ios notch
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {paddingTop: insets.top},
        tabBarIndicatorStyle: {backgroundColor: colors.primary},
      }}>
      <Tab.Screen name="Users" component={UserSearchScreen} />
      <Tab.Screen name="Posts" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default SearchTabNavigator;
