import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
// import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

export type RootNavigatorParamList = {
  Home: undefined; //BottomTabNavigator
  Post: {id: string}; //PostScreen
  Comments: {postId: string}; //CommentsScreen
  Auth: undefined; // no parameters therefore undefined //AuthStackNavigator
  EditProfile: undefined; //EditProfileScreen
};

export type CommentsRouteProp = RouteProp<RootNavigatorParamList, 'Comments'>;

export type BottomTabNavigatorParamList = {
  HomeStack: undefined; //HomeStackNavigator
  Search: undefined; //SearchTabNavigator
  Upload: undefined; //UploadStackNavigator
  Notifications: undefined; //NotificationScreen
  MyProfile: undefined; //ProfileStackNavigator
};

// export type MyProfileNavigationProp = BottomTabNavigationProp<
//   BottomTabNavigatorParamList,
//   'MyProfile'
// >;

export type MyProfileRouteProp = RouteProp<
  BottomTabNavigatorParamList,
  'MyProfile'
>;

export type HomeStackNavigatorParamList = {
  Feed: undefined; // HomeScreen
  // UserProfile: {userId: string};
  UserProfile: NavigatorScreenParams<ProfileStackNavigatorParamList>; // ProfileStackNavigator
  UpdatePost: {id: string}; // UpdatePostScreen
  PostLikes: {id: string}; // PostLikesScreen
};

export type FeedNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'Feed'
>;

export type UserProfileNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'UserProfile'
>;

export type UserProfileRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  'UserProfile'
>;

export type UpdatePostRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  'UpdatePost'
>;

export type PostLikesRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  'PostLikes'
>;

export type UserFollowTabNavigatorParamList = {
  Followers: undefined; // UserFollowers
  Followings: undefined; // UserFollowings
};

export type ProfileStackNavigatorParamList = {
  // Profile: undefined;
  Profile: {userId: string}; // ProfileScreen
  'Edit Profile': undefined; // EditProfileScreen
  UserFollow: {
    id: string;
  } & NavigatorScreenParams<UserFollowTabNavigatorParamList>; // UserFollowTabNavigator
};

export type ProfileNavigationProp = NativeStackNavigationProp<
  ProfileStackNavigatorParamList,
  'Profile'
>;

export type UserFollowScreenProps = NativeStackScreenProps<
  ProfileStackNavigatorParamList,
  'UserFollow'
>;

export type SearchTabNavigatorParamList = {
  Users: undefined; // UserSearchScreen
  Posts: undefined; // HomeScreen
};

export type UploadStackNavigatorParamList = {
  Camera: undefined; // CameraScreen
  Create: {
    image?: string;
    images?: string[];
    video?: string;
  }; // CreatePostScreen
};

export type CameraNavigationProp = NativeStackNavigationProp<
  UploadStackNavigatorParamList,
  'Camera'
>;

export type CreateNavigationProp = NativeStackNavigationProp<
  UploadStackNavigatorParamList,
  'Create'
>;

export type CreateRouteProp = RouteProp<
  UploadStackNavigatorParamList,
  'Create'
>;

export type AuthStackNavigatorParamList = {
  'Sign in': undefined; // SignInScreen
  'Sign up': undefined; // SignUpScreen
  'Confirm email': {email?: string}; // ConfirmEmailScreen
  'Forgot password': undefined; // ForgotPasswordScreen
  'New password': undefined; // NewPasswordScreen
};

export type SignInNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'Sign in'
>;

export type SignUpNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'Sign up'
>;

export type ForgotPasswordNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'Forgot password'
>;

export type NewPasswordNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'New password'
>;

export type ConfirmEmailNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'Confirm email'
>;
export type ConfirmEmailRouteProp = RouteProp<
  AuthStackNavigatorParamList,
  'Confirm email'
>;
