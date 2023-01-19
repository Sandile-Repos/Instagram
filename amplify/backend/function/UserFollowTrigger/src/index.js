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
const docClient = new AWS.DynamoDB.DocumentClient();

const env = process.env.ENV;
const AppsyncID = process.env.API_INSTAGRAM_GRAPHQLAPIIDOUTPUT;
const UserTableName = `User-${AppsyncID}-${env}`;

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

  if (eventName === 'INSERT') {
    //increase for the user being followed
    await increaseUserField(dynamodb.NewImage.followeeID.S, 'noOfFollowers', 1); // noOfFollowers is field from User Model

    //increase for the user that is following
    await increaseUserField(
      dynamodb.NewImage.followerID.S,
      'noOfFollowings',
      1,
    ); // noOfFollowings is field from User Model
  } else if (
    eventName === 'MODIFY' &&
    !dynamodb.OldImage._delete?.BOOL && // where oldImage doesn't have deleted ie is false. not deleted
    !!dynamodb.NewImage._deleted?.BOOL // where newImage deleted is true
  ) {
    //decrease for the user being followed
    await increaseUserField(
      dynamodb.NewImage.followeeID.S,
      'noOfFollowers',
      -1,
    ); // noOfFollowers is field from User Model

    //decrease for the user that is following
    await increaseUserField(
      dynamodb.NewImage.followerID.S,
      'noOfFollowings',
      -1,
    ); // noOfFollowings is field from User Model
  }
};

//reusable function to increase or decrease follower
const increaseUserField = async (userId, field, value) => {
  const params = {
    TableName: UserTableName,
    key: {id: userId},
    // UpdateExpression: 'ADD noOfFlowers'
    UpdateExpression: 'ADD #field :inc, #version: version_inc', //dynamically insert field
    //UpdateExpression: 'ADD #field :inc, version 1', //we wouldn't have used the attribute values and names but like this, if we version was not _version(underscoreVersion)
    ExpressionAttributeValues: {':inc': value, ':version_inc': 1},
    ExpressionAttributeName: {':field': field, '#version': '_version'},
  };
  try {
    await docClient.update(params).promise();
  } catch (error) {
    console.log(error);
  }
};
