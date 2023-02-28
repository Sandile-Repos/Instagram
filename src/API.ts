/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateLikeInput = {
  id?: string | null;
  userID: string;
  postID: string;
  _version?: number | null;
};

export type ModelLikeConditionInput = {
  userID?: ModelIDInput | null;
  postID?: ModelIDInput | null;
  and?: Array<ModelLikeConditionInput | null> | null;
  or?: Array<ModelLikeConditionInput | null> | null;
  not?: ModelLikeConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = 'binary',
  binarySet = 'binarySet',
  bool = 'bool',
  list = 'list',
  map = 'map',
  number = 'number',
  numberSet = 'numberSet',
  string = 'string',
  stringSet = 'stringSet',
  _null = '_null',
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Like = {
  __typename: 'Like';
  id: string;
  userID: string;
  postID: string;
  User?: User | null;
  Post?: Post | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type User = {
  __typename: 'User';
  id: string;
  name: string;
  email?: string | null;
  username?: string | null;
  bio?: string | null;
  image?: string | null;
  website?: string | null;
  noOfPosts: number;
  noOfFollowers: number;
  noOfFollowing: number;
  Posts?: ModelPostConnection | null;
  Comments?: ModelCommentConnection | null;
  Likes?: ModelLikeConnection | null;
  Followers?: ModelUserFollowConnection | null;
  Followings?: ModelUserFollowConnection | null;
  fcmToken?: string | null;
  Notifications?: ModelNotificationConnection | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type ModelPostConnection = {
  __typename: 'ModelPostConnection';
  items: Array<Post | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type Post = {
  __typename: 'Post';
  id: string;
  createdAt: string;
  type: string;
  description?: string | null;
  location?: string | null;
  video?: string | null;
  image?: string | null;
  images?: Array<string> | null;
  noOfComments: number;
  noOfLikes: number;
  userID: string;
  User?: User | null;
  Comments?: ModelCommentConnection | null;
  Likes?: ModelLikeConnection | null;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type ModelCommentConnection = {
  __typename: 'ModelCommentConnection';
  items: Array<Comment | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type Comment = {
  __typename: 'Comment';
  id: string;
  comment: string;
  createdAt: string;
  userID: string;
  postID: string;
  User?: User | null;
  Post?: Post | null;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type ModelLikeConnection = {
  __typename: 'ModelLikeConnection';
  items: Array<Like | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelUserFollowConnection = {
  __typename: 'ModelUserFollowConnection';
  items: Array<UserFollow | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type UserFollow = {
  __typename: 'UserFollow';
  id: string;
  followerID: string;
  followeeID: string;
  Follower?: User | null;
  Followee?: User | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type ModelNotificationConnection = {
  __typename: 'ModelNotificationConnection';
  items: Array<Notification | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type Notification = {
  __typename: 'Notification';
  id: string;
  createdAt: string;
  readAt: number;
  type: NotificationTypes;
  userID: string;
  User?: User | null;
  actorId: string;
  Actor?: User | null;
  Post?: Post | null;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  notificationPostId?: string | null;
};

export enum NotificationTypes {
  NEW_FOLLOWER = 'NEW_FOLLOWER',
  NEW_LIKE = 'NEW_LIKE',
  NEW_COMMENT = 'NEW_COMMENT',
}

export type UpdateLikeInput = {
  id: string;
  userID?: string | null;
  postID?: string | null;
  _version?: number | null;
};

export type DeleteLikeInput = {
  id: string;
  _version?: number | null;
};

export type CreateCommentInput = {
  id?: string | null;
  comment: string;
  createdAt?: string | null;
  userID: string;
  postID: string;
  _version?: number | null;
};

export type ModelCommentConditionInput = {
  comment?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  userID?: ModelIDInput | null;
  postID?: ModelIDInput | null;
  and?: Array<ModelCommentConditionInput | null> | null;
  or?: Array<ModelCommentConditionInput | null> | null;
  not?: ModelCommentConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateCommentInput = {
  id: string;
  comment?: string | null;
  createdAt?: string | null;
  userID?: string | null;
  postID?: string | null;
  _version?: number | null;
};

export type DeleteCommentInput = {
  id: string;
  _version?: number | null;
};

export type CreatePostInput = {
  id?: string | null;
  createdAt?: string | null;
  type: string;
  description?: string | null;
  location?: string | null;
  video?: string | null;
  image?: string | null;
  images?: Array<string> | null;
  noOfComments: number;
  noOfLikes: number;
  userID: string;
  _version?: number | null;
};

export type ModelPostConditionInput = {
  createdAt?: ModelStringInput | null;
  type?: ModelStringInput | null;
  description?: ModelStringInput | null;
  location?: ModelStringInput | null;
  video?: ModelStringInput | null;
  image?: ModelStringInput | null;
  images?: ModelStringInput | null;
  noOfComments?: ModelIntInput | null;
  noOfLikes?: ModelIntInput | null;
  userID?: ModelIDInput | null;
  and?: Array<ModelPostConditionInput | null> | null;
  or?: Array<ModelPostConditionInput | null> | null;
  not?: ModelPostConditionInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdatePostInput = {
  id: string;
  createdAt?: string | null;
  type?: string | null;
  description?: string | null;
  location?: string | null;
  video?: string | null;
  image?: string | null;
  images?: Array<string> | null;
  noOfComments?: number | null;
  noOfLikes?: number | null;
  userID?: string | null;
  _version?: number | null;
};

export type DeletePostInput = {
  id: string;
  _version?: number | null;
};

export type CreateUserInput = {
  id?: string | null;
  name: string;
  email?: string | null;
  username?: string | null;
  bio?: string | null;
  image?: string | null;
  website?: string | null;
  noOfPosts: number;
  noOfFollowers: number;
  noOfFollowing: number;
  fcmToken?: string | null;
  _version?: number | null;
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  username?: ModelStringInput | null;
  bio?: ModelStringInput | null;
  image?: ModelStringInput | null;
  website?: ModelStringInput | null;
  noOfPosts?: ModelIntInput | null;
  noOfFollowers?: ModelIntInput | null;
  noOfFollowing?: ModelIntInput | null;
  fcmToken?: ModelStringInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
};

export type UpdateUserInput = {
  id: string;
  name?: string | null;
  email?: string | null;
  username?: string | null;
  bio?: string | null;
  image?: string | null;
  website?: string | null;
  noOfPosts?: number | null;
  noOfFollowers?: number | null;
  noOfFollowing?: number | null;
  fcmToken?: string | null;
  _version?: number | null;
};

export type DeleteUserInput = {
  id: string;
  _version?: number | null;
};

export type CreateUserFollowInput = {
  id?: string | null;
  followerID: string;
  followeeID: string;
  _version?: number | null;
};

export type ModelUserFollowConditionInput = {
  followerID?: ModelIDInput | null;
  followeeID?: ModelIDInput | null;
  and?: Array<ModelUserFollowConditionInput | null> | null;
  or?: Array<ModelUserFollowConditionInput | null> | null;
  not?: ModelUserFollowConditionInput | null;
};

export type UpdateUserFollowInput = {
  id: string;
  followerID?: string | null;
  followeeID?: string | null;
  _version?: number | null;
};

export type DeleteUserFollowInput = {
  id: string;
  _version?: number | null;
};

export type CreateUserFeedPostInput = {
  id?: string | null;
  userID: string;
  postID: string;
  postCreatedAt: string;
  postOwnerID: string;
  _version?: number | null;
};

export type ModelUserFeedPostConditionInput = {
  userID?: ModelIDInput | null;
  postID?: ModelIDInput | null;
  postCreatedAt?: ModelStringInput | null;
  postOwnerID?: ModelIDInput | null;
  and?: Array<ModelUserFeedPostConditionInput | null> | null;
  or?: Array<ModelUserFeedPostConditionInput | null> | null;
  not?: ModelUserFeedPostConditionInput | null;
};

export type UserFeedPost = {
  __typename: 'UserFeedPost';
  id: string;
  userID: string;
  postID: string;
  postCreatedAt: string;
  postOwnerID: string;
  Post?: Post | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  owner?: string | null;
};

export type UpdateUserFeedPostInput = {
  id: string;
  userID?: string | null;
  postID?: string | null;
  postCreatedAt?: string | null;
  postOwnerID?: string | null;
  _version?: number | null;
};

export type DeleteUserFeedPostInput = {
  id: string;
  _version?: number | null;
};

export type CreateNotificationInput = {
  id?: string | null;
  createdAt?: string | null;
  readAt: number;
  type: NotificationTypes;
  userID: string;
  actorId: string;
  _version?: number | null;
  notificationPostId?: string | null;
};

export type ModelNotificationConditionInput = {
  createdAt?: ModelStringInput | null;
  readAt?: ModelIntInput | null;
  type?: ModelNotificationTypesInput | null;
  userID?: ModelIDInput | null;
  actorId?: ModelIDInput | null;
  and?: Array<ModelNotificationConditionInput | null> | null;
  or?: Array<ModelNotificationConditionInput | null> | null;
  not?: ModelNotificationConditionInput | null;
  notificationPostId?: ModelIDInput | null;
};

export type ModelNotificationTypesInput = {
  eq?: NotificationTypes | null;
  ne?: NotificationTypes | null;
};

export type UpdateNotificationInput = {
  id: string;
  createdAt?: string | null;
  readAt?: number | null;
  type?: NotificationTypes | null;
  userID?: string | null;
  actorId?: string | null;
  _version?: number | null;
  notificationPostId?: string | null;
};

export type DeleteNotificationInput = {
  id: string;
  _version?: number | null;
};

export type ModelLikeFilterInput = {
  id?: ModelIDInput | null;
  userID?: ModelIDInput | null;
  postID?: ModelIDInput | null;
  and?: Array<ModelLikeFilterInput | null> | null;
  or?: Array<ModelLikeFilterInput | null> | null;
  not?: ModelLikeFilterInput | null;
};

export type ModelIDKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export enum ModelSortDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null;
  comment?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  userID?: ModelIDInput | null;
  postID?: ModelIDInput | null;
  and?: Array<ModelCommentFilterInput | null> | null;
  or?: Array<ModelCommentFilterInput | null> | null;
  not?: ModelCommentFilterInput | null;
};

export type ModelStringKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  type?: ModelStringInput | null;
  description?: ModelStringInput | null;
  location?: ModelStringInput | null;
  video?: ModelStringInput | null;
  image?: ModelStringInput | null;
  images?: ModelStringInput | null;
  noOfComments?: ModelIntInput | null;
  noOfLikes?: ModelIntInput | null;
  userID?: ModelIDInput | null;
  and?: Array<ModelPostFilterInput | null> | null;
  or?: Array<ModelPostFilterInput | null> | null;
  not?: ModelPostFilterInput | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  username?: ModelStringInput | null;
  bio?: ModelStringInput | null;
  image?: ModelStringInput | null;
  website?: ModelStringInput | null;
  noOfPosts?: ModelIntInput | null;
  noOfFollowers?: ModelIntInput | null;
  noOfFollowing?: ModelIntInput | null;
  fcmToken?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelUserConnection = {
  __typename: 'ModelUserConnection';
  items: Array<User | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelUserFollowFilterInput = {
  id?: ModelIDInput | null;
  followerID?: ModelIDInput | null;
  followeeID?: ModelIDInput | null;
  and?: Array<ModelUserFollowFilterInput | null> | null;
  or?: Array<ModelUserFollowFilterInput | null> | null;
  not?: ModelUserFollowFilterInput | null;
};

export type ModelUserFeedPostFilterInput = {
  id?: ModelIDInput | null;
  userID?: ModelIDInput | null;
  postID?: ModelIDInput | null;
  postCreatedAt?: ModelStringInput | null;
  postOwnerID?: ModelIDInput | null;
  and?: Array<ModelUserFeedPostFilterInput | null> | null;
  or?: Array<ModelUserFeedPostFilterInput | null> | null;
  not?: ModelUserFeedPostFilterInput | null;
};

export type ModelUserFeedPostConnection = {
  __typename: 'ModelUserFeedPostConnection';
  items: Array<UserFeedPost | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelNotificationFilterInput = {
  id?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  readAt?: ModelIntInput | null;
  type?: ModelNotificationTypesInput | null;
  userID?: ModelIDInput | null;
  actorId?: ModelIDInput | null;
  and?: Array<ModelNotificationFilterInput | null> | null;
  or?: Array<ModelNotificationFilterInput | null> | null;
  not?: ModelNotificationFilterInput | null;
  notificationPostId?: ModelIDInput | null;
};

export type ModelSubscriptionLikeFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  userID?: ModelSubscriptionIDInput | null;
  postID?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionLikeFilterInput | null> | null;
  or?: Array<ModelSubscriptionLikeFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionCommentFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  comment?: ModelSubscriptionStringInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  userID?: ModelSubscriptionIDInput | null;
  postID?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionCommentFilterInput | null> | null;
  or?: Array<ModelSubscriptionCommentFilterInput | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionPostFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  type?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  location?: ModelSubscriptionStringInput | null;
  video?: ModelSubscriptionStringInput | null;
  image?: ModelSubscriptionStringInput | null;
  images?: ModelSubscriptionStringInput | null;
  noOfComments?: ModelSubscriptionIntInput | null;
  noOfLikes?: ModelSubscriptionIntInput | null;
  userID?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionPostFilterInput | null> | null;
  or?: Array<ModelSubscriptionPostFilterInput | null> | null;
};

export type ModelSubscriptionIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  email?: ModelSubscriptionStringInput | null;
  username?: ModelSubscriptionStringInput | null;
  bio?: ModelSubscriptionStringInput | null;
  image?: ModelSubscriptionStringInput | null;
  website?: ModelSubscriptionStringInput | null;
  noOfPosts?: ModelSubscriptionIntInput | null;
  noOfFollowers?: ModelSubscriptionIntInput | null;
  noOfFollowing?: ModelSubscriptionIntInput | null;
  fcmToken?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionUserFilterInput | null> | null;
  or?: Array<ModelSubscriptionUserFilterInput | null> | null;
};

export type ModelSubscriptionUserFollowFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  followerID?: ModelSubscriptionIDInput | null;
  followeeID?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionUserFollowFilterInput | null> | null;
  or?: Array<ModelSubscriptionUserFollowFilterInput | null> | null;
};

export type ModelSubscriptionUserFeedPostFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  userID?: ModelSubscriptionIDInput | null;
  postID?: ModelSubscriptionIDInput | null;
  postCreatedAt?: ModelSubscriptionStringInput | null;
  postOwnerID?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionUserFeedPostFilterInput | null> | null;
  or?: Array<ModelSubscriptionUserFeedPostFilterInput | null> | null;
};

export type ModelSubscriptionNotificationFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  readAt?: ModelSubscriptionIntInput | null;
  type?: ModelSubscriptionStringInput | null;
  userID?: ModelSubscriptionIDInput | null;
  actorId?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionNotificationFilterInput | null> | null;
  or?: Array<ModelSubscriptionNotificationFilterInput | null> | null;
};

export type CreateLikeMutationVariables = {
  input: CreateLikeInput;
  condition?: ModelLikeConditionInput | null;
};

export type CreateLikeMutation = {
  createLike?: {
    __typename: 'Like';
    id: string;
    userID: string;
    postID: string;
    User?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    Post?: {
      __typename: 'Post';
      id: string;
      createdAt: string;
      type: string;
      description?: string | null;
      location?: string | null;
      video?: string | null;
      image?: string | null;
      images?: Array<string> | null;
      noOfComments: number;
      noOfLikes: number;
      userID: string;
      User?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type UpdateLikeMutationVariables = {
  input: UpdateLikeInput;
  condition?: ModelLikeConditionInput | null;
};

export type UpdateLikeMutation = {
  updateLike?: {
    __typename: 'Like';
    id: string;
    userID: string;
    postID: string;
    User?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    Post?: {
      __typename: 'Post';
      id: string;
      createdAt: string;
      type: string;
      description?: string | null;
      location?: string | null;
      video?: string | null;
      image?: string | null;
      images?: Array<string> | null;
      noOfComments: number;
      noOfLikes: number;
      userID: string;
      User?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type DeleteLikeMutationVariables = {
  input: DeleteLikeInput;
  condition?: ModelLikeConditionInput | null;
};

export type DeleteLikeMutation = {
  deleteLike?: {
    __typename: 'Like';
    id: string;
    userID: string;
    postID: string;
    User?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    Post?: {
      __typename: 'Post';
      id: string;
      createdAt: string;
      type: string;
      description?: string | null;
      location?: string | null;
      video?: string | null;
      image?: string | null;
      images?: Array<string> | null;
      noOfComments: number;
      noOfLikes: number;
      userID: string;
      User?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput;
  condition?: ModelCommentConditionInput | null;
};

export type CreateCommentMutation = {
  createComment?: {
    __typename: 'Comment';
    id: string;
    comment: string;
    createdAt: string;
    userID: string;
    postID: string;
    User?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    Post?: {
      __typename: 'Post';
      id: string;
      createdAt: string;
      type: string;
      description?: string | null;
      location?: string | null;
      video?: string | null;
      image?: string | null;
      images?: Array<string> | null;
      noOfComments: number;
      noOfLikes: number;
      userID: string;
      User?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput;
  condition?: ModelCommentConditionInput | null;
};

export type UpdateCommentMutation = {
  updateComment?: {
    __typename: 'Comment';
    id: string;
    comment: string;
    createdAt: string;
    userID: string;
    postID: string;
    User?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    Post?: {
      __typename: 'Post';
      id: string;
      createdAt: string;
      type: string;
      description?: string | null;
      location?: string | null;
      video?: string | null;
      image?: string | null;
      images?: Array<string> | null;
      noOfComments: number;
      noOfLikes: number;
      userID: string;
      User?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput;
  condition?: ModelCommentConditionInput | null;
};

export type DeleteCommentMutation = {
  deleteComment?: {
    __typename: 'Comment';
    id: string;
    comment: string;
    createdAt: string;
    userID: string;
    postID: string;
    User?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    Post?: {
      __typename: 'Post';
      id: string;
      createdAt: string;
      type: string;
      description?: string | null;
      location?: string | null;
      video?: string | null;
      image?: string | null;
      images?: Array<string> | null;
      noOfComments: number;
      noOfLikes: number;
      userID: string;
      User?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type CreatePostMutationVariables = {
  input: CreatePostInput;
  condition?: ModelPostConditionInput | null;
};

export type CreatePostMutation = {
  createPost?: {
    __typename: 'Post';
    id: string;
    createdAt: string;
    type: string;
    description?: string | null;
    location?: string | null;
    video?: string | null;
    image?: string | null;
    images?: Array<string> | null;
    noOfComments: number;
    noOfLikes: number;
    userID: string;
    User?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    Comments?: {
      __typename: 'ModelCommentConnection';
      items: Array<{
        __typename: 'Comment';
        id: string;
        comment: string;
        createdAt: string;
        userID: string;
        postID: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Likes?: {
      __typename: 'ModelLikeConnection';
      items: Array<{
        __typename: 'Like';
        id: string;
        userID: string;
        postID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput;
  condition?: ModelPostConditionInput | null;
};

export type UpdatePostMutation = {
  updatePost?: {
    __typename: 'Post';
    id: string;
    createdAt: string;
    type: string;
    description?: string | null;
    location?: string | null;
    video?: string | null;
    image?: string | null;
    images?: Array<string> | null;
    noOfComments: number;
    noOfLikes: number;
    userID: string;
    User?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    Comments?: {
      __typename: 'ModelCommentConnection';
      items: Array<{
        __typename: 'Comment';
        id: string;
        comment: string;
        createdAt: string;
        userID: string;
        postID: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Likes?: {
      __typename: 'ModelLikeConnection';
      items: Array<{
        __typename: 'Like';
        id: string;
        userID: string;
        postID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type DeletePostMutationVariables = {
  input: DeletePostInput;
  condition?: ModelPostConditionInput | null;
};

export type DeletePostMutation = {
  deletePost?: {
    __typename: 'Post';
    id: string;
    createdAt: string;
    type: string;
    description?: string | null;
    location?: string | null;
    video?: string | null;
    image?: string | null;
    images?: Array<string> | null;
    noOfComments: number;
    noOfLikes: number;
    userID: string;
    User?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    Comments?: {
      __typename: 'ModelCommentConnection';
      items: Array<{
        __typename: 'Comment';
        id: string;
        comment: string;
        createdAt: string;
        userID: string;
        postID: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Likes?: {
      __typename: 'ModelLikeConnection';
      items: Array<{
        __typename: 'Like';
        id: string;
        userID: string;
        postID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type CreateUserMutationVariables = {
  input: CreateUserInput;
  condition?: ModelUserConditionInput | null;
};

export type CreateUserMutation = {
  createUser?: {
    __typename: 'User';
    id: string;
    name: string;
    email?: string | null;
    username?: string | null;
    bio?: string | null;
    image?: string | null;
    website?: string | null;
    noOfPosts: number;
    noOfFollowers: number;
    noOfFollowing: number;
    Posts?: {
      __typename: 'ModelPostConnection';
      items: Array<{
        __typename: 'Post';
        id: string;
        createdAt: string;
        type: string;
        description?: string | null;
        location?: string | null;
        video?: string | null;
        image?: string | null;
        images?: Array<string> | null;
        noOfComments: number;
        noOfLikes: number;
        userID: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Comments?: {
      __typename: 'ModelCommentConnection';
      items: Array<{
        __typename: 'Comment';
        id: string;
        comment: string;
        createdAt: string;
        userID: string;
        postID: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Likes?: {
      __typename: 'ModelLikeConnection';
      items: Array<{
        __typename: 'Like';
        id: string;
        userID: string;
        postID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Followers?: {
      __typename: 'ModelUserFollowConnection';
      items: Array<{
        __typename: 'UserFollow';
        id: string;
        followerID: string;
        followeeID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Followings?: {
      __typename: 'ModelUserFollowConnection';
      items: Array<{
        __typename: 'UserFollow';
        id: string;
        followerID: string;
        followeeID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    fcmToken?: string | null;
    Notifications?: {
      __typename: 'ModelNotificationConnection';
      items: Array<{
        __typename: 'Notification';
        id: string;
        createdAt: string;
        readAt: number;
        type: NotificationTypes;
        userID: string;
        actorId: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        notificationPostId?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput;
  condition?: ModelUserConditionInput | null;
};

export type UpdateUserMutation = {
  updateUser?: {
    __typename: 'User';
    id: string;
    name: string;
    email?: string | null;
    username?: string | null;
    bio?: string | null;
    image?: string | null;
    website?: string | null;
    noOfPosts: number;
    noOfFollowers: number;
    noOfFollowing: number;
    Posts?: {
      __typename: 'ModelPostConnection';
      items: Array<{
        __typename: 'Post';
        id: string;
        createdAt: string;
        type: string;
        description?: string | null;
        location?: string | null;
        video?: string | null;
        image?: string | null;
        images?: Array<string> | null;
        noOfComments: number;
        noOfLikes: number;
        userID: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Comments?: {
      __typename: 'ModelCommentConnection';
      items: Array<{
        __typename: 'Comment';
        id: string;
        comment: string;
        createdAt: string;
        userID: string;
        postID: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Likes?: {
      __typename: 'ModelLikeConnection';
      items: Array<{
        __typename: 'Like';
        id: string;
        userID: string;
        postID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Followers?: {
      __typename: 'ModelUserFollowConnection';
      items: Array<{
        __typename: 'UserFollow';
        id: string;
        followerID: string;
        followeeID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Followings?: {
      __typename: 'ModelUserFollowConnection';
      items: Array<{
        __typename: 'UserFollow';
        id: string;
        followerID: string;
        followeeID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    fcmToken?: string | null;
    Notifications?: {
      __typename: 'ModelNotificationConnection';
      items: Array<{
        __typename: 'Notification';
        id: string;
        createdAt: string;
        readAt: number;
        type: NotificationTypes;
        userID: string;
        actorId: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        notificationPostId?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput;
  condition?: ModelUserConditionInput | null;
};

export type DeleteUserMutation = {
  deleteUser?: {
    __typename: 'User';
    id: string;
    name: string;
    email?: string | null;
    username?: string | null;
    bio?: string | null;
    image?: string | null;
    website?: string | null;
    noOfPosts: number;
    noOfFollowers: number;
    noOfFollowing: number;
    Posts?: {
      __typename: 'ModelPostConnection';
      items: Array<{
        __typename: 'Post';
        id: string;
        createdAt: string;
        type: string;
        description?: string | null;
        location?: string | null;
        video?: string | null;
        image?: string | null;
        images?: Array<string> | null;
        noOfComments: number;
        noOfLikes: number;
        userID: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Comments?: {
      __typename: 'ModelCommentConnection';
      items: Array<{
        __typename: 'Comment';
        id: string;
        comment: string;
        createdAt: string;
        userID: string;
        postID: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Likes?: {
      __typename: 'ModelLikeConnection';
      items: Array<{
        __typename: 'Like';
        id: string;
        userID: string;
        postID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Followers?: {
      __typename: 'ModelUserFollowConnection';
      items: Array<{
        __typename: 'UserFollow';
        id: string;
        followerID: string;
        followeeID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Followings?: {
      __typename: 'ModelUserFollowConnection';
      items: Array<{
        __typename: 'UserFollow';
        id: string;
        followerID: string;
        followeeID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    fcmToken?: string | null;
    Notifications?: {
      __typename: 'ModelNotificationConnection';
      items: Array<{
        __typename: 'Notification';
        id: string;
        createdAt: string;
        readAt: number;
        type: NotificationTypes;
        userID: string;
        actorId: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        notificationPostId?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type CreateUserFollowMutationVariables = {
  input: CreateUserFollowInput;
  condition?: ModelUserFollowConditionInput | null;
};

export type CreateUserFollowMutation = {
  createUserFollow?: {
    __typename: 'UserFollow';
    id: string;
    followerID: string;
    followeeID: string;
    Follower?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    Followee?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type UpdateUserFollowMutationVariables = {
  input: UpdateUserFollowInput;
  condition?: ModelUserFollowConditionInput | null;
};

export type UpdateUserFollowMutation = {
  updateUserFollow?: {
    __typename: 'UserFollow';
    id: string;
    followerID: string;
    followeeID: string;
    Follower?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    Followee?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type DeleteUserFollowMutationVariables = {
  input: DeleteUserFollowInput;
  condition?: ModelUserFollowConditionInput | null;
};

export type DeleteUserFollowMutation = {
  deleteUserFollow?: {
    __typename: 'UserFollow';
    id: string;
    followerID: string;
    followeeID: string;
    Follower?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    Followee?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type CreateUserFeedPostMutationVariables = {
  input: CreateUserFeedPostInput;
  condition?: ModelUserFeedPostConditionInput | null;
};

export type CreateUserFeedPostMutation = {
  createUserFeedPost?: {
    __typename: 'UserFeedPost';
    id: string;
    userID: string;
    postID: string;
    postCreatedAt: string;
    postOwnerID: string;
    Post?: {
      __typename: 'Post';
      id: string;
      createdAt: string;
      type: string;
      description?: string | null;
      location?: string | null;
      video?: string | null;
      image?: string | null;
      images?: Array<string> | null;
      noOfComments: number;
      noOfLikes: number;
      userID: string;
      User?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type UpdateUserFeedPostMutationVariables = {
  input: UpdateUserFeedPostInput;
  condition?: ModelUserFeedPostConditionInput | null;
};

export type UpdateUserFeedPostMutation = {
  updateUserFeedPost?: {
    __typename: 'UserFeedPost';
    id: string;
    userID: string;
    postID: string;
    postCreatedAt: string;
    postOwnerID: string;
    Post?: {
      __typename: 'Post';
      id: string;
      createdAt: string;
      type: string;
      description?: string | null;
      location?: string | null;
      video?: string | null;
      image?: string | null;
      images?: Array<string> | null;
      noOfComments: number;
      noOfLikes: number;
      userID: string;
      User?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type DeleteUserFeedPostMutationVariables = {
  input: DeleteUserFeedPostInput;
  condition?: ModelUserFeedPostConditionInput | null;
};

export type DeleteUserFeedPostMutation = {
  deleteUserFeedPost?: {
    __typename: 'UserFeedPost';
    id: string;
    userID: string;
    postID: string;
    postCreatedAt: string;
    postOwnerID: string;
    Post?: {
      __typename: 'Post';
      id: string;
      createdAt: string;
      type: string;
      description?: string | null;
      location?: string | null;
      video?: string | null;
      image?: string | null;
      images?: Array<string> | null;
      noOfComments: number;
      noOfLikes: number;
      userID: string;
      User?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type CreateNotificationMutationVariables = {
  input: CreateNotificationInput;
  condition?: ModelNotificationConditionInput | null;
};

export type CreateNotificationMutation = {
  createNotification?: {
    __typename: 'Notification';
    id: string;
    createdAt: string;
    readAt: number;
    type: NotificationTypes;
    userID: string;
    User?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    actorId: string;
    Actor?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    Post?: {
      __typename: 'Post';
      id: string;
      createdAt: string;
      type: string;
      description?: string | null;
      location?: string | null;
      video?: string | null;
      image?: string | null;
      images?: Array<string> | null;
      noOfComments: number;
      noOfLikes: number;
      userID: string;
      User?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    notificationPostId?: string | null;
  } | null;
};

export type UpdateNotificationMutationVariables = {
  input: UpdateNotificationInput;
  condition?: ModelNotificationConditionInput | null;
};

export type UpdateNotificationMutation = {
  updateNotification?: {
    __typename: 'Notification';
    id: string;
    createdAt: string;
    readAt: number;
    type: NotificationTypes;
    userID: string;
    User?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    actorId: string;
    Actor?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    Post?: {
      __typename: 'Post';
      id: string;
      createdAt: string;
      type: string;
      description?: string | null;
      location?: string | null;
      video?: string | null;
      image?: string | null;
      images?: Array<string> | null;
      noOfComments: number;
      noOfLikes: number;
      userID: string;
      User?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    notificationPostId?: string | null;
  } | null;
};

export type DeleteNotificationMutationVariables = {
  input: DeleteNotificationInput;
  condition?: ModelNotificationConditionInput | null;
};

export type DeleteNotificationMutation = {
  deleteNotification?: {
    __typename: 'Notification';
    id: string;
    createdAt: string;
    readAt: number;
    type: NotificationTypes;
    userID: string;
    User?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    actorId: string;
    Actor?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    Post?: {
      __typename: 'Post';
      id: string;
      createdAt: string;
      type: string;
      description?: string | null;
      location?: string | null;
      video?: string | null;
      image?: string | null;
      images?: Array<string> | null;
      noOfComments: number;
      noOfLikes: number;
      userID: string;
      User?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    notificationPostId?: string | null;
  } | null;
};

export type GetLikeQueryVariables = {
  id: string;
};

export type GetLikeQuery = {
  getLike?: {
    __typename: 'Like';
    id: string;
    userID: string;
    postID: string;
    User?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    Post?: {
      __typename: 'Post';
      id: string;
      createdAt: string;
      type: string;
      description?: string | null;
      location?: string | null;
      video?: string | null;
      image?: string | null;
      images?: Array<string> | null;
      noOfComments: number;
      noOfLikes: number;
      userID: string;
      User?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type ListLikesQueryVariables = {
  filter?: ModelLikeFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListLikesQuery = {
  listLikes?: {
    __typename: 'ModelLikeConnection';
    items: Array<{
      __typename: 'Like';
      id: string;
      userID: string;
      postID: string;
      User?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      Post?: {
        __typename: 'Post';
        id: string;
        createdAt: string;
        type: string;
        description?: string | null;
        location?: string | null;
        video?: string | null;
        image?: string | null;
        images?: Array<string> | null;
        noOfComments: number;
        noOfLikes: number;
        userID: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncLikesQueryVariables = {
  filter?: ModelLikeFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncLikesQuery = {
  syncLikes?: {
    __typename: 'ModelLikeConnection';
    items: Array<{
      __typename: 'Like';
      id: string;
      userID: string;
      postID: string;
      User?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      Post?: {
        __typename: 'Post';
        id: string;
        createdAt: string;
        type: string;
        description?: string | null;
        location?: string | null;
        video?: string | null;
        image?: string | null;
        images?: Array<string> | null;
        noOfComments: number;
        noOfLikes: number;
        userID: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type LikesForPostByUserQueryVariables = {
  postID: string;
  userID?: ModelIDKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelLikeFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type LikesForPostByUserQuery = {
  LikesForPostByUser?: {
    __typename: 'ModelLikeConnection';
    items: Array<{
      __typename: 'Like';
      id: string;
      userID: string;
      postID: string;
      User?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      Post?: {
        __typename: 'Post';
        id: string;
        createdAt: string;
        type: string;
        description?: string | null;
        location?: string | null;
        video?: string | null;
        image?: string | null;
        images?: Array<string> | null;
        noOfComments: number;
        noOfLikes: number;
        userID: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetCommentQueryVariables = {
  id: string;
};

export type GetCommentQuery = {
  getComment?: {
    __typename: 'Comment';
    id: string;
    comment: string;
    createdAt: string;
    userID: string;
    postID: string;
    User?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    Post?: {
      __typename: 'Post';
      id: string;
      createdAt: string;
      type: string;
      description?: string | null;
      location?: string | null;
      video?: string | null;
      image?: string | null;
      images?: Array<string> | null;
      noOfComments: number;
      noOfLikes: number;
      userID: string;
      User?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListCommentsQuery = {
  listComments?: {
    __typename: 'ModelCommentConnection';
    items: Array<{
      __typename: 'Comment';
      id: string;
      comment: string;
      createdAt: string;
      userID: string;
      postID: string;
      User?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      Post?: {
        __typename: 'Post';
        id: string;
        createdAt: string;
        type: string;
        description?: string | null;
        location?: string | null;
        video?: string | null;
        image?: string | null;
        images?: Array<string> | null;
        noOfComments: number;
        noOfLikes: number;
        userID: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncCommentsQuery = {
  syncComments?: {
    __typename: 'ModelCommentConnection';
    items: Array<{
      __typename: 'Comment';
      id: string;
      comment: string;
      createdAt: string;
      userID: string;
      postID: string;
      User?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      Post?: {
        __typename: 'Post';
        id: string;
        createdAt: string;
        type: string;
        description?: string | null;
        location?: string | null;
        video?: string | null;
        image?: string | null;
        images?: Array<string> | null;
        noOfComments: number;
        noOfLikes: number;
        userID: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type CommentsByPostQueryVariables = {
  postID: string;
  createdAt?: ModelStringKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelCommentFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type CommentsByPostQuery = {
  commentsByPost?: {
    __typename: 'ModelCommentConnection';
    items: Array<{
      __typename: 'Comment';
      id: string;
      comment: string;
      createdAt: string;
      userID: string;
      postID: string;
      User?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      Post?: {
        __typename: 'Post';
        id: string;
        createdAt: string;
        type: string;
        description?: string | null;
        location?: string | null;
        video?: string | null;
        image?: string | null;
        images?: Array<string> | null;
        noOfComments: number;
        noOfLikes: number;
        userID: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetPostQueryVariables = {
  id: string;
};

export type GetPostQuery = {
  getPost?: {
    __typename: 'Post';
    id: string;
    createdAt: string;
    type: string;
    description?: string | null;
    location?: string | null;
    video?: string | null;
    image?: string | null;
    images?: Array<string> | null;
    noOfComments: number;
    noOfLikes: number;
    userID: string;
    User?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    Comments?: {
      __typename: 'ModelCommentConnection';
      items: Array<{
        __typename: 'Comment';
        id: string;
        comment: string;
        createdAt: string;
        userID: string;
        postID: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Likes?: {
      __typename: 'ModelLikeConnection';
      items: Array<{
        __typename: 'Like';
        id: string;
        userID: string;
        postID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListPostsQuery = {
  listPosts?: {
    __typename: 'ModelPostConnection';
    items: Array<{
      __typename: 'Post';
      id: string;
      createdAt: string;
      type: string;
      description?: string | null;
      location?: string | null;
      video?: string | null;
      image?: string | null;
      images?: Array<string> | null;
      noOfComments: number;
      noOfLikes: number;
      userID: string;
      User?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncPostsQueryVariables = {
  filter?: ModelPostFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncPostsQuery = {
  syncPosts?: {
    __typename: 'ModelPostConnection';
    items: Array<{
      __typename: 'Post';
      id: string;
      createdAt: string;
      type: string;
      description?: string | null;
      location?: string | null;
      video?: string | null;
      image?: string | null;
      images?: Array<string> | null;
      noOfComments: number;
      noOfLikes: number;
      userID: string;
      User?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type PostsByDateQueryVariables = {
  type: string;
  createdAt?: ModelStringKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelPostFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type PostsByDateQuery = {
  postsByDate?: {
    __typename: 'ModelPostConnection';
    items: Array<{
      __typename: 'Post';
      id: string;
      createdAt: string;
      type: string;
      description?: string | null;
      location?: string | null;
      video?: string | null;
      image?: string | null;
      images?: Array<string> | null;
      noOfComments: number;
      noOfLikes: number;
      userID: string;
      User?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetUserQueryVariables = {
  id: string;
};

export type GetUserQuery = {
  getUser?: {
    __typename: 'User';
    id: string;
    name: string;
    email?: string | null;
    username?: string | null;
    bio?: string | null;
    image?: string | null;
    website?: string | null;
    noOfPosts: number;
    noOfFollowers: number;
    noOfFollowing: number;
    Posts?: {
      __typename: 'ModelPostConnection';
      items: Array<{
        __typename: 'Post';
        id: string;
        createdAt: string;
        type: string;
        description?: string | null;
        location?: string | null;
        video?: string | null;
        image?: string | null;
        images?: Array<string> | null;
        noOfComments: number;
        noOfLikes: number;
        userID: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Comments?: {
      __typename: 'ModelCommentConnection';
      items: Array<{
        __typename: 'Comment';
        id: string;
        comment: string;
        createdAt: string;
        userID: string;
        postID: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Likes?: {
      __typename: 'ModelLikeConnection';
      items: Array<{
        __typename: 'Like';
        id: string;
        userID: string;
        postID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Followers?: {
      __typename: 'ModelUserFollowConnection';
      items: Array<{
        __typename: 'UserFollow';
        id: string;
        followerID: string;
        followeeID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Followings?: {
      __typename: 'ModelUserFollowConnection';
      items: Array<{
        __typename: 'UserFollow';
        id: string;
        followerID: string;
        followeeID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    fcmToken?: string | null;
    Notifications?: {
      __typename: 'ModelNotificationConnection';
      items: Array<{
        __typename: 'Notification';
        id: string;
        createdAt: string;
        readAt: number;
        type: NotificationTypes;
        userID: string;
        actorId: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        notificationPostId?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListUsersQuery = {
  listUsers?: {
    __typename: 'ModelUserConnection';
    items: Array<{
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncUsersQuery = {
  syncUsers?: {
    __typename: 'ModelUserConnection';
    items: Array<{
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type UserByUsernameQueryVariables = {
  username: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type UserByUsernameQuery = {
  userByUsername?: {
    __typename: 'ModelUserConnection';
    items: Array<{
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetUserFollowQueryVariables = {
  id: string;
};

export type GetUserFollowQuery = {
  getUserFollow?: {
    __typename: 'UserFollow';
    id: string;
    followerID: string;
    followeeID: string;
    Follower?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    Followee?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type ListUserFollowsQueryVariables = {
  filter?: ModelUserFollowFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListUserFollowsQuery = {
  listUserFollows?: {
    __typename: 'ModelUserFollowConnection';
    items: Array<{
      __typename: 'UserFollow';
      id: string;
      followerID: string;
      followeeID: string;
      Follower?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      Followee?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncUserFollowsQueryVariables = {
  filter?: ModelUserFollowFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncUserFollowsQuery = {
  syncUserFollows?: {
    __typename: 'ModelUserFollowConnection';
    items: Array<{
      __typename: 'UserFollow';
      id: string;
      followerID: string;
      followeeID: string;
      Follower?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      Followee?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type UserFollowingsQueryVariables = {
  followerID: string;
  followeeID?: ModelIDKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelUserFollowFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type UserFollowingsQuery = {
  userFollowings?: {
    __typename: 'ModelUserFollowConnection';
    items: Array<{
      __typename: 'UserFollow';
      id: string;
      followerID: string;
      followeeID: string;
      Follower?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      Followee?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type UserFollowersQueryVariables = {
  followeeID: string;
  followerID?: ModelIDKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelUserFollowFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type UserFollowersQuery = {
  userFollowers?: {
    __typename: 'ModelUserFollowConnection';
    items: Array<{
      __typename: 'UserFollow';
      id: string;
      followerID: string;
      followeeID: string;
      Follower?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      Followee?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetUserFeedPostQueryVariables = {
  id: string;
};

export type GetUserFeedPostQuery = {
  getUserFeedPost?: {
    __typename: 'UserFeedPost';
    id: string;
    userID: string;
    postID: string;
    postCreatedAt: string;
    postOwnerID: string;
    Post?: {
      __typename: 'Post';
      id: string;
      createdAt: string;
      type: string;
      description?: string | null;
      location?: string | null;
      video?: string | null;
      image?: string | null;
      images?: Array<string> | null;
      noOfComments: number;
      noOfLikes: number;
      userID: string;
      User?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type ListUserFeedPostsQueryVariables = {
  filter?: ModelUserFeedPostFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListUserFeedPostsQuery = {
  listUserFeedPosts?: {
    __typename: 'ModelUserFeedPostConnection';
    items: Array<{
      __typename: 'UserFeedPost';
      id: string;
      userID: string;
      postID: string;
      postCreatedAt: string;
      postOwnerID: string;
      Post?: {
        __typename: 'Post';
        id: string;
        createdAt: string;
        type: string;
        description?: string | null;
        location?: string | null;
        video?: string | null;
        image?: string | null;
        images?: Array<string> | null;
        noOfComments: number;
        noOfLikes: number;
        userID: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncUserFeedPostsQueryVariables = {
  filter?: ModelUserFeedPostFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncUserFeedPostsQuery = {
  syncUserFeedPosts?: {
    __typename: 'ModelUserFeedPostConnection';
    items: Array<{
      __typename: 'UserFeedPost';
      id: string;
      userID: string;
      postID: string;
      postCreatedAt: string;
      postOwnerID: string;
      Post?: {
        __typename: 'Post';
        id: string;
        createdAt: string;
        type: string;
        description?: string | null;
        location?: string | null;
        video?: string | null;
        image?: string | null;
        images?: Array<string> | null;
        noOfComments: number;
        noOfLikes: number;
        userID: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type UserFeedQueryVariables = {
  userID: string;
  postCreatedAt?: ModelStringKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelUserFeedPostFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type UserFeedQuery = {
  userFeed?: {
    __typename: 'ModelUserFeedPostConnection';
    items: Array<{
      __typename: 'UserFeedPost';
      id: string;
      userID: string;
      postID: string;
      postCreatedAt: string;
      postOwnerID: string;
      Post?: {
        __typename: 'Post';
        id: string;
        createdAt: string;
        type: string;
        description?: string | null;
        location?: string | null;
        video?: string | null;
        image?: string | null;
        images?: Array<string> | null;
        noOfComments: number;
        noOfLikes: number;
        userID: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetNotificationQueryVariables = {
  id: string;
};

export type GetNotificationQuery = {
  getNotification?: {
    __typename: 'Notification';
    id: string;
    createdAt: string;
    readAt: number;
    type: NotificationTypes;
    userID: string;
    User?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    actorId: string;
    Actor?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    Post?: {
      __typename: 'Post';
      id: string;
      createdAt: string;
      type: string;
      description?: string | null;
      location?: string | null;
      video?: string | null;
      image?: string | null;
      images?: Array<string> | null;
      noOfComments: number;
      noOfLikes: number;
      userID: string;
      User?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    notificationPostId?: string | null;
  } | null;
};

export type ListNotificationsQueryVariables = {
  filter?: ModelNotificationFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListNotificationsQuery = {
  listNotifications?: {
    __typename: 'ModelNotificationConnection';
    items: Array<{
      __typename: 'Notification';
      id: string;
      createdAt: string;
      readAt: number;
      type: NotificationTypes;
      userID: string;
      User?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      actorId: string;
      Actor?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      Post?: {
        __typename: 'Post';
        id: string;
        createdAt: string;
        type: string;
        description?: string | null;
        location?: string | null;
        video?: string | null;
        image?: string | null;
        images?: Array<string> | null;
        noOfComments: number;
        noOfLikes: number;
        userID: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      notificationPostId?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncNotificationsQueryVariables = {
  filter?: ModelNotificationFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncNotificationsQuery = {
  syncNotifications?: {
    __typename: 'ModelNotificationConnection';
    items: Array<{
      __typename: 'Notification';
      id: string;
      createdAt: string;
      readAt: number;
      type: NotificationTypes;
      userID: string;
      User?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      actorId: string;
      Actor?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      Post?: {
        __typename: 'Post';
        id: string;
        createdAt: string;
        type: string;
        description?: string | null;
        location?: string | null;
        video?: string | null;
        image?: string | null;
        images?: Array<string> | null;
        noOfComments: number;
        noOfLikes: number;
        userID: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      notificationPostId?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type UserNotificationQueryVariables = {
  userID: string;
  createdAt?: ModelStringKeyConditionInput | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelNotificationFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type UserNotificationQuery = {
  onCreateNotification: {
    __typename: 'Notification';
    id: string;
    createdAt: string;
    readAt: number;
    type: NotificationTypes;
    userID: string;
    User?:
      | {
          __typename: 'User';
          id: string;
          name: string;
          email?: string | null | undefined;
          username?: string | null | undefined;
          bio?: string | null | undefined;
          image?: string | null | undefined;
          website?: string | null | undefined;
          noOfPosts: number;
          noOfFollowers: number;
          noOfFollowing: number;
          fcmToken?: string | null | undefined;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null | undefined;
          _lastChangedAt: number;
          owner?: string | null | undefined;
        }
      | null
      | undefined;
    actorId: string;
    Actor?:
      | {
          __typename: 'User';
          id: string;
          name: string;
          email?: string | null | undefined;
          username?: string | null | undefined;
          bio?: string | null | undefined;
          image?: string | null | undefined;
          website?: string | null | undefined;
          noOfPosts: number;
          noOfFollowers: number;
          noOfFollowing: number;
          fcmToken?: string | null | undefined;
          createdAt: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null | undefined;
          _lastChangedAt: number;
          owner?: string | null | undefined;
        }
      | null
      | undefined;
    Post?:
      | {
          __typename: 'Post';
          id: string;
          createdAt: string;
          type: string;
          description?: string | null | undefined;
          location?: string | null | undefined;
          video?: string | null | undefined;
          image?: string | null | undefined;
          images?: string[] | null | undefined;
          noOfComments: number;
          noOfLikes: number;
          userID: string;
          updatedAt: string;
          _version: number;
          _deleted?: boolean | null | undefined;
          _lastChangedAt: number;
          owner?: string | null | undefined;
        }
      | null
      | undefined;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null | undefined;
    _lastChangedAt: number;
    notificationPostId?: string | null | undefined;
  } | null;
  userNotification?: {
    __typename: 'ModelNotificationConnection';
    items: Array<{
      __typename: 'Notification';
      id: string;
      createdAt: string;
      readAt: number;
      type: NotificationTypes;
      userID: string;
      User?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      actorId: string;
      Actor?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      Post?: {
        __typename: 'Post';
        id: string;
        createdAt: string;
        type: string;
        description?: string | null;
        location?: string | null;
        video?: string | null;
        image?: string | null;
        images?: Array<string> | null;
        noOfComments: number;
        noOfLikes: number;
        userID: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      notificationPostId?: string | null;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type OnCreateCommentByPostIdSubscriptionVariables = {
  postID: string;
};

export type OnCreateCommentByPostIdSubscription = {
  onCreateCommentByPostId?: {
    __typename: 'Comment';
    id: string;
    comment: string;
    createdAt: string;
    userID: string;
    postID: string;
    User?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    Post?: {
      __typename: 'Post';
      id: string;
      createdAt: string;
      type: string;
      description?: string | null;
      location?: string | null;
      video?: string | null;
      image?: string | null;
      images?: Array<string> | null;
      noOfComments: number;
      noOfLikes: number;
      userID: string;
      User?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnCreateLikeSubscriptionVariables = {
  filter?: ModelSubscriptionLikeFilterInput | null;
  owner?: string | null;
};

export type OnCreateLikeSubscription = {
  onCreateLike?: {
    __typename: 'Like';
    id: string;
    userID: string;
    postID: string;
    User?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    Post?: {
      __typename: 'Post';
      id: string;
      createdAt: string;
      type: string;
      description?: string | null;
      location?: string | null;
      video?: string | null;
      image?: string | null;
      images?: Array<string> | null;
      noOfComments: number;
      noOfLikes: number;
      userID: string;
      User?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnUpdateLikeSubscriptionVariables = {
  filter?: ModelSubscriptionLikeFilterInput | null;
  owner?: string | null;
};

export type OnUpdateLikeSubscription = {
  onUpdateLike?: {
    __typename: 'Like';
    id: string;
    userID: string;
    postID: string;
    User?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    Post?: {
      __typename: 'Post';
      id: string;
      createdAt: string;
      type: string;
      description?: string | null;
      location?: string | null;
      video?: string | null;
      image?: string | null;
      images?: Array<string> | null;
      noOfComments: number;
      noOfLikes: number;
      userID: string;
      User?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnDeleteLikeSubscriptionVariables = {
  filter?: ModelSubscriptionLikeFilterInput | null;
  owner?: string | null;
};

export type OnDeleteLikeSubscription = {
  onDeleteLike?: {
    __typename: 'Like';
    id: string;
    userID: string;
    postID: string;
    User?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    Post?: {
      __typename: 'Post';
      id: string;
      createdAt: string;
      type: string;
      description?: string | null;
      location?: string | null;
      video?: string | null;
      image?: string | null;
      images?: Array<string> | null;
      noOfComments: number;
      noOfLikes: number;
      userID: string;
      User?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnCreateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null;
  owner?: string | null;
};

export type OnCreateCommentSubscription = {
  onCreateComment?: {
    __typename: 'Comment';
    id: string;
    comment: string;
    createdAt: string;
    userID: string;
    postID: string;
    User?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    Post?: {
      __typename: 'Post';
      id: string;
      createdAt: string;
      type: string;
      description?: string | null;
      location?: string | null;
      video?: string | null;
      image?: string | null;
      images?: Array<string> | null;
      noOfComments: number;
      noOfLikes: number;
      userID: string;
      User?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnUpdateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null;
  owner?: string | null;
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?: {
    __typename: 'Comment';
    id: string;
    comment: string;
    createdAt: string;
    userID: string;
    postID: string;
    User?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    Post?: {
      __typename: 'Post';
      id: string;
      createdAt: string;
      type: string;
      description?: string | null;
      location?: string | null;
      video?: string | null;
      image?: string | null;
      images?: Array<string> | null;
      noOfComments: number;
      noOfLikes: number;
      userID: string;
      User?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnDeleteCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null;
  owner?: string | null;
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?: {
    __typename: 'Comment';
    id: string;
    comment: string;
    createdAt: string;
    userID: string;
    postID: string;
    User?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    Post?: {
      __typename: 'Post';
      id: string;
      createdAt: string;
      type: string;
      description?: string | null;
      location?: string | null;
      video?: string | null;
      image?: string | null;
      images?: Array<string> | null;
      noOfComments: number;
      noOfLikes: number;
      userID: string;
      User?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null;
  owner?: string | null;
};

export type OnCreatePostSubscription = {
  onCreatePost?: {
    __typename: 'Post';
    id: string;
    createdAt: string;
    type: string;
    description?: string | null;
    location?: string | null;
    video?: string | null;
    image?: string | null;
    images?: Array<string> | null;
    noOfComments: number;
    noOfLikes: number;
    userID: string;
    User?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    Comments?: {
      __typename: 'ModelCommentConnection';
      items: Array<{
        __typename: 'Comment';
        id: string;
        comment: string;
        createdAt: string;
        userID: string;
        postID: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Likes?: {
      __typename: 'ModelLikeConnection';
      items: Array<{
        __typename: 'Like';
        id: string;
        userID: string;
        postID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null;
  owner?: string | null;
};

export type OnUpdatePostSubscription = {
  onUpdatePost?: {
    __typename: 'Post';
    id: string;
    createdAt: string;
    type: string;
    description?: string | null;
    location?: string | null;
    video?: string | null;
    image?: string | null;
    images?: Array<string> | null;
    noOfComments: number;
    noOfLikes: number;
    userID: string;
    User?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    Comments?: {
      __typename: 'ModelCommentConnection';
      items: Array<{
        __typename: 'Comment';
        id: string;
        comment: string;
        createdAt: string;
        userID: string;
        postID: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Likes?: {
      __typename: 'ModelLikeConnection';
      items: Array<{
        __typename: 'Like';
        id: string;
        userID: string;
        postID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null;
  owner?: string | null;
};

export type OnDeletePostSubscription = {
  onDeletePost?: {
    __typename: 'Post';
    id: string;
    createdAt: string;
    type: string;
    description?: string | null;
    location?: string | null;
    video?: string | null;
    image?: string | null;
    images?: Array<string> | null;
    noOfComments: number;
    noOfLikes: number;
    userID: string;
    User?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    Comments?: {
      __typename: 'ModelCommentConnection';
      items: Array<{
        __typename: 'Comment';
        id: string;
        comment: string;
        createdAt: string;
        userID: string;
        postID: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Likes?: {
      __typename: 'ModelLikeConnection';
      items: Array<{
        __typename: 'Like';
        id: string;
        userID: string;
        postID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null;
  owner?: string | null;
};

export type OnCreateUserSubscription = {
  onCreateUser?: {
    __typename: 'User';
    id: string;
    name: string;
    email?: string | null;
    username?: string | null;
    bio?: string | null;
    image?: string | null;
    website?: string | null;
    noOfPosts: number;
    noOfFollowers: number;
    noOfFollowing: number;
    Posts?: {
      __typename: 'ModelPostConnection';
      items: Array<{
        __typename: 'Post';
        id: string;
        createdAt: string;
        type: string;
        description?: string | null;
        location?: string | null;
        video?: string | null;
        image?: string | null;
        images?: Array<string> | null;
        noOfComments: number;
        noOfLikes: number;
        userID: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Comments?: {
      __typename: 'ModelCommentConnection';
      items: Array<{
        __typename: 'Comment';
        id: string;
        comment: string;
        createdAt: string;
        userID: string;
        postID: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Likes?: {
      __typename: 'ModelLikeConnection';
      items: Array<{
        __typename: 'Like';
        id: string;
        userID: string;
        postID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Followers?: {
      __typename: 'ModelUserFollowConnection';
      items: Array<{
        __typename: 'UserFollow';
        id: string;
        followerID: string;
        followeeID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Followings?: {
      __typename: 'ModelUserFollowConnection';
      items: Array<{
        __typename: 'UserFollow';
        id: string;
        followerID: string;
        followeeID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    fcmToken?: string | null;
    Notifications?: {
      __typename: 'ModelNotificationConnection';
      items: Array<{
        __typename: 'Notification';
        id: string;
        createdAt: string;
        readAt: number;
        type: NotificationTypes;
        userID: string;
        actorId: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        notificationPostId?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null;
  owner?: string | null;
};

export type OnUpdateUserSubscription = {
  onUpdateUser?: {
    __typename: 'User';
    id: string;
    name: string;
    email?: string | null;
    username?: string | null;
    bio?: string | null;
    image?: string | null;
    website?: string | null;
    noOfPosts: number;
    noOfFollowers: number;
    noOfFollowing: number;
    Posts?: {
      __typename: 'ModelPostConnection';
      items: Array<{
        __typename: 'Post';
        id: string;
        createdAt: string;
        type: string;
        description?: string | null;
        location?: string | null;
        video?: string | null;
        image?: string | null;
        images?: Array<string> | null;
        noOfComments: number;
        noOfLikes: number;
        userID: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Comments?: {
      __typename: 'ModelCommentConnection';
      items: Array<{
        __typename: 'Comment';
        id: string;
        comment: string;
        createdAt: string;
        userID: string;
        postID: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Likes?: {
      __typename: 'ModelLikeConnection';
      items: Array<{
        __typename: 'Like';
        id: string;
        userID: string;
        postID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Followers?: {
      __typename: 'ModelUserFollowConnection';
      items: Array<{
        __typename: 'UserFollow';
        id: string;
        followerID: string;
        followeeID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Followings?: {
      __typename: 'ModelUserFollowConnection';
      items: Array<{
        __typename: 'UserFollow';
        id: string;
        followerID: string;
        followeeID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    fcmToken?: string | null;
    Notifications?: {
      __typename: 'ModelNotificationConnection';
      items: Array<{
        __typename: 'Notification';
        id: string;
        createdAt: string;
        readAt: number;
        type: NotificationTypes;
        userID: string;
        actorId: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        notificationPostId?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null;
  owner?: string | null;
};

export type OnDeleteUserSubscription = {
  onDeleteUser?: {
    __typename: 'User';
    id: string;
    name: string;
    email?: string | null;
    username?: string | null;
    bio?: string | null;
    image?: string | null;
    website?: string | null;
    noOfPosts: number;
    noOfFollowers: number;
    noOfFollowing: number;
    Posts?: {
      __typename: 'ModelPostConnection';
      items: Array<{
        __typename: 'Post';
        id: string;
        createdAt: string;
        type: string;
        description?: string | null;
        location?: string | null;
        video?: string | null;
        image?: string | null;
        images?: Array<string> | null;
        noOfComments: number;
        noOfLikes: number;
        userID: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Comments?: {
      __typename: 'ModelCommentConnection';
      items: Array<{
        __typename: 'Comment';
        id: string;
        comment: string;
        createdAt: string;
        userID: string;
        postID: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Likes?: {
      __typename: 'ModelLikeConnection';
      items: Array<{
        __typename: 'Like';
        id: string;
        userID: string;
        postID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Followers?: {
      __typename: 'ModelUserFollowConnection';
      items: Array<{
        __typename: 'UserFollow';
        id: string;
        followerID: string;
        followeeID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    Followings?: {
      __typename: 'ModelUserFollowConnection';
      items: Array<{
        __typename: 'UserFollow';
        id: string;
        followerID: string;
        followeeID: string;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    fcmToken?: string | null;
    Notifications?: {
      __typename: 'ModelNotificationConnection';
      items: Array<{
        __typename: 'Notification';
        id: string;
        createdAt: string;
        readAt: number;
        type: NotificationTypes;
        userID: string;
        actorId: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        notificationPostId?: string | null;
      } | null>;
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnCreateUserFollowSubscriptionVariables = {
  filter?: ModelSubscriptionUserFollowFilterInput | null;
  owner?: string | null;
};

export type OnCreateUserFollowSubscription = {
  onCreateUserFollow?: {
    __typename: 'UserFollow';
    id: string;
    followerID: string;
    followeeID: string;
    Follower?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    Followee?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnUpdateUserFollowSubscriptionVariables = {
  filter?: ModelSubscriptionUserFollowFilterInput | null;
  owner?: string | null;
};

export type OnUpdateUserFollowSubscription = {
  onUpdateUserFollow?: {
    __typename: 'UserFollow';
    id: string;
    followerID: string;
    followeeID: string;
    Follower?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    Followee?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnDeleteUserFollowSubscriptionVariables = {
  filter?: ModelSubscriptionUserFollowFilterInput | null;
  owner?: string | null;
};

export type OnDeleteUserFollowSubscription = {
  onDeleteUserFollow?: {
    __typename: 'UserFollow';
    id: string;
    followerID: string;
    followeeID: string;
    Follower?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    Followee?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnCreateUserFeedPostSubscriptionVariables = {
  filter?: ModelSubscriptionUserFeedPostFilterInput | null;
  owner?: string | null;
};

export type OnCreateUserFeedPostSubscription = {
  onCreateUserFeedPost?: {
    __typename: 'UserFeedPost';
    id: string;
    userID: string;
    postID: string;
    postCreatedAt: string;
    postOwnerID: string;
    Post?: {
      __typename: 'Post';
      id: string;
      createdAt: string;
      type: string;
      description?: string | null;
      location?: string | null;
      video?: string | null;
      image?: string | null;
      images?: Array<string> | null;
      noOfComments: number;
      noOfLikes: number;
      userID: string;
      User?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnUpdateUserFeedPostSubscriptionVariables = {
  filter?: ModelSubscriptionUserFeedPostFilterInput | null;
  owner?: string | null;
};

export type OnUpdateUserFeedPostSubscription = {
  onUpdateUserFeedPost?: {
    __typename: 'UserFeedPost';
    id: string;
    userID: string;
    postID: string;
    postCreatedAt: string;
    postOwnerID: string;
    Post?: {
      __typename: 'Post';
      id: string;
      createdAt: string;
      type: string;
      description?: string | null;
      location?: string | null;
      video?: string | null;
      image?: string | null;
      images?: Array<string> | null;
      noOfComments: number;
      noOfLikes: number;
      userID: string;
      User?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnDeleteUserFeedPostSubscriptionVariables = {
  filter?: ModelSubscriptionUserFeedPostFilterInput | null;
  owner?: string | null;
};

export type OnDeleteUserFeedPostSubscription = {
  onDeleteUserFeedPost?: {
    __typename: 'UserFeedPost';
    id: string;
    userID: string;
    postID: string;
    postCreatedAt: string;
    postOwnerID: string;
    Post?: {
      __typename: 'Post';
      id: string;
      createdAt: string;
      type: string;
      description?: string | null;
      location?: string | null;
      video?: string | null;
      image?: string | null;
      images?: Array<string> | null;
      noOfComments: number;
      noOfLikes: number;
      userID: string;
      User?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    owner?: string | null;
  } | null;
};

export type OnCreateNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationFilterInput | null;
};

export type OnCreateNotificationSubscription = {
  onCreateNotification?: {
    __typename: 'Notification';
    id: string;
    createdAt: string;
    readAt: number;
    type: NotificationTypes;
    userID: string;
    User?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    actorId: string;
    Actor?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    Post?: {
      __typename: 'Post';
      id: string;
      createdAt: string;
      type: string;
      description?: string | null;
      location?: string | null;
      video?: string | null;
      image?: string | null;
      images?: Array<string> | null;
      noOfComments: number;
      noOfLikes: number;
      userID: string;
      User?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    notificationPostId?: string | null;
  } | null;
};

export type OnUpdateNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationFilterInput | null;
};

export type OnUpdateNotificationSubscription = {
  onUpdateNotification?: {
    __typename: 'Notification';
    id: string;
    createdAt: string;
    readAt: number;
    type: NotificationTypes;
    userID: string;
    User?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    actorId: string;
    Actor?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    Post?: {
      __typename: 'Post';
      id: string;
      createdAt: string;
      type: string;
      description?: string | null;
      location?: string | null;
      video?: string | null;
      image?: string | null;
      images?: Array<string> | null;
      noOfComments: number;
      noOfLikes: number;
      userID: string;
      User?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    notificationPostId?: string | null;
  } | null;
};

export type OnDeleteNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationFilterInput | null;
};

export type OnDeleteNotificationSubscription = {
  onDeleteNotification?: {
    __typename: 'Notification';
    id: string;
    createdAt: string;
    readAt: number;
    type: NotificationTypes;
    userID: string;
    User?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    actorId: string;
    Actor?: {
      __typename: 'User';
      id: string;
      name: string;
      email?: string | null;
      username?: string | null;
      bio?: string | null;
      image?: string | null;
      website?: string | null;
      noOfPosts: number;
      noOfFollowers: number;
      noOfFollowing: number;
      Posts?: {
        __typename: 'ModelPostConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followers?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Followings?: {
        __typename: 'ModelUserFollowConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      fcmToken?: string | null;
      Notifications?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    Post?: {
      __typename: 'Post';
      id: string;
      createdAt: string;
      type: string;
      description?: string | null;
      location?: string | null;
      video?: string | null;
      image?: string | null;
      images?: Array<string> | null;
      noOfComments: number;
      noOfLikes: number;
      userID: string;
      User?: {
        __typename: 'User';
        id: string;
        name: string;
        email?: string | null;
        username?: string | null;
        bio?: string | null;
        image?: string | null;
        website?: string | null;
        noOfPosts: number;
        noOfFollowers: number;
        noOfFollowing: number;
        fcmToken?: string | null;
        createdAt: string;
        updatedAt: string;
        _version: number;
        _deleted?: boolean | null;
        _lastChangedAt: number;
        owner?: string | null;
      } | null;
      Comments?: {
        __typename: 'ModelCommentConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      Likes?: {
        __typename: 'ModelLikeConnection';
        nextToken?: string | null;
        startedAt?: number | null;
      } | null;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      owner?: string | null;
    } | null;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    notificationPostId?: string | null;
  } | null;
};
