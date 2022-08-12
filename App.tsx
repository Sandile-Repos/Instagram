import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Navigation from './src/navigation';
import {Amplify} from 'aws-amplify';
import config from './src/aws-exports';
import AuthContextProvider from './src/contexts/AuthContext';

Amplify.configure(config);
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
