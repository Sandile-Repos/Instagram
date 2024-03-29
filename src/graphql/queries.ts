/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
      id
      userID
      postID
      User {
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
        Posts {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      Post {
        id
        createdAt
        type
        description
        location
        video
        image
        images
        noOfComments
        noOfLikes
        userID
        User {
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
          owner
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        postID
        User {
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
          owner
        }
        Post {
          id
          createdAt
          type
          description
          location
          video
          image
          images
          noOfComments
          noOfLikes
          userID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLikes = /* GraphQL */ `
  query SyncLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLikes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userID
        postID
        User {
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
          owner
        }
        Post {
          id
          createdAt
          type
          description
          location
          video
          image
          images
          noOfComments
          noOfLikes
          userID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const likesForPostByUser = /* GraphQL */ `
  query LikesForPostByUser(
    $postID: ID!
    $userID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    LikesForPostByUser(
      postID: $postID
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        postID
        User {
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
          owner
        }
        Post {
          id
          createdAt
          type
          description
          location
          video
          image
          images
          noOfComments
          noOfLikes
          userID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      comment
      createdAt
      userID
      postID
      User {
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
        Posts {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      Post {
        id
        createdAt
        type
        description
        location
        video
        image
        images
        noOfComments
        noOfLikes
        userID
        User {
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
          owner
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        comment
        createdAt
        userID
        postID
        User {
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
          owner
        }
        Post {
          id
          createdAt
          type
          description
          location
          video
          image
          images
          noOfComments
          noOfLikes
          userID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncComments = /* GraphQL */ `
  query SyncComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        comment
        createdAt
        userID
        postID
        User {
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
          owner
        }
        Post {
          id
          createdAt
          type
          description
          location
          video
          image
          images
          noOfComments
          noOfLikes
          userID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const commentsByPost = /* GraphQL */ `
  query CommentsByPost(
    $postID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByPost(
      postID: $postID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        comment
        createdAt
        userID
        postID
        User {
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
          owner
        }
        Post {
          id
          createdAt
          type
          description
          location
          video
          image
          images
          noOfComments
          noOfLikes
          userID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      createdAt
      type
      description
      location
      video
      image
      images
      noOfComments
      noOfLikes
      userID
      User {
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
        Posts {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      Comments {
        items {
          id
          comment
          createdAt
          userID
          postID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      Likes {
        items {
          id
          userID
          postID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        type
        description
        location
        video
        image
        images
        noOfComments
        noOfLikes
        userID
        User {
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
          owner
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPosts = /* GraphQL */ `
  query SyncPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        createdAt
        type
        description
        location
        video
        image
        images
        noOfComments
        noOfLikes
        userID
        User {
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
          owner
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const postsByDate = /* GraphQL */ `
  query PostsByDate(
    $type: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByDate(
      type: $type
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
        description
        location
        video
        image
        images
        noOfComments
        noOfLikes
        userID
        User {
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
          owner
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
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
      Posts {
        items {
          id
          createdAt
          type
          description
          location
          video
          image
          images
          noOfComments
          noOfLikes
          userID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      Comments {
        items {
          id
          comment
          createdAt
          userID
          postID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      Likes {
        items {
          id
          userID
          postID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        Posts {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        Posts {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const userByUsername = /* GraphQL */ `
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
        name
        email
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
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
