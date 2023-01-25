const AWS = require('aws-sdk'); // no need to install sdk, ity automatically present in any lambda function
const docClient = new AWS.DynamoDB.DocumentClient();

const env = process.env.ENV;
const AppsyncID = process.env.API_INSTAGRAM_GRAPHQLAPIIDOUTPUT;
const UserFollowTableName = `UserFollow-${AppsyncID}-${env}`;
const UserFeedPostTableName = `UserFeedPost-${AppsyncID}-${env}`;

const handle = async record => {
  // Handle post events
  if (record.eventName !== 'INSERT') {
    //if there is no new post inserted on database just return. No need to change anything on update or getting the post. If deleted it will automatically be filtered out
    return;
  }

  //userId of person that posted that post
  const userId = record.dynamodb.NewImage.userID.S;

  // get all the followers of the post owner
  const followers = await getFollowers(userId);
  console.log(followers);

  // push the new post, to their feeds
  await Promise.all(
    followers.map(follower =>
      pushPostToUserFeed(record.dynamodb.NewImage, follower.followerID),
    ),
  );
};

const pushPostToUserFeed = async (postImage, userID) => {
  const date = new Date();
  const timestamp = date.getTime(); //current timestamp in milliseconds
  const dateStr = date.toISOString();

  const Item = {
    id: `${userID}::${postImage.id.S}`, // we can create id's with libraries but we will simplify like this
    postCreatedAt: postImage.createdAt.S,
    postID: postImage.id.S,
    postOwnerID: postImage.userID.S,
    userID,

    owner: `${userID}::${userID}`,

    createdAt: dateStr,
    updatedAt: dateStr,
    _lastChangedAt: timestamp,
    _version: 1,
    __typename: 'UserFeedPost',
  };

  console.log(Item);

  const params = {
    TableName: UserFeedPostTableName,
    Item,
  };

  try {
    await docClient.put(params).promise();
  } catch (error) {
    console.log(error);
  }
};

const getFollowers = async userId => {
  const params = {
    TableName: UserFollowTableName,
    IndexName: 'byFollowee', //We will not query the table but the index to get everyone following one specific user
    KeyConditionExpression: 'followeeID = :followeeID',
    FilterExpression: 'attribute_not_exists(#deleted)', //filter out all the deleted followers
    ExpressionAttributeValues: {
      ':followeeID': userId, //user being followed
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
  }
};

module.exports = handle;
