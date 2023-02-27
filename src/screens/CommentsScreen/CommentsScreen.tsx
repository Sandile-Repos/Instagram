import {useQuery, useSubscription} from '@apollo/client';
import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {
  Comment as CommentType,
  CommentsByPostQuery,
  CommentsByPostQueryVariables,
  ModelSortDirection,
  OnCreateCommentByPostIdSubscription,
  OnCreateCommentByPostIdSubscriptionVariables,
} from '../../API';
import Comment from '../../components//Comment';
import ApiErrorMessage from '../../components/ApiErrorMessage';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import {CommentsRouteProp} from '../../types/navigation';
import Input from './Input';
import {commentsByPost, onCreateCommentByPostId} from './queries';

const CommentsScreen = () => {
  const route = useRoute<CommentsRouteProp>();
  const {postId} = route.params;
  const [newComments, setNewComments] = useState<CommentType[]>([]);

  const {data, loading, error, fetchMore, refetch, subscribeToMore} = useQuery<
    CommentsByPostQuery,
    CommentsByPostQueryVariables
  >(commentsByPost, {
    variables: {
      postID: postId,
      sortDirection: ModelSortDirection.DESC,
      limit: 20,
    },
  });
  const {data: newCommentsData} = useSubscription<
    OnCreateCommentByPostIdSubscription,
    OnCreateCommentByPostIdSubscriptionVariables
  >(onCreateCommentByPostId, {variables: {postID: postId}});

  // console.log(newCommentsData);

  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const comments =
    data?.commentsByPost?.items.filter(comment => !comment?._deleted) || [];

  const nextToken = data?.commentsByPost?.nextToken;

  useEffect(() => {
    if (newCommentsData?.onCreateCommentByPostId) {
      try {
        setNewComments(existingNewComments => [
          newCommentsData?.onCreateCommentByPostId as CommentType,
          ...existingNewComments,
        ]);
      } catch (er) {
        console.log(er);
      }
    }
  }, [newCommentsData]);

  // useEffect(() => {
  //   if (!subscribeToMore) {
  //     return;
  //   }
  //   subscribeToMore({
  //     document: onCreateCommentByPostId,
  //     variables: {postID: postId},
  //     updateQuery: (prev, {subscriptionData}) => {
  //       if (!subscriptionData.data) {
  //         return prev;
  //       }
  //       const newFeedItem = subscriptionData.data.onCreateCommentByPostId;
  //       return Object.assign({}, prev, {
  //         commentsByPost: {
  //           items: [newFeedItem],
  //         },
  //       });
  //     },
  //     //   updateQuery: (
  //     //     prev = {
  //     //       onCreateCommentByPostId: undefined,
  //     //     },
  //     //     {subscriptionData},
  //     //   ) => {
  //     //     if (!subscriptionData.data) {
  //     //       return prev;
  //     //     }
  //     //     console.log('hello prev', prev);
  //     //     return {
  //     //       commentsByPost: {
  //     //         // ...prev?.commentsByPost,
  //     //         items: [
  //     //           ...[prev?.commentsByPost],
  //     //           subscriptionData.data.onCreateCommentByPostId,
  //     //         ],
  //     //       },
  //     //     };
  //     //   },
  //   });
  // }, [subscribeToMore, postId]);

  const loadMore = async () => {
    if (!nextToken || isFetchingMore) {
      return;
    }
    try {
      setIsFetchingMore(true); // to prevent fetching more if we already fetching and awaiting
      await fetchMore({variables: {nextToken}});
      setIsFetchingMore(false);
    } catch (er) {
      console.log(er);
    }
  };

  const isNewComment = (comment: CommentType) => {
    return newComments.some(c => c.id === comment.id); // does the newComment array have id comment equal to the one we searching for
  };

  if (loading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return (
      <ApiErrorMessage
        title="Fetching comments failed"
        message={error.message}
        onRetry={() => refetch()}
      />
    );
  }
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1}}>
      <FlatList
        data={[...newComments, ...comments]}
        renderItem={({item}) =>
          item && (
            <Comment comment={item} includeDetails isNew={isNewComment(item)} />
          )
        }
        // eslint-disable-next-line react-native/no-inline-styles
        style={{padding: 10}}
        inverted
        ListEmptyComponent={() => (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 300,
              transform: [{scaleY: -1}],
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
        onEndReached={() => loadMore()}
      />

      <Input postId={postId} />
    </View>
  );
};

export default CommentsScreen;
