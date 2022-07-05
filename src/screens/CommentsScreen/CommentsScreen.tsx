import React from 'react';
import {FlatList, Text, View} from 'react-native';
import comments from '../../assets/data/comments.json';
import Comment from '../../components//Comment';

const CommentsScreen = () => {
  return (
    <View>
      <FlatList
        data={comments}
        renderItem={({item}) => <Comment comment={item} includeDetails />}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{padding: 10}}
      />
    </View>
  );
};

export default CommentsScreen;
