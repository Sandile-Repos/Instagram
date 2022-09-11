import React, {useRef, useState, useEffect} from 'react';
import {FlatList, ViewabilityConfig, ViewToken} from 'react-native';
import {API, graphqlOperation} from 'aws-amplify';
// import {listPosts} from '../../graphql/queries';
import FeedPost from '../../components/FeedPost';

export const listPosts = /* GraphQL */ `
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
  const [activePostId, setActivePostId] = useState<string | null>(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await API.graphql(graphqlOperation(listPosts));
        // const response = (await API.graphql(graphqlOperation(listPosts))) as {
        //   data: listPosts;
        //   errors: any[];
        // };
        if (response) {
          const item = response.data.listPosts.items;
          setPosts(item);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);

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
