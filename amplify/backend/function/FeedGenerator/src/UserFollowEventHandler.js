const AWS = require('aws-sdk'); // no need to install sdk, ity automatically present in any lambda function
const docClient = new AWS.DynamoDB.DocumentClient();

const env = process.env.ENV;
const AppsyncID = process.env.API_INSTAGRAM_GRAPHQLAPIIDOUTPUT;
const UserFollowTableName = `UserFollow-${AppsyncID}-${env}`;
const UserFeedPostTableName = `UserFeedPost-${AppsyncID}-${env}`;
const PostTableName = `Post-${AppsyncID}-${env}`;

const Batch_SIZE = 25;

const handle = async ({eventName, dynamodb}) => {
  //handle user follow event
  const followeeID = dynamodb.NewImage.followeeID.S;
  const followerID = dynamodb.NewImage.followerID.S;

  if (eventName === 'INSERT') {
    /// Add all the followee's posts to the user (followerID) feed
    await addFolloweesPostsToUserFeed(followerID, followeeID);
  } else if (
    eventName === 'MODIFY' &&
    !dynamodb.OldImage._delete?.BOOL &&
    !!dynamodb.NewImage._deleted?.BOOL
  ) {
    // Remove all the followee's posts from the user (followerID) feed when unfollowing
    await removeUserFeedPostsByFolloweeId(followerID, followeeID);
  }
};

const removeUserFeedPostsByFolloweeId = async (followerID, followeeID) => {
  // get all UserFeedPosts on followerID's feed created by the followeeId
  const userFeedPosts = await getUserFeedPosts(followerID, followeeID);
  console.log(
    `Deleting ${userFeedPosts.length} posts from the user feed.`,
    userFeedPosts,
  );

  //batch delete them from the database
  for (let i = 0; i < userFeedPosts.length; i += Batch_SIZE) {
    const chunk = userFeedPosts.slice(i, i + Batch_SIZE);
    await removeUserFeedPosts(chunk);
  }
};

const getUserFeedPosts = async (followerID, followeeID) => {
  // query DynamoDB table
  const params = {
    TableName: UserFeedPostTableName,
    IndexName: 'byUser', //We will query the table directly on index to be more performance. Index is from Post schema,  userID
    KeyConditionExpression: 'userID = :userID',
    FilterExpression:
      'attribute_not_exists(#deleted) AND postOwnerID = :postOwnerID', //filter undeleted and followeeID. Because we want to filter on both userID and followeeID
    ExpressionAttributeValues: {
      ':userID': followerID, //user being followed id taken from the post
      ':postOwnerID': followeeID,
    },
    ExpressionAttributeNames: {
      '#deleted': '_deleted',
    },
  };
  try {
    const results = await docClient.query(params).promise();
    return results.Items;
  } catch (error) {
    console.log(error);
    return;
  }
};

const removeUserFeedPosts = async items => {
  //BatchWriteItem - write or delete multiple items at the same time - increases the performance since multiple items are written or updated
  const params = {
    RequestItems: {
      [UserFeedPostTableName]: items.map(generateDeleteRequest),
    },
  };
  try {
    const results = await docClient.batchWrite(params).promise();
    return results.Items;
  } catch (error) {
    console.log(error);
    return;
  }
};

const generateDeleteRequest = userFeedPost => {
  return {
    DeleteRequest: {
      Key: {
        id: userFeedPost.id,
      },
    },
  };
};

const addFolloweesPostsToUserFeed = async (followerID, followeeID) => {
  //query all the Followee post
  const posts = await getAllPostsByUserId(followeeID);
  console.log(`Adding ${posts.length} posts to User feed`, posts);

  // add all the posts to the UserFeed
  for (let i = 0; i < posts.length; i += Batch_SIZE) {
    const chunk = posts.slice(i, i + Batch_SIZE);
    await addPostsToUserFeed(followerID, chunk);
  }
};

const addPostsToUserFeed = async (userID, posts) => {
  //BatchWriteItem - write or delete multiple items at the same time - increases the performance since multiple items are written or updated
  const params = {
    RequestItems: {
      [UserFeedPostTableName]: posts.map(post =>
        generatePutRequest(post, userID),
      ),
    },
  };
  try {
    const results = await docClient.batchWrite(params).promise();
    return results.Items;
  } catch (error) {
    console.log(error);
    return;
  }
};

//UserFeedPost attributes from dynamoDB - for structure of object
// {
//  "id": "c2da36aa-e61d-4f37-982e-eaaf18de0b44::11c87165-5bf6-4a07-af7c-383cba77fd0a",
//  "createdAt": "2023-01-25T14:29:11.989Z",
//  "owner": "c2da36aa-e61d-4f37-982e-eaaf18de0b44::c2da36aa-e61d-4f37-982e-eaaf18de0b44",
//  "postCreatedAt": "2023-01-25T14:29:10.342Z",
//  "postID": "11c87165-5bf6-4a07-af7c-383cba77fd0a",
//  "postOwnerID": "3c14a55a-dd4a-4efd-84a3-1f8ae0886ac4",
//  "updatedAt": "2023-01-25T14:29:11.989Z",
//  "userID": "c2da36aa-e61d-4f37-982e-eaaf18de0b44",
//  "_lastChangedAt": 1674656951989,
//  "_version": 1,
//  "__typename": "UserFeedPost"
// }
const generatePutRequest = (post, userID) => {
  const date = new Date();
  const timestamp = date.getTime(); //current timestamp in milliseconds
  const dateStr = date.toISOString();
  return {
    PutRequest: {
      Item: {
        id: `${userID}::${post.id}`,
        owner: `${userID}::${userID}`,

        postCreatedAt: post.createdAt,
        postID: post.id,
        postOwnerID: post.userID,
        userID,

        _lastChangedAt: timestamp,
        createdAt: dateStr,
        updatedAt: dateStr,

        _version: 1,
        __typename: 'UserFeedPost',
      },
    },
  };
};

const getAllPostsByUserId = async userID => {
  // query DynamoDB table
  const params = {
    TableName: PostTableName,
    IndexName: 'byUser', //We will query the table directly on index to be more performance. Index is from Post schema,  userID
    KeyConditionExpression: 'userID = :userID',
    FilterExpression: 'attribute_not_exists(#deleted)', //filter out all the deleted followers
    ExpressionAttributeValues: {
      ':userID': userID, //user being followed id taken from the post
    },
    ExpressionAttributeNames: {
      '#deleted': '_deleted',
    },
  };
  try {
    const results = await docClient.query(params).promise();
    return results.Items;
  } catch (error) {
    console.log(error);
    return;
  }
};

module.exports = handle;
