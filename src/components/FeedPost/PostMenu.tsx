import {Alert, StyleSheet, Text} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers,
} from 'react-native-popup-menu';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {useMutation} from '@apollo/client';
import {deletePost} from './queries';
import {DeletePostMutation, DeletePostMutationVariables, Post} from '../../API';

interface IPost {
  post: Post;
}
const PostMenu = ({post}: IPost) => {
  const [doDeletePost] = useMutation<
    DeletePostMutation,
    DeletePostMutationVariables
  >(deletePost, {variables: {input: {id: post.id, _version: post._version}}});
  const startDeletingPost = async () => {
    const response = await doDeletePost();
    console.log(response);
  };
  const onDeleteOptionPressed = () => {
    Alert.alert('Are you sure?', 'Deleting a post is permanent', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete Post',
        style: 'destructive',
        onPress: startDeletingPost,
      },
    ]);
  };
  const onEditOptionPressed = () => {};
  return (
    <Menu renderer={renderers.Popover} style={styles.threeDots}>
      <MenuTrigger>
        <Entypo name="dots-three-horizontal" size={16} />
      </MenuTrigger>
      <MenuOptions>
        <MenuOption onSelect={() => Alert.alert('Reporting')}>
          <Text style={styles.optionText}>Reporting</Text>
        </MenuOption>

        <MenuOption onSelect={onDeleteOptionPressed}>
          <Text style={[styles.optionText, {color: 'red'}]}>Delete</Text>
        </MenuOption>
        <MenuOption onSelect={onEditOptionPressed}>
          <Text style={styles.optionText}>Edit</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
};

const styles = StyleSheet.create({
  threeDots: {
    marginLeft: 'auto',
  },
  optionText: {
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
  },
});

export default PostMenu;