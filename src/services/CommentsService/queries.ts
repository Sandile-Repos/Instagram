import {gql} from '@apollo/client';

export const createComment = gql`
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      comment
      userID
      postID
      Post {
        id
        noOfComments
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;

export const updatePost = gql`
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      noOfComments
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;

export const getPost = gql`
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      noOfComments
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
