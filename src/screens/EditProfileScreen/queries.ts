import {gql} from '@apollo/client';

export const getUser = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      username
      bio
      image
      website
      noOfPosts
      noOfFollowers
      noOfFollowing
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;

export const updateUser = gql`
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      username
      bio
      image
      website
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;

export const deleteUser = gql`
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id

      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;

export const userByUsername = gql`
  query UserByUsername(
    $username: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByUsername(
      username: $username
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        username
      }
      nextToken
      startedAt
    }
  }
`;
