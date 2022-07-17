import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import CommentsScreen from '../screens/CommentsScreen/CommentsScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import PostUploadScreen from '../screens/PostUploadScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Navigation = () => {
  return (
    <NavigationContainer>
      <HomeScreen />
      {/* <CommentsScreen />
      <ProfileScreen />
      <EditProfileScreen />
      <PostUploadScreen /> */}
    </NavigationContainer>
  );
};

export default Navigation;
