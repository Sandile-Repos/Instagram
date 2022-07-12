import {Image, FlatList} from 'react-native';
import React from 'react';

import user from '../../assets/data/user.json';
import ProfileHeader from './ProfileHeader';
import FeedGridView from '../../components/FeedGridView';

const ProfileScreen = () => {
  return (
    <FeedGridView
      data={user.posts}
      ListHeaderComponent={ProfileHeader} // scrollview /flatlist  doesn't work inside another scrollview if there in the same direction
    />
  );
};
export default ProfileScreen;
