import {gql} from '@apollo/client';

export const getUser = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      username
      bio
      image
      website
      noOfPosts
      noOfFollowers
      noOfFollowing
      Posts {
        nextToken
        startedAt
        items {
          id
          image
          images
          video
        }
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
