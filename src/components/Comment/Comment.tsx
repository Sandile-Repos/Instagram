import React, {useState} from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import dayjs from 'dayjs';

import fonts from '../../theme/fonts';
import colors from '../../theme/colors';
import {Comment as CommentType} from '../../API';
import UserImage from '../UserImage';

interface ICommentProps {
  comment: CommentType;
  includeDetails?: boolean;
  isNew?: boolean;
}

const Comment = ({
  comment,
  includeDetails = false,
  isNew = false,
}: ICommentProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(v => !v);
  };
  return (
    <View style={styles.comment}>
      {includeDetails && (
        <UserImage imageKey={comment.User?.image || undefined} width={40} />
      )}
      <View style={styles.middleColumn}>
        <Text style={styles.commentText}>
          <Text style={styles.bold}>{comment.User?.username}</Text>
          {'  '}
          {comment.comment}
        </Text>
        {includeDetails && (
          <View style={styles.footer}>
            {isNew && <Text style={styles.new}>new</Text>}
            <Text style={styles.footerText}>
              {dayjs(comment.createdAt).fromNow()}
            </Text>
            <Text style={styles.footerText}>5 likes</Text>
            <Text style={styles.footerText}>Reply</Text>
          </View>
        )}
      </View>
      <Pressable onPress={toggleLike} hitSlop={5}>
        {/* hitSlop helps with increasing width of where hit is detected on press */}
        <AntDesign
          name={isLiked ? 'heart' : 'hearto'}
          style={styles.icon}
          color={isLiked ? colors.accent : colors.black}
        />
      </Pressable>
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bold: {
    fontWeight: fonts.weight.bold,
  },
  commentText: {
    lineHeight: 18,
    color: colors.black,
    // marginHorizontal: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  middleColumn: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  footerText: {
    marginRight: 10,
  },
  new: {
    backgroundColor: colors.primary,
    color: colors.white,
    paddingHorizontal: 5,
    marginRight: 5,
    borderRadius: 5,
    overflow: 'hidden',
  },
});
