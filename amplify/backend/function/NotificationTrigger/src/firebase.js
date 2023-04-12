const {initializeApp, cert} = require('firebase-admin/app');
const {getMessaging} = require('firebase-admin/messaging');

const serviceAccount = JSON.parse(process.env.SERVICE_ACCOUNT); // parse env variable to jason object becuse they are strings

initializeApp({
  credential: cert(serviceAccount),
});

const sendNotification = async (notification, data = {}, fcmToken) => {
  const message = {
    token: fcmToken,
    notification,
    data,
  };
  await getMessaging().send(message);
};

module.exports = {
  sendNotification,
};
