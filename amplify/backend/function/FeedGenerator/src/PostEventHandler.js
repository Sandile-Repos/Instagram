const AWS = require('aws-sdk'); // no need to install sdk, ity automatically present in any lambda function
const docClient = new AWS.DynamoDB.DocumentClient();

const env = process.env.ENV;
const AppsyncID = process.env.API_INSTAGRAM_GRAPHQLAPIIDOUTPUT;
const UserFollowTableName = `UserFollow-${AppsyncID}-${env}`;

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
