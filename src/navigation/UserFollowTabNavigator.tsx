import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import colors from '../theme/colors';
import {
  UserFollowScreenProps,
  UserFollowTabNavigatorParamList,
} from '../types/navigation';
import {UserFollowers, UserFollowings} from '../screens/UserFollow';

const Tab = createMaterialTopTabNavigator<UserFollowTabNavigatorParamList>();

const UserFollowTabNavigator = ({route}: UserFollowScreenProps) => {
  const insets = useSafeAreaInsets(); //dynamically adding padding to the ios notch
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {paddingTop: insets.top},
        tabBarIndicatorStyle: {backgroundColor: colors.primary},
      }}>
      <Tab.Screen name="Followers">
        {props => <UserFollowers {...props} userId={route?.params?.id} />}
      </Tab.Screen>
      <Tab.Screen name="Followings">
        {props => <UserFollowings {...props} userId={route?.params?.id} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default UserFollowTabNavigator;
