// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const NotificationTypes = {
  "NEW_FOLLOWER": "NEW_FOLLOWER",
  "NEW_LIKE": "NEW_LIKE",
  "NEW_COMMENT": "NEW_COMMENT"
};

const { Comment, User, Post, Like, UserFollow, Notification, UserFeedPost } = initSchema(schema);

export {
  Comment,
  User,
  Post,
  Like,
  UserFollow,
  Notification,
  UserFeedPost,
  NotificationTypes
};