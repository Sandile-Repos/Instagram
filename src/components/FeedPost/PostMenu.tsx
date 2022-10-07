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
import {useAuthContext} from '../../contexts/AuthContext';
import {useNavigation} from '@react-navigation/native';
import {FeedNavigationProp} from '../../types/navigation';
import {Storage} from 'aws-amplify';

interface IPost {
  post: Post;
}
const PostMenu = ({post}: IPost) => {
  //navigating from Feed of HomeStackNavigation
  const navigation = useNavigation<FeedNavigationProp>();

  const [doDeletePost] = useMutation<
    DeletePostMutation,
    DeletePostMutationVariables
  >(deletePost, {variables: {input: {id: post.id, _version: post._version}}});

  const {userId} = useAuthContext();
  const isMyPost = userId === post.userID; //A more secured method with authendicated users later
  // const isMyPost = true;

  const startDeletingPost = async () => {
    if (post.image) {
      await Storage.remove(post.image);
    }
    if (post.images) {
      await Promise.all(post.images.map(img => Storage.remove(img)));
    }
    if (post.video) {
      await Storage.remove(post.video);
    }
    try {
      await doDeletePost();
      // console.log(response);
    } catch (e) {
      Alert.alert('Failed to delete post', (e as Error).message);
    }
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

  const onEditOptionPressed = () => {
    navigation.navigate('UpdatePost', {id: post.id});
  };
  return (
    <Menu renderer={renderers.Popover} style={styles.threeDots}>
      <MenuTrigger>
        <Entypo name="dots-three-horizontal" size={16} />
      </MenuTrigger>
      <MenuOptions>
        <MenuOption onSelect={() => Alert.alert('Reporting')}>
          <Text style={styles.optionText}>Reporting</Text>
        </MenuOption>
        {isMyPost && (
          <>
            <MenuOption onSelect={onDeleteOptionPressed}>
              <Text style={[styles.optionText, {color: 'red'}]}>Delete</Text>
            </MenuOption>
            <MenuOption onSelect={onEditOptionPressed}>
              <Text style={styles.optionText}>Edit</Text>
            </MenuOption>
          </>
        )}
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
