import {Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Auth} from 'aws-amplify';

import styles from './styles';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {ProfileNavigationProp} from '../../types/navigation';
import {User} from '../../API';
import {useAuthContext} from '../../contexts/AuthContext';
import UserImage from '../../components/UserImage';

interface IProfileHeader {
  user: User;
}

const ProfileHeader = ({user}: IProfileHeader) => {
  const navigation = useNavigation<ProfileNavigationProp>();
  const {userId} = useAuthContext();

  navigation.setOptions({title: user?.username || 'Profile}'});
  return (
    <ScrollView style={styles.root}>
      <View style={styles.headerRow}>
        <UserImage imageKey={user.image} width={100} />
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>{user.noOfPosts}</Text>
          <Text>Posts</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>{user.noOfFollowers}</Text>
          <Text>Followers</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>{user.noOfFollowing}</Text>
          <Text>Following</Text>
        </View>
      </View>
      <Text style={styles.name}>{user.name}</Text>
      <Text>{user.bio}</Text>
      {/* {Buttons} */}
      {userId === user.id && (
        <View style={{flexDirection: 'row'}}>
          <Button
            text="Edit Profile"
            onPress={() => navigation.navigate('Edit Profile')}
            inline={true}
          />
          <Button
            text="Sign Out"
            onPress={() => Auth.signOut()}
            inline={true}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default ProfileHeader;
