import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import React from 'react';
import {useQuery} from '@apollo/client';
import {likesForPostByUser} from './queries';
import {
  LikesForPostByUserQuery,
  LikesForPostByUserQueryVariables,
} from '../../API';
import ApiErrorMessage from '../../components/ApiErrorMessage';
import {useRoute} from '@react-navigation/native';
import {PostLikesRouteProp} from '../../types/navigation';
import UserListItem from '../../components/UserListItem';

const PostLikesScreen = () => {
  const route = useRoute<PostLikesRouteProp>();
  const {id} = route.params;

  const {data, loading, error, refetch} = useQuery<
    LikesForPostByUserQuery,
    LikesForPostByUserQueryVariables
  >(likesForPostByUser, {variables: {postID: id}});

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return (
      <ApiErrorMessage title="Error fectching likes" message={error?.message} />
    );
  }

  const likes =
    data?.LikesForPostByUser?.items.filter(like => !like?._deleted) || [];
  return (
    <FlatList
      data={likes}
      renderItem={({item}) => <UserListItem user={item?.User} />}
      refreshing={loading}
      onRefresh={refetch}
    />
  );
};

export default PostLikesScreen;
