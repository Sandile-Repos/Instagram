import {gql} from '@apollo/client';

export const userNotification = gql`
  query UserNotification(
    $userID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userNotification(
      userID: $userID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        type
        userID
        actorId
        readAt
        Actor {
          id
          name
          username
          image
          _version
          _deleted
          _lastChangedAt
        }
        Post {
          id
          image
          images
          video
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        notificationPostId
      }
      nextToken
      startedAt
    }
  }
`;
