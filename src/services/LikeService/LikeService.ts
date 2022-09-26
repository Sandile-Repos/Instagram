import {useMutation, useQuery} from '@apollo/client';
import {
  Post,
  CreateLikeMutation,
  CreateLikeMutationVariables,
  DeleteLikeMutation,
  DeleteLikeMutationVariables,
  UpdatePostMutation,
  UpdatePostMutationVariables,
  LikesForPostByUserQuery,
  LikesForPostByUserQueryVariables,
} from '../../API';
import {useAuthContext} from '../../contexts/AuthContext';
import {
  updatePost,
  createLike,
  deleteLike,
  likesForPostByUser,
} from './queries';

const useLikeService = (post: Post) => {
  const {userId} = useAuthContext();

  const {data: usersLikeData} = useQuery<
    LikesForPostByUserQuery,
    LikesForPostByUserQueryVariables
  >(likesForPostByUser, {variables: {postID: post.id, userID: {eq: userId}}});

  const [doUpdatePost] = useMutation<
    UpdatePostMutation,
    UpdatePostMutationVariables
  >(updatePost);

  const [doCreateLike] = useMutation<
    CreateLikeMutation,
    CreateLikeMutationVariables
  >(createLike, {
    variables: {input: {userID: userId, postID: post.id}},
    refetchQueries: ['LikesForPostByUser'],
  });

  const [doDeleteLike] = useMutation<
    DeleteLikeMutation,
    DeleteLikeMutationVariables
  >(deleteLike);

  const userLike = (usersLikeData?.LikesForPostByUser?.items || []).filter(
    like => !like?._deleted,
  )?.[0];

  const incrementNoLikes = (amount: 1 | -1) => {
    doUpdatePost({
      variables: {
        input: {
          id: post.id,
          _version: post._version,
          noOfLikes: post.noOfLikes + amount,
        },
      },
    });
  };

  const onAddLike = () => {
    doCreateLike();
    incrementNoLikes(1);
  };
  const onDeleteLike = () => {
    // if (userLike) {
    //   doDeleteLike({
    //     variables: {input: {id: userLike.id, _version: userLike._version}},
    //   });
    //   incrementNoLikes(-1);
    // }

    if (!userLike) {
      return;
    }
    doDeleteLike({
      variables: {input: {id: userLike.id, _version: userLike._version}},
    });
    incrementNoLikes(-1);
  };

  const toggleLike = () => {
    if (userLike) {
      onDeleteLike();
    } else {
      onAddLike();
    }
  };

  return {toggleLike, isLiked: !!userLike};
};
export default useLikeService;
