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
        readAt
      }
      nextToken
      startedAt
    }
  }
`;

export const onCreateNotification = gql`
  subscription OnCreateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onCreateNotification(filter: $filter) {
      id
      createdAt
      type
      userID
      actorId
      readAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      notificationPostId
    }
  }
`;
