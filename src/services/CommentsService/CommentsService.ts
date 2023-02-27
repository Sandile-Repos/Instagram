import {useMutation, useQuery} from '@apollo/client';
import {Alert} from 'react-native';
import {
  UpdatePostMutation,
  UpdatePostMutationVariables,
  CreateCommentMutation,
  CreateCommentMutationVariables,
  GetPostQuery,
  GetPostQueryVariables,
} from '../../API';
import {useAuthContext} from '../../contexts/AuthContext';
import {updatePost, createComment, getPost} from './queries';

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
      incrementNoComments(1);
    } catch (e) {
      Alert.alert('Error submitting the comment', (e as Error).message);
    }
  };

  return {onCreateComment};
};
export default useCommentsService;
