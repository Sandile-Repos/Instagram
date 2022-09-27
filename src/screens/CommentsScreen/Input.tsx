import React, {useState} from 'react';
import {useMutation} from '@apollo/client';
import {StyleSheet, Text, View, TextInput, Image, Alert} from 'react-native';
import {CreateCommentMutation, CreateCommentMutationVariables} from '../../API';
import {commentsByPost, createComment} from './queries';

import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import {useAuthContext} from '../../contexts/AuthContext';

interface IInput {
  postId: string;
}

const Input = ({postId}: IInput) => {
  const [newComment, setNewComment] = useState('');
  const {userId} = useAuthContext();
  const [doCreateComment] = useMutation<
    CreateCommentMutation,
    CreateCommentMutationVariables
  >(createComment, {refetchQueries: ['CommentsByPost']});

  const onPost = async () => {
    try {
      if (newComment === '') {
        Alert.alert('Please right a comment before posting');
        return;
      }
      await doCreateComment({
        variables: {
          input: {
            comment: newComment,
            userID: userId,
            postID: postId,
          },
        },
      });
    } catch (e) {
      Alert.alert('Error submitting the comment', (e as Error).message);
    }

    setNewComment('');
  };

  return (
    <View style={styles.root}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
        }}
        style={styles.image}
      />
      <TextInput
        value={newComment}
        // onChangeText={newText => setNewComment(newText)}
        onChangeText={setNewComment}
        placeholder="Write your comment..."
        style={styles.input}
        multiline
      />
      <Text onPress={onPost} style={styles.button}>
        POST
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding: 5,
    borderTopWidth: 1,
    borderColor: colors.lightgrey,
    alignItems: 'flex-end', // aligns image to the end/ bottom
  },
  image: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
  },
  input: {
    flex: 1,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 5,
    paddingRight: 50,
    paddingHorizontal: 10,
    marginLeft: 5,
  },
  button: {
    position: 'absolute',
    right: 15,
    bottom: 15,
    fontSize: fonts.size.s,
    fontWeight: fonts.weight.full,
    color: colors.primary,
  },
});

export default Input;
