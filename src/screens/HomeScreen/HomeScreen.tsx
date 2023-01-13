import React, {useRef, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  ViewabilityConfig,
  ViewToken,
} from 'react-native';
import {useQuery} from '@apollo/client';

import FeedPost from '../../components/FeedPost';
import {postsByDate} from './queries';
import {
  PostsByDateQuery,
  PostsByDateQueryVariables,
  ModelSortDirection,
} from '../../API';
import ApiErrorMessage from '../../components/ApiErrorMessage';

const HomeScreen = () => {
  const [activePostId, setActivePostId] = useState<null | string>(null);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const {data, loading, error, refetch, fetchMore} = useQuery<
    PostsByDateQuery,
    PostsByDateQueryVariables
  >(postsByDate, {
    variables: {
      type: 'POST',
      sortDirection: ModelSortDirection.DESC,
      limit: 10,
    },
  });

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
    return (
      <ApiErrorMessage
        title="Error fetching posts"
        message={error.message}
        onRetry={() => refetch()}
      />
    );
  }
  // console.log(data);
  const posts = (data?.postsByDate?.items || []).filter(
    post => !post?._deleted,
  );
  // console.log(posts);
  const nextToken = data?.postsByDate?.nextToken;
  const loadMore = async () => {
    if (!nextToken || isFetchingMore) {
      return;
    }
    setIsFetchingMore(true);
    try {
      await fetchMore({variables: {nextToken}});
      setIsFetchingMore(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <FlatList
      data={posts}
      renderItem={({item}) =>
        item && <FeedPost post={item} isVisible={activePostId === item.id} />
      }
      showsVerticalScrollIndicator={false}
      viewabilityConfig={viewabilityConfig}
      onViewableItemsChanged={onViewableItemsChanged.current}
      onRefresh={refetch}
      refreshing={loading}
      onEndReached={loadMore}
    />
  );
};

export default HomeScreen;
