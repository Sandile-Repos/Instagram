import React from 'react';
import {View, Image, ActivityIndicator} from 'react-native';
import {oAuthSignInButton, Storage} from 'aws-amplify';
import {useEffect, useState} from 'react';

import Carousel from '../Carousel';
import VideoPlayer from '../VideoPlayer';
import {Post} from '../../API';
import styles from './styles';

interface IContent {
  post: Post;
  isVisible: boolean;
}

const Content = ({post, isVisible}: IContent) => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [imagesUri, setImagesUri] = useState<string[] | null>(null);
  useEffect(() => {
    downloadMedia();
  }, []);
  const downloadMedia = async () => {
    if (post.image) {
      const uri = await Storage.get(post.image);
      setImageUri(uri);
    } else if (post.images) {
      const uri = await Promise.all(post.images.map(img => Storage.get(img)));
      setImagesUri(uri);
    }
  };
  if (imageUri) {
    return (
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{
          uri: imageUri,
        }}
      />
    );
  } else if (imagesUri) {
    return <Carousel images={imagesUri} />;
  } else if (post.video) {
    return <VideoPlayer uri={post.video} paused={!isVisible} />;
  }
  return (
    <View>
      <ActivityIndicator />
    </View>
  );
};

export default Content;
