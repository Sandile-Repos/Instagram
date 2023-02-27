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
  CreateNotificationMutationVariables,
  CreateNotificationMutation,
} from '../../API';
import {useAuthContext} from '../../contexts/AuthContext';
import {NotificationTypes} from '../../models';
import {
  updatePost,
  createLike,
  deleteLike,
  likesForPostByUser,
  createNotification,
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

  // Notification Mutation
  const [doCreateNotification] = useMutation<
    CreateNotificationMutation,
    CreateNotificationMutationVariables
  >(createNotification, {
    variables: {
      input: {
        type: NotificationTypes.NEW_LIKE,
        userID: post.userID,
        actorId: userId,
        notificationPostId: post.id, // For every hasone amplify would create an id similar tp actorId. notification(1st table)Post(2nd table)id. Can be found in API.ts createNotificationInput
        readAt: 0,
      },
    },
  });

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

  const onAddLike = async () => {
    doCreateLike();
    await doCreateNotification();
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
