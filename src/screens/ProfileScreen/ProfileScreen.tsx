import React, {useState} from 'react';
import {Image, FlatList, Pressable, Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import user from '../../assets/data/user.json';
import ProfileHeader from './ProfileHeader';
import FeedGridView from '../../components/FeedGridView';
import {
  UserProfileNavigationProp,
  MyProfileNavigationProp,
  UserProfileRouteProp,
  MyProfileRouteProp,
} from '../../types/navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileScreen = () => {
  const [headerFixed, setHeaderFixed] = useState(true);
  const route = useRoute<UserProfileRouteProp | MyProfileRouteProp>();
  const navigation = useNavigation<
    UserProfileNavigationProp | MyProfileNavigationProp
  >();
  const userID = route.params?.userId;
  console.warn('userId', userID);

  // navigation.setOptions({title: userID});

  return (
    <View>
      <Pressable
        style={{position: 'absolute', right: 5, color: 'red', zIndex: 100}}
        onPress={() => setHeaderFixed(v => !v)}>
        <Ionicons
          name={headerFixed ? 'lock-closed-outline' : 'md-open-outline'}
          size={14}
          color="white"
          style={{
            position: 'absolute',
            right: 5,
            color: 'black',
          }}
        />
      </Pressable>
      {headerFixed && (
        <View>
          <ProfileHeader />
        </View>
      )}

      <FeedGridView
        data={user.posts}
        ListHeaderComponent={null} // scrollview /flatlist  doesn't work inside another scrollview if there in the same direction
      />
    </View>
  );
};
export default ProfileScreen;
