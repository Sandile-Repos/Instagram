import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import useCommentsService from '../../services/CommentsService';

interface IInput {
  postId: string;
}

const Input = ({postId}: IInput) => {
  const [newComment, setNewComment] = useState('');

  const {onCreateComment} = useCommentsService(postId);

  const insects = useSafeAreaInsets();

  const onPost = () => {
    onCreateComment(newComment);
    setNewComment('');
  };

  return (
    <View style={[styles.root, {paddingBottom: insects.bottom}]}>
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
      <Text
        onPress={onPost}
        //button is in absolute position, therefore the need to adjust it if there is an insects bottom
        style={[styles.button, {bottom: insects.bottom + 7}]}>
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
