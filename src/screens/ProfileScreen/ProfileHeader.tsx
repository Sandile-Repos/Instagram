import {Text, View, ScrollView, Alert} from 'react-native';
import React, {useEffect} from 'react';
import {Auth, input} from 'aws-amplify';

import styles from './styles';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {ProfileNavigationProp} from '../../types/navigation';
import {
  CreateUserFollowMutation,
  CreateUserFollowMutationVariables,
  DeleteUserFollowMutation,
  DeleteUserFollowMutationVariables,
  User,
  UserFollowingsQuery,
  UserFollowingsQueryVariables,
} from '../../API';
import {useAuthContext} from '../../contexts/AuthContext';
import UserImage from '../../components/UserImage';
import {createUserFollow, userFollowings, deleteUserFollow} from './queries';
import {useMutation, useQuery} from '@apollo/client';

interface IProfileHeader {
  user: User;
}

const ProfileHeader = ({user}: IProfileHeader) => {
  const navigation = useNavigation<ProfileNavigationProp>();
  const {userId} = useAuthContext();

  const {data: userFollowingsData} = useQuery<
    UserFollowingsQuery,
    UserFollowingsQueryVariables
  >(userFollowings, {
    variables: {followerID: userId, followeeID: {eq: user.id}},
  });

  const [doFollow] = useMutation<
    CreateUserFollowMutation,
    CreateUserFollowMutationVariables
  >(createUserFollow, {
    variables: {input: {followeeID: user.id, followerID: userId}},
    refetchQueries: ['UserFollowings'],
  });

  const [doUnFollow] = useMutation<
    DeleteUserFollowMutation,
    DeleteUserFollowMutationVariables
  >(deleteUserFollow);

  useEffect(() => {
    navigation.setOptions({title: user?.username || 'Profile}'});
  }, [navigation, user]);

  console.log(userFollowingsData);
  const userFollowObject = userFollowingsData?.userFollowings?.items?.filter(
    items => !items?._deleted,
  )[0];

  const onFollowPress = async () => {
    if (userFollowObject) {
      try {
        // Delete it
        await doUnFollow({
          variables: {
            input: {
              id: userFollowObject.id,
              _version: userFollowObject._version,
            },
          },
        });
      } catch (error) {
        Alert.alert('Failed to unFollow the user', (error as Error).message);
      }
    } else {
      try {
        // Create it
        await doFollow();
      } catch (error) {
        Alert.alert('Failed to follow the user', (error as Error).message);
      }
    }
  };

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
      {userId === user.id ? (
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
      ) : (
        <Button
          text={userFollowObject ? 'UnFollow' : 'Follow'}
          onPress={onFollowPress}
          inline
        />
      )}
    </ScrollView>
  );
};

export default ProfileHeader;
