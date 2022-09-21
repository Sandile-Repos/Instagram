import React, {useRef, useState, useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  ViewabilityConfig,
  ViewToken,
} from 'react-native';
// import {API, graphqlOperation} from 'aws-amplify';
import {useQuery, gql} from '@apollo/client';

// import {listPosts} from '../../graphql/queries';
import FeedPost from '../../components/FeedPost';

export const listPosts = gql`
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        video
        image
        images
        noOfComments
        noOfLikes
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        User {
          id
          name
          username
          image
        }
        Comments {
          items {
            id
            comment
            User {
              id
              name
              username
            }
          }
        }
      }
      nextToken
      startedAt
    }
  }
`;

const HomeScreen = () => {
  const [activePostId, setActivePostId] = useState<null | string>(null);
  // const [posts, setPosts] = useState([]);
  const {data, loading, error} = useQuery(listPosts);

  // const fetchPosts = async () => {
  //   try {
  //     const response = await API.graphql(graphqlOperation(listPosts));
  //     setPosts(response.data.listPosts.items);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   fetchPosts();
  // }, []);

  const viewabilityConfig: ViewabilityConfig = {
    // itemVisibilePercentThreshold: 51, //not working for me
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
  const posts = data.listPosts.items;
  console.log(posts);
  return (
    <FlatList
      data={posts}
      renderItem={({item}) => (
        <FeedPost post={item} isVisible={activePostId === item.id} />
      )}
      showsVerticalScrollIndicator={false}
      viewabilityConfig={viewabilityConfig}
      onViewableItemsChanged={onViewableItemsChanged.current}
    />
  );
};

export default HomeScreen;
