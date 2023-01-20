import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

type CommentMetaData = {
  readOnlyFields: 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostMetaData = {
  readOnlyFields: 'updatedAt';
}

type LikeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserFollowMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserFeedPostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerComment = {
  readonly id: string;
  readonly comment: string;
  readonly createdAt: string;
  readonly User?: User | null;
  readonly Post?: Post | null;
  readonly updatedAt?: string | null;
}

type LazyComment = {
  readonly id: string;
  readonly comment: string;
  readonly createdAt: string;
  readonly User: AsyncItem<User | undefined>;
  readonly Post: AsyncItem<Post | undefined>;
  readonly updatedAt?: string | null;
}

export declare type Comment = LazyLoading extends LazyLoadingDisabled ? EagerComment : LazyComment

export declare const Comment: (new (init: ModelInit<Comment, CommentMetaData>) => Comment) & {
  copyOf(source: Comment, mutator: (draft: MutableModel<Comment, CommentMetaData>) => MutableModel<Comment, CommentMetaData> | void): Comment;
}

type EagerUser = {
  readonly id: string;
  readonly name: string;
  readonly email?: string | null;
  readonly username?: string | null;
  readonly bio?: string | null;
  readonly image?: string | null;
  readonly website?: string | null;
  readonly noOfPosts: number;
  readonly noOfFollowers: number;
  readonly noOfFollowing: number;
  readonly Posts?: (Post | null)[] | null;
  readonly Comments?: (Comment | null)[] | null;
  readonly Likes?: (Like | null)[] | null;
  readonly Followers?: (UserFollow | null)[] | null;
  readonly Followings?: (UserFollow | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly id: string;
  readonly name: string;
  readonly email?: string | null;
  readonly username?: string | null;
  readonly bio?: string | null;
  readonly image?: string | null;
  readonly website?: string | null;
  readonly noOfPosts: number;
  readonly noOfFollowers: number;
  readonly noOfFollowing: number;
  readonly Posts: AsyncCollection<Post>;
  readonly Comments: AsyncCollection<Comment>;
  readonly Likes: AsyncCollection<Like>;
  readonly Followers: AsyncCollection<UserFollow>;
  readonly Followings: AsyncCollection<UserFollow>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User, UserMetaData>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

type EagerPost = {
  readonly id: string;
  readonly createdAt: string;
  readonly type: string;
  readonly description?: string | null;
  readonly location?: string | null;
  readonly video?: string | null;
  readonly image?: string | null;
  readonly images?: string[] | null;
  readonly noOfComments: number;
  readonly noOfLikes: number;
  readonly User?: User | null;
  readonly Comments?: (Comment | null)[] | null;
  readonly Likes?: (Like | null)[] | null;
  readonly updatedAt?: string | null;
}

type LazyPost = {
  readonly id: string;
  readonly createdAt: string;
  readonly type: string;
  readonly description?: string | null;
  readonly location?: string | null;
  readonly video?: string | null;
  readonly image?: string | null;
  readonly images?: string[] | null;
  readonly noOfComments: number;
  readonly noOfLikes: number;
  readonly User: AsyncItem<User | undefined>;
  readonly Comments: AsyncCollection<Comment>;
  readonly Likes: AsyncCollection<Like>;
  readonly updatedAt?: string | null;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post, PostMetaData>) => Post) & {
  copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}

type EagerLike = {
  readonly id: string;
  readonly User?: User | null;
  readonly Post?: Post | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLike = {
  readonly id: string;
  readonly User: AsyncItem<User | undefined>;
  readonly Post: AsyncItem<Post | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Like = LazyLoading extends LazyLoadingDisabled ? EagerLike : LazyLike

export declare const Like: (new (init: ModelInit<Like, LikeMetaData>) => Like) & {
  copyOf(source: Like, mutator: (draft: MutableModel<Like, LikeMetaData>) => MutableModel<Like, LikeMetaData> | void): Like;
}

type EagerUserFollow = {
  readonly id: string;
  readonly Follower?: User | null;
  readonly Followee?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserFollow = {
  readonly id: string;
  readonly Follower: AsyncItem<User | undefined>;
  readonly Followee: AsyncItem<User | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserFollow = LazyLoading extends LazyLoadingDisabled ? EagerUserFollow : LazyUserFollow

export declare const UserFollow: (new (init: ModelInit<UserFollow, UserFollowMetaData>) => UserFollow) & {
  copyOf(source: UserFollow, mutator: (draft: MutableModel<UserFollow, UserFollowMetaData>) => MutableModel<UserFollow, UserFollowMetaData> | void): UserFollow;
}

type EagerUserFeedPost = {
  readonly id: string;
  readonly userID: string;
  readonly postID: string;
  readonly postCreatedAt: string;
  readonly postOwnerID: string;
  readonly Post?: Post | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserFeedPost = {
  readonly id: string;
  readonly userID: string;
  readonly postID: string;
  readonly postCreatedAt: string;
  readonly postOwnerID: string;
  readonly Post: AsyncItem<Post | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserFeedPost = LazyLoading extends LazyLoadingDisabled ? EagerUserFeedPost : LazyUserFeedPost

export declare const UserFeedPost: (new (init: ModelInit<UserFeedPost, UserFeedPostMetaData>) => UserFeedPost) & {
  copyOf(source: UserFeedPost, mutator: (draft: MutableModel<UserFeedPost, UserFeedPostMetaData>) => MutableModel<UserFeedPost, UserFeedPostMetaData> | void): UserFeedPost;
}