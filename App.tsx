import React from 'react';
import {View, StyleSheet} from 'react-native';
import Navigation from './src/navigation';
const App = () => {
  return (
    <View style={styles.app}>
      <Navigation />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
