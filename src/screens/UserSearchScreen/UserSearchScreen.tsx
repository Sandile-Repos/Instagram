import React from 'react';
import {FlatList, ActivityIndicator} from 'react-native';
import UserListItem from '../../components/UserListItem';
import {useQuery} from '@apollo/client';
import {listUsers} from './queries';
import {ListUsersQuery, ListUsersQueryVariables} from '../../API';
import ApiErrorMessage from '../../components/ApiErrorMessage';

const UserSearchScreen = () => {
  const {data, loading, error, refetch} = useQuery<
    ListUsersQuery,
    ListUsersQueryVariables
  >(listUsers);

  if (loading) {
    return <ActivityIndicator size={'large'} />;
  }

  const users = (data?.listUsers?.items || []).filter(
    user => user && !user?._deleted,
  );

  if (error || !users) {
    return (
      <ApiErrorMessage
        title="Error fetching users"
        message={error?.message || 'User not found'}
        onRetry={() => refetch()}
      />
    );
  }
  return (
    <FlatList
      data={users}
      renderItem={({item}) => <UserListItem user={item} />}
      onRefresh={refetch}
      refreshing={loading}
    />
  );
};

export default UserSearchScreen;
