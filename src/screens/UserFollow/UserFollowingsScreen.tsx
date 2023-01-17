import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import React from 'react';
import {useQuery} from '@apollo/client';
import {userFollowings} from './queries';
import {UserFollowingsQuery, UserFollowingsQueryVariables} from '../../API';
import ApiErrorMessage from '../../components/ApiErrorMessage';
import UserListItem from '../../components/UserListItem';

interface UserFollowersScreenProps {
  userId: string;
}

const UserFollowingsScreen = ({userId}: UserFollowersScreenProps) => {
  const {data, loading, error, refetch} = useQuery<
    UserFollowingsQuery,
    UserFollowingsQueryVariables
  >(userFollowings, {variables: {followerID: userId}});

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return (
      <ApiErrorMessage
        title="Error fectching Errors"
        message={error?.message}
      />
    );
  }
  // console.log(data);
  // const users = data?.userFollowings?.items?.filter(i => !i?._deleted) || [];
  const users =
    data?.userFollowings?.items
      ?.filter(i => !i?._deleted)
      .map(i => i?.Followee) || [];
  console.log(users);
  return (
    <FlatList
      data={users}
      renderItem={({item}) => <UserListItem user={item} />}
      onRefresh={() => refetch()}
      refreshing={loading}
    />
  );
};

export default UserFollowingsScreen;
