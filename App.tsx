import React from 'react';
import {View, StyleSheet} from 'react-native';
import CommentsScreen from './src/screens/CommentsScreen/CommentsScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';

import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import PostUploadScreen from './src/screens/PostUploadScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const App = () => {
  return (
    <View style={styles.app}>
      {/* <HomeScreen /> */}
      {/* <CommentsScreen /> */}
      {/* <ProfileScreen /> */}
      {/* <EditProfileScreen /> */}
      <PostUploadScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
