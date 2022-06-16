import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import FeedPost from './src/components/FeedPost';

const App = () => {
  return (
    <ScrollView style={styles.app}>
      <FeedPost />
      <FeedPost />
      <FeedPost />
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
