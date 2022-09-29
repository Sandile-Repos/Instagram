import {useQuery} from '@apollo/client';
import {useRoute} from '@react-navigation/native';
import React from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {
  CommentsByPostQuery,
  CommentsByPostQueryVariables,
  ModelSortDirection,
} from '../../API';
import Comment from '../../components//Comment';
import ApiErrorMessage from '../../components/ApiErrorMessage';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import {CommentsRouteProp} from '../../types/navigation';
import Input from './Input';
import {commentsByPost} from './queries';

const CommentsScreen = () => {
  const route = useRoute<CommentsRouteProp>();
  const {postId} = route.params;

  const {data, loading, error} = useQuery<
    CommentsByPostQuery,
    CommentsByPostQueryVariables
  >(commentsByPost, {
    variables: {postID: postId, sortDirection: ModelSortDirection.DESC},
  });

  const comments = data?.commentsByPost?.items.filter(
    comment => !comment?._deleted,
  );

  if (loading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return (
      <ApiErrorMessage
        title="Fetching comments failed"
        message={error.message}
      />
    );
  }
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1}}>
      <FlatList
        data={comments}
        renderItem={({item}) => <Comment comment={item} includeDetails />}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{padding: 10}}
        inverted
        ListEmptyComponent={() => (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 300,
            }}>
            <Text
              style={{
                color: colors.primary,
                fontWeight: fonts.weight.bold,
                fontSize: fonts.size.default,
              }}>
              No comments. Be the first to comment
            </Text>
          </View>
        )} //The user will see this message if there are no comments
      />
      <Input postId={postId} />
    </View>
  );
};

export default CommentsScreen;
