import {Image, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {DEFAULT_USER_IMAGE} from '../../config';
import {Storage} from 'aws-amplify';

interface IUserImage {
  imageKey?: string | null;
  width?: number;
}

const UserImage = ({imageKey, width = 50}: IUserImage) => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  useEffect(() => {
    if (imageKey) {
      Storage.get(imageKey).then(setImageUri);
    }
  }, [imageKey]);

  return (
    <Image
      resizeMode="contain"
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
    marginRight: 10,
  },
});
