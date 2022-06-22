import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import FeedPost from './src/components/FeedPost';
import posts from './src/assets/data/posts.json';
import {IPost} from './src/types/models';

const App = () => {
  return (
    <ScrollView style={styles.app}>
      {posts.map((post: IPost) => (
        <FeedPost key={post.id} post={post} />
      ))}
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
