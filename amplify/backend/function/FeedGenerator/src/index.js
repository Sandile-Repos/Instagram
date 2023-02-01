/* Amplify Params - DO NOT EDIT
	API_INSTAGRAM_GRAPHQLAPIENDPOINTOUTPUT
	API_INSTAGRAM_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const postEventHandler = require('./PostEventHandler');
const userFollowEventHandler = require('./UserFollowEventHandler');

exports.handler = async event => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  for (const record of event.Records) {
    await handleRecord(record);
  }
  return Promise.resolve('Successfully processed DynamoDB record');
};

const handleRecord = async record => {
  console.log(record.eventID);
  console.log(record.eventName);
  console.log('DynamoDB Record: %j', record.dynamodb);

  //"eventSourceARN": "arn:aws:dynamodb:us-east-2:542011804597:table/Post-gmfhq2unbrew7ox3etuh24fmnq-dev/stream/2022-10-07T20:57:10.385"
  if (record.eventSourceARN.includes('Post')) {
    //Handle post events
    console.log('before calling postEventHandler for post');
    await postEventHandler(record);
  } else if (record.eventSourceARN.includes('UserFollow')) {
    await userFollowEventHandler(record);
  } else {
    console.log('Event not handled');
  }
};
