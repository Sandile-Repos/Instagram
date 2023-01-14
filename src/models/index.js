// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Comment, User, Post, Like, UserFollow } = initSchema(schema);

export {
  Comment,
  User,
  Post,
  Like,
  UserFollow
};