import React from 'react';
import {Image, FlatList} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import user from '../../assets/data/user.json';
import ProfileHeader from './ProfileHeader';
import FeedGridView from '../../components/FeedGridView';

const ProfileScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const userID = route.params?.userId;

  // navigation.setOptions({title: userID});

  return (
    <FeedGridView
      data={user.posts}
      ListHeaderComponent={ProfileHeader} // scrollview /flatlist  doesn't work inside another scrollview if there in the same direction
    />
  );
};
export default ProfileScreen;
