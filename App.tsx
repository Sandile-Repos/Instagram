import 'react-native-get-random-values';
import React from 'react';
import {StyleSheet, Linking} from 'react-native';
import Navigation from './src/navigation';
import {Amplify} from 'aws-amplify';
import InAppBrowser from 'react-native-inappbrowser-reborn';

import config from './src/aws-exports';
import AuthContextProvider from './src/contexts/AuthContext';
import Client from './src/apollo/Client';
import {MenuProvider} from 'react-native-popup-menu';
import relativeTime from 'dayjs/plugin/relativeTime';
import * as dayjs from 'dayjs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import NotificationContextProvider from './src/contexts/NotificationContext/NotificationContext';

dayjs.extend(relativeTime);
const urlOpener = async (url: string, redirectUrl: string) => {
  await InAppBrowser.isAvailable();
  const response = await InAppBrowser.openAuth(url, redirectUrl, {
    showTitle: false,
    enableUrlBarHiding: true,
    enableDefaultShare: false,
    ephemeralWebSession: false,
  });

  if (response.type === 'success') {
    Linking.openURL(response.url);
  }
};

// Update specific fields on config if needed
const updatedConfig = {
  ...config,
  oauth: {
    ...config.oauth,
    urlOpener,
  },
};
Amplify.configure(updatedConfig);

const App = () => {
  return (
    <SafeAreaProvider style={styles.app}>
      <MenuProvider>
        <AuthContextProvider>
          <Client>
            <NotificationContextProvider>
              <Navigation />
            </NotificationContextProvider>
          </Client>
        </AuthContextProvider>
      </MenuProvider>
    </SafeAreaProvider>
  );
};

export default App; // includeGreetings default signout included in every screen

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
