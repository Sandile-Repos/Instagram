import React, {useRef, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  ViewabilityConfig,
  ViewToken,
} from 'react-native';
import {useQuery} from '@apollo/client';

import FeedPost from '../../components/FeedPost';
import {listPosts} from './queries';
import {ListPostsQuery, ListPostsQueryVariables} from '../../API';

const HomeScreen = () => {
  const [activePostId, setActivePostId] = useState<null | string>(null);
  const {data, loading, error} = useQuery<
    ListPostsQuery,
    ListPostsQueryVariables
  >(listPosts);

  const viewabilityConfig: ViewabilityConfig = {
    viewAreaCoveragePercentThreshold: 51,
  };
  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems.length > 0) {
        setActivePostId(viewableItems[0].item.id);
      }
    },
  );

  if (loading) {
    return <ActivityIndicator size={'large'} />;
  }
  if (error) {
    return <Text>{error.message}</Text>;
  }
  // console.log(data);
  const posts = data?.listPosts?.items || [];
  console.log(posts);
  return (
    <FlatList
      data={posts}
      renderItem={({item}) =>
        item && <FeedPost post={item} isVisible={activePostId === item.id} />
      }
      showsVerticalScrollIndicator={false}
      viewabilityConfig={viewabilityConfig}
      onViewableItemsChanged={onViewableItemsChanged.current}
    />
  );
};

export default HomeScreen;
