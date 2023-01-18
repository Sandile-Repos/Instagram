import React, {useState} from 'react';
import {View, SafeAreaView, Text, Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import colors from '../../theme/colors';
import Comment from '../Comment';
import DoublePressable from '../DoublePressable';
import {useNavigation} from '@react-navigation/native';
import {FeedNavigationProp} from '../../types/navigation';
import {Post} from '../../API';
import PostMenu from './PostMenu';
import useLikeService from '../../services/LikeService';
import dayjs from 'dayjs';
import Content from './Content';
import UserImage from '../UserImage';
interface IFeedPost {
  post: Post;
  isVisible: boolean;
}

const FeedPost = (props: IFeedPost) => {
  const {post, isVisible = false} = props;
  const {toggleLike, isLiked} = useLikeService(post);

  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const postLikes = post.Likes?.items.filter(like => !like?._deleted) || [];

  const navigation = useNavigation<FeedNavigationProp>();

  const navigateToUser = () => {
    if (post.User) {
      navigation.navigate('UserProfile', {
        screen: 'Profile',
        params: {userId: post.User.id},
      });
    }
  };

  const navigateToComments = () => {
    navigation.navigate('Comments', {postId: post.id});
  };
  const navigateToLikes = () => {
    navigation.navigate('PostLikes', {id: post.id});
  };

  const toggleDescriptionExpanded = () => {
    setIsDescriptionExpanded(existingValue => {
      return !existingValue;
    });
  };

  return (
    <SafeAreaView style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <UserImage
          imageKey={post.User?.image || undefined}
          imageContainer={true}
        />
        <View>
          <Text onPress={navigateToUser} style={styles.userName}>
            {post.User?.username}
          </Text>
          {post.location && (
            <Text style={styles.location}>{post.location}</Text>
          )}
        </View>
        <PostMenu post={post} />
      </View>

      <DoublePressable onDoublePress={toggleLike}>
        <Content post={post} isVisible={isVisible} />
      </DoublePressable>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Pressable onPress={toggleLike}>
            <AntDesign
              name={isLiked ? 'heart' : 'hearto'}
              size={24}
              style={styles.icon}
              color={isLiked ? colors.accent : colors.black}
            />
          </Pressable>
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{marginLeft: 'auto'}}
            color={colors.black}
          />
        </View>

        {/* likes */}
        {postLikes.length === 0 ? (
          <Text>Be the first to like the post</Text>
        ) : (
          <Text style={styles.text} onPress={navigateToLikes}>
            Liked by{' '}
            <Text style={styles.bold}>{postLikes[0]?.User?.username}</Text> and{' '}
            <Text style={styles.bold}>
              {post.noOfLikes - 1}{' '}
              {postLikes.length > 2 || postLikes.length < 2
                ? 'others'
                : 'other'}
            </Text>
          </Text>
        )}

        {/* Post description */}
        <Text style={styles.text} numberOfLines={isDescriptionExpanded ? 0 : 2}>
          <Text style={styles.bold}>{post.User?.username} </Text>
          {post.description}
        </Text>
        <Text onPress={toggleDescriptionExpanded}>
          {isDescriptionExpanded ? 'less' : 'more'}
        </Text>

        {/* Comments */}
        <Text onPress={navigateToComments}>
          View all {post.noOfComments} comments
        </Text>
        {(post.Comments?.items || []).map(
          comment => comment && <Comment key={comment.id} comment={comment} />,
        )}

        {/* Posted date */}
        <Text>{dayjs(post.createdAt).fromNow()}</Text>
      </View>
    </SafeAreaView>
  );
};

export default FeedPost;
