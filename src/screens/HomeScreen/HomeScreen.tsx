import React from 'react';
import {FlatList} from 'react-native';
import FeedPost from '../../components/FeedPost';
import posts from '../../assets/data/posts.json';

const HomeScreen = () => {
  return (
    <FlatList
      data={posts}
      // renderItem={data => <FeedPost post={data.item} />}
      renderItem={({item}) => <FeedPost post={item} />}
      // keyExtractor={item => {
      //   return `post-${item.createdAt}`;
      // }} // import if you do not have unique id or key property in your data otherwise it is automatically assigned from data
      showsVerticalScrollIndicator={false}
    />
  );
};

export default HomeScreen;
