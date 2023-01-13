import {Image, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {DEFAULT_USER_IMAGE} from '../../config';
import {Storage} from 'aws-amplify';

interface IUserImage {
  imageKey?: string | null;
  width?: number;
  imageContainer?: boolean;
}

const UserImage = ({
  imageKey,
  width = 50,
  imageContainer = false,
}: IUserImage) => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  useEffect(() => {
    if (imageKey) {
      Storage.get(imageKey).then(setImageUri);
    }
  }, [imageKey]);

  if (imageContainer) {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: imageUri || DEFAULT_USER_IMAGE}} // ?mark after selectedPhoto is important since uri can be null
          style={[styles.userAvatar, {width}]}
        />
      </View>
    );
  }

  return (
    <Image
      source={{uri: imageUri || DEFAULT_USER_IMAGE}} // ?mark after selectedPhoto is important since uri can be null
      style={[styles.userAvatar, {width}]}
    />
  );
};

export default UserImage;

const styles = StyleSheet.create({
  userAvatar: {
    aspectRatio: 1,
    borderRadius: 250,
    // marginRight: 10,
  },
  container: {
    height: 58,
    width: 58,
    margin: 10,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#ae22e0',
    marginLeft: -5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
