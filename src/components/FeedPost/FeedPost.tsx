import React, {useState} from 'react';
import {Image, View, SafeAreaView, Text, Pressable} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import colors from '../../theme/colors';
import Comment from '../Comment';
import DoublePressable from '../DoublePressable';
import Carousel from '../Carousel';
import {IComment, IPost} from '../../types/models';
import VideoPlayer from '../VideoPlayer';
import {useNavigation} from '@react-navigation/native';
import {FeedNavigationProp} from '../../types/navigation';

// import {FeedNavigationProp} from '../../types/models';
interface IFeedPost {
  post: IPost;
  isVisible: boolean;
}

const FeedPost = (props: IFeedPost) => {
  const {post, isVisible = false} = props;

  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const navigation = useNavigation<FeedNavigationProp>();

  const navigateToUser = () => {
    navigation.navigate('UserProfile', {userId: post.user.id});
  };

  const navigateToComments = () => {
    navigation.navigate('Comments', {postId: post.id});
  };

  const toggleDescriptionExpanded = () => {
    setIsDescriptionExpanded(existingValue => {
      return !existingValue;
    });
  };
  const toggleLiked = () => {
    setIsLiked(like => {
      return !like;
    });
  };

  let content = null;
  if (post.image) {
    content = (
      <DoublePressable onDoublePress={toggleLiked}>
        <Image
          style={styles.image}
          source={{
            uri: post.image,
          }}
        />
      </DoublePressable>
    );
  } else if (post.images) {
    content = <Carousel images={post.images} onDoublePress={toggleLiked} />;
  } else if (post.video) {
    content = (
      <DoublePressable onDoublePress={toggleLiked}>
        <VideoPlayer uri={post.video} paused={!isVisible} />
      </DoublePressable>
    );
  }

  return (
    <SafeAreaView style={styles.post}>
      {/* Header */}

      <View style={styles.header}>
        <Image
          resizeMode="contain"
          style={styles.userAvatar}
          source={{
            uri: post.user.image,
          }}
        />
        <Text onPress={navigateToUser} style={styles.userName}>
          {post.user.username}
        </Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>
      {/* Post description */}
      <Text style={styles.text} numberOfLines={isDescriptionExpanded ? 0 : 2}>
        <Text style={styles.bold}>{post.user.username} </Text>
        {post.description}
      </Text>
      <Text onPress={toggleDescriptionExpanded}>
        {isDescriptionExpanded ? 'less' : 'more'}
      </Text>
      {/* Content */}
      {content}

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Pressable onPress={toggleLiked}>
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
        <Text style={styles.text}>
          Liked by <Text style={styles.bold}>{post.user.username}</Text> and{' '}
          <Text style={styles.bold}>{post.nofLikes}</Text>
        </Text>

        {/* Comments */}

        {post.comments.map((comment: IComment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
        <Text style={styles.bold} onPress={navigateToComments}>
          View all {post.nofComments} comments
        </Text>

        {/* Posted date */}
        <Text
          style={{
            marginBottom: 10,
            marginTop: 1,
          }}>
          {post.createdAt}
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          height: 0.5,
          backgroundColor: 'grey',
        }}
      />
    </SafeAreaView>
  );
};

export default FeedPost;
