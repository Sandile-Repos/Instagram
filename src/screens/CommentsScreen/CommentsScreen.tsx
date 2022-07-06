import React from 'react';
import {FlatList, Text, View} from 'react-native';
import comments from '../../assets/data/comments.json';
import Comment from '../../components//Comment';
import Input from './Input';

const CommentsScreen = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1}}>
      <FlatList
        data={comments}
        renderItem={({item}) => <Comment comment={item} includeDetails />}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{padding: 10}}
      />
      <Input />
    </View>
  );
};

export default CommentsScreen;
