import {useMutation, useQuery} from '@apollo/client';
import {Alert} from 'react-native';
import {
  UpdatePostMutation,
  UpdatePostMutationVariables,
  CreateCommentMutation,
  CreateCommentMutationVariables,
  GetPostQuery,
  GetPostQueryVariables,
  CreateNotificationMutation,
  CreateNotificationMutationVariables,
} from '../../API';
import {useAuthContext} from '../../contexts/AuthContext';
import {NotificationTypes} from '../../models';
import {
  updatePost,
  createComment,
  getPost,
  createNotification,
} from './queries';

const useCommentsService = (postId: string) => {
  const {userId} = useAuthContext();
  const [doUpdatePost] = useMutation<
    UpdatePostMutation,
    UpdatePostMutationVariables
  >(updatePost);

  const [doCreateComment] = useMutation<
    CreateCommentMutation,
    CreateCommentMutationVariables
  >(createComment);

  const {data: postData} = useQuery<GetPostQuery, GetPostQueryVariables>(
    getPost,
    {
      variables: {id: postId},
    },
  );

  const post = postData?.getPost;

  // Notification Mutation
  const [doCreateNotification] = useMutation<
    CreateNotificationMutation,
    CreateNotificationMutationVariables
  >(createNotification);

  const incrementNoComments = async (amount: 1 | -1) => {
    if (!post) {
      Alert.alert('Failed to load post. Try again later');
      return;
    }
    try {
      await doUpdatePost({
        variables: {
          input: {
            id: post.id,
            _version: post._version,
            noOfComments: post.noOfComments + amount,
          },
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onCreateComment = async (newComment: string) => {
    try {
      if (!post) {
        Alert.alert('Failed to fetch post. Try again later');
        return;
      }
      if (newComment === '') {
        Alert.alert('Please write a comment before posting');
        return;
      }
      await doCreateComment({
        variables: {
          input: {
            comment: newComment,
            userID: userId,
            postID: post.id,
          },
        },
      });

      await doCreateNotification({
        variables: {
          input: {
            type: NotificationTypes.NEW_COMMENT,
            userID: post.userID,
            actorId: userId,
            notificationPostId: post.id, // For every hasone amplify would create an id similar to actorId. notification(1st table)Post(2nd table)id. Can be found in API.ts createNotificationInput
            // notificationCommentId: commentID //to redirect to post comment and also highlight the post comment. You would also need to add #Comment: Comment @hasOne in Notification schema to create a connection
            readAt: 0,
          },
        },
      });
      incrementNoComments(1);
    } catch (e) {
      Alert.alert('Error submitting the comment', (e as Error).message);
    }
  };

  return {onCreateComment};
};
export default useCommentsService;
