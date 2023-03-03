import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging';
import {useNavigation} from '@react-navigation/native';

// Register background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log(
    'Message handled in the background!',
    JSON.stringify(remoteMessage, null, 2),
  );
});

const PushNotificationService = () => {
  const [enabled, setEnabled] = useState(false);
  const [token, setToken] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    async function requestUserPermission() {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log('Authorization status:', authStatus);
        setEnabled(true);
        await getDeviceToken();
      }
    }
    requestUserPermission();
  }, []);

  useEffect(() => {
    if (!enabled) {
      return;
    }
    //Handle notifications that are received while the application is in Foreground
    messaging().onMessage(handleNotification);

    //Handle notification that opened the application from background state
    messaging().onNotificationOpenedApp(handleNotification);

    //Handle notification that opened the application from quit state
    messaging().getInitialNotification().then(handleNotification);
  }, [enabled]);

  const handleNotification = (
    remoteMessage: FirebaseMessagingTypes.RemoteMessage | null,
  ) => {
    console.log(JSON.stringify(remoteMessage, null, 2));

    if (!remoteMessage) {
      return;
    }
    if (remoteMessage.data?.postID) {
      navigation.navigate('Post', {id: remoteMessage.data?.postID}); //You would be redirected to post screen with this ID
    }
  };

  const getDeviceToken = async () => {
    await messaging().registerDeviceForRemoteMessages();
    const newToken = await messaging().getToken();
    setToken(newToken);
  };
  console.log('token', token);

  return null;
};

export default PushNotificationService;
