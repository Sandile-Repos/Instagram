import {useRoute} from '@react-navigation/native';
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import comments from '../../assets/data/comments.json';
import Comment from '../../components//Comment';
import {CommentsRouteProp} from '../../types/navigation';
import Input from './Input';

const CommentsScreen = () => {
  const route = useRoute<CommentsRouteProp>();
  const {postId} = route.params;

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1}}>
      <FlatList
        data={comments}
        renderItem={({item}) => <Comment comment={item} includeDetails />}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{padding: 10}}
      />
      <Input postId={postId} />
    </View>
  );
};

export default CommentsScreen;
