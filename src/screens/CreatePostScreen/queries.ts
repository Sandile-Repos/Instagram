import {gql} from '@apollo/client';

export const createPost = gql`
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      description
      video
      image
      images
      noOfComments
      noOfLikes
      userID
      User {
        id
        noOfPosts
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
