import {ActivityIndicator, FlatList} from 'react-native';
import React from 'react';
import {useQuery} from '@apollo/client';
import {UserFollowersQuery, UserFollowersQueryVariables} from '../../API';
import {userFollowers} from './queries';
import ApiErrorMessage from '../../components/ApiErrorMessage';
import UserListItem from '../../components/UserListItem';

interface UserFollowingsScreenProps {
  userId: string;
}

const UserFollowersScreen = ({userId}: UserFollowingsScreenProps) => {
  const {data, loading, error, refetch} = useQuery<
    UserFollowersQuery,
    UserFollowersQueryVariables
  >(userFollowers, {variables: {followeeID: userId}}); //followeeID is the person who is being followed

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
  const users =
    data?.userFollowers?.items
      ?.filter(i => !i?._deleted)
      .map(i => i?.Follower) || [];
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

export default UserFollowersScreen;
