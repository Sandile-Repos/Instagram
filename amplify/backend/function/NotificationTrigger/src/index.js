/* Amplify Params - DO NOT EDIT
	API_INSTAGRAM_GRAPHQLAPIENDPOINTOUTPUT
	API_INSTAGRAM_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk'); // no need to install sdk, ity automatically present in any lambda function
const {sendNotification} = require('./firebase');

const docClient = new AWS.DynamoDB.DocumentClient();

// const TableName = 'User-ra57t46changedid-staging'; //Tablename-AppsyncID-env

const env = process.env.ENV;
const AppsyncID = process.env.API_INSTAGRAM_GRAPHQLAPIIDOUTPUT;

const UserTableName = `User-${AppsyncID}-${env}`; //Tablename-AppsyncID-env

const NOTIFICATION_TEXT = {
  NEW_FOLLOWER: 'started following you.',
  NEW_LIKE: 'liked your post.',
  NEW_COMMENT: 'wrote a new comment',
};

const NOTIFICATION_TITLE = {
  NEW_FOLLOWER: 'New follower!',
  NEW_LIKE: 'Your post got a new like!',
  NEW_COMMENT: 'New comment',
};

exports.handler = async event => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  // for (const record of event.Records) {
  //   console.log(record.eventID);
  //   console.log(record.eventName);
  //   console.log('DynamoDB Record: %j', record.dynamodb);
  // }

  await Promise.all(event.Records.map(handleRecord));
  return Promise.resolve('Successfully processed DynamoDB record');
};

const handleRecord = async ({eventName, dynamodb}) => {
  console.log(eventName);
  console.log('DynamoDB Record: %j', dynamodb);

  if (eventName !== 'INSERT') {
    return;
  }

  //Get the user from database
  const userID = dynamodb.NewImage.userID.S;
  const type = dynamodb.NewImage.type.S;
  const actorId = dynamodb.NewImage.actorId.S;

  const user = await getUser(userID);
  if (!user?.fcmToken) {
    console.log("Couldn't find user or user does not have an FCM token");
    return;
  }

  //Send notification using the FCM token
  console.log('Sending a notification to: ', user.fcmToken);
  const notification = await createNotification(type, actorId);
  await sendNotification(notification, user.fcmToken);
};

const getUser = async id => {
  const params = {
    TableName: UserTableName,
    Key: {
      id,
    },
  };

  try {
    const response = await docClient.get(params).promise();
    return response?.Item;
  } catch (e) {
    console.log(e);
    return null;
  }
};

const createNotification = async (notificationType, actorId) => {
  const actor = await getUser(actorId);
  return {
    title: NOTIFICATION_TITLE[notificationType],
    body: `${actor.name} ${NOTIFICATION_TEXT[notificationType]} `,
  };
};
