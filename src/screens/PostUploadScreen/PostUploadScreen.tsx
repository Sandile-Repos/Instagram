import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Camera} from 'expo-camera';
import colors from '../../theme/colors';

const PostUploadScreen = () => {
  const [hasPermissions, setHasPermission] = useState<boolean | null>(null);
  useEffect(() => {
    const getPermission = async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microphonePermission =
        await Camera.requestMicrophonePermissionsAsync();
      setHasPermission(
        cameraPermission.status === 'granted' &&
          microphonePermission.status === 'granted',
      );
    };
    getPermission();
  }, []);

  if (hasPermissions === null) {
    return <Text>Loading...</Text>;
  }
  if (hasPermissions === false) {
    return <Text>No access to the camera</Text>;
  }
  return (
    <SafeAreaView style={styles.page}>
      <Camera style={styles.camera} />
      <View style={styles.buttonContainer}></View>
    </SafeAreaView>
  );
};

export default PostUploadScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.black,
  },
  camera: {
    width: '100%',
    aspectRatio: 3 / 4,
  },
  buttonContainer: {},
});
