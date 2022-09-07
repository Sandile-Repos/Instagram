import React from 'react';
import {SafeAreaView, StyleSheet, Linking} from 'react-native';
import Navigation from './src/navigation';
import {Amplify} from 'aws-amplify';
import InAppBrowser from 'react-native-inappbrowser-reborn';

import config from './src/aws-exports';
import AuthContextProvider from './src/contexts/AuthContext';

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
    <SafeAreaView style={styles.app}>
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </SafeAreaView>
  );
};

export default App; // includeGreetings default signout included in every screen

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
