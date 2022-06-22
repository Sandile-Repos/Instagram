import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
// import FeedPost from './src/components/FeedPost';
// import posts from './src/assets/data/posts.json';
// import {IPost} from './src/types/models';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';

const App = () => {
  return (
    <View style={styles.app}>
      {/* {posts.map((post: IPost) => (
        <FeedPost key={post.id} post={post} />
      ))} */}
      <HomeScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
