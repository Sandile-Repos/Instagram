/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require('aws-sdk'); // no need to install sdk, ity automatically present in any lambda function

const docClient = new AWS.DynamoDB.DocumentClient();

// const TableName = 'User-ra57t46changedid-staging'; //Tablename-AppsyncID-env

const env = process.env.ENV;
const AppsyncID = process.env.API_INSTAGRAM_GRAPHQLAPIIDOUTPUT;

const TableName = `User-${AppsyncID}-${env}`; //Tablename-AppsyncID-env

// Get User - get documentation
const userExists = async id => {
  const params = {
    TableName,
    Key: id,
  };

  // documentClient.get(params, function (err, data) {
  //   if (err) console.log(err);
  //   else console.log(data);
  // });
  try {
    const response = await docClient.get(params).promise(); // await without callback function
    return !!response?.Item; // return if value is truthy value
  } catch (error) {
    return false;
  }
};

// Save User - Put documentation
const saveUser = async user => {
  const date = new Date();
  const timestamp = date.getTime(); //current timestamp in milliseconds
  const dateStr = date.toISOString(); //
  const Item = {
    ...user,
    __typename: 'User',
    _lastChangedAt: timestamp,
    createdAt: dateStr,
    updatedAt: dateStr,
    __version: 1,
  };

  const params = {
    TableName,
    Item,
  };

  try {
    await docClient.put(params).promise();
  } catch (error) {
    console.log(error);
  }
};

exports.handler = async (event, context) => {
  // insert code to be executed by your lambda trigger
  console.log('Hey lambda function is working');
  console.log(event);
  if (!event?.request?.userAttributes) {
    console.log('No user data available');
    return;
  }

  const {sub, name, email} = event.request.userAttributes; // {sub, email, name}

  const newUser = {
    id: sub,
    name: name,
    email: email,
  };

  //check if the user already exists - lambda function can be called more than once, so ensure that the user is not already there
  if (!(await userExists(newUser.id))) {
    //If not, save the user to database
    await saveUser(newUser);
    console.log(`User ${newUser.id} has been saved to the database`);
  } else {
    console.log(`User ${newUser.id} already exists`);
  }

  return event;
};
