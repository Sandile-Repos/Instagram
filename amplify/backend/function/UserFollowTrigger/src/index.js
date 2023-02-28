/* Amplify Params - DO NOT EDIT
	API_INSTAGRAM_GRAPHQLAPIENDPOINTOUTPUT
	API_INSTAGRAM_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const {v4: uuidv4} = require('uuid');

const AWS = require('aws-sdk'); // no need to install sdk, ity automatically present in any lambda function
const docClient = new AWS.DynamoDB.DocumentClient();

const env = process.env.ENV;
const AppsyncID = process.env.API_INSTAGRAM_GRAPHQLAPIIDOUTPUT;
const UserTableName = `User-${AppsyncID}-${env}`;
const NotificationTableName = `Notification-${AppsyncID}-${env}`;

exports.handler = async event => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  //event.Records.array.forEach(handleEvent); //For each record call the handleEvent function but cant use this one since we cant use await in forEach function(forEach runs in parallel)
  for (const records of event.Records) {
    await handleEvent(records); // we want to execute the records in sequence(one after each other) so that increment events don't overlap on each other
  }
  return Promise.resolve('Successfully processed DynamoDB record');
};

const handleEvent = async ({eventID, eventName, dynamodb}) => {
  console.log(eventID);
  console.log(eventName);
  console.log('DynamoDB Record: %j', dynamodb);

  const followeeID = dynamodb.NewImage.followeeID.S;
  const followerID = dynamodb.NewImage.followerID.S;

  if (eventName === 'INSERT') {
    //user A follow user B
    //increase for the user being followed
    await increaseUserField(followeeID, 'noOfFollowers', 1); // noOfFollowers is field from User Model

    //increase for the user that is following
    await increaseUserField(followerID, 'noOfFollowing', 1); // noOfFollowings is field from User Model

    await createFollowNotification(followeeID, followerID);
  } else if (
    eventName === 'MODIFY' &&
    !dynamodb.OldImage._delete?.BOOL && // where oldImage doesn't have deleted ie is false. not deleted
    !!dynamodb.NewImage._deleted?.BOOL // where newImage deleted is true
  ) {
    //decrease for the user being followed
    await increaseUserField(followeeID, 'noOfFollowers', -1); // noOfFollowers is field from User Model

    //decrease for the user that is following
    await increaseUserField(followerID, 'noOfFollowing', -1); // noOfFollowings is field from User Model
  }
};

//reusable function to increase or decrease follower
const increaseUserField = async (userId, field, value) => {
  const params = {
    TableName: UserTableName,
    Key: {id: userId},
    UpdateExpression: 'ADD #field :inc, #version :version_inc',
    ExpressionAttributeValues: {':inc': value, ':version_inc': 1},
    ExpressionAttributeNames: {'#field': field, '#version': '_version'},
  };
  try {
    await docClient.update(params).promise();
  } catch (error) {
    console.log(error);
  }
};

const createFollowNotification = async (userID, actorId) => {
  const date = new Date();
  const timestamp = date.getTime(); //current timestamp in milliseconds
  const dateStr = date.toISOString();

  const Item = {
    id: uuidv4(),
    type: 'NEW_FOLLOWER',
    actorId,
    userID,
    readAt: 0,

    owner: `${actorId}::${actorId}`,
    createdAt: dateStr,
    updatedAt: dateStr,
    _lastChangedAt: timestamp,
    _version: 1,
    __typename: 'Notification',
  };
  console.log(Item);
  const params = {
    TableName: NotificationTableName,
    Item,
  };

  try {
    await docClient.put(params).promise();
  } catch (e) {
    console.log(e);
  }
};
