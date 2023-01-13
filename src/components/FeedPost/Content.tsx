import React, {useCallback} from 'react';
import {View, Image, ActivityIndicator} from 'react-native';
import {Storage} from 'aws-amplify';
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
  const [videoUri, setVideoUri] = useState<string | null>(null);

  const downloadMedia = useCallback(async () => {
    if (post) {
      if (post.image) {
        const uri = await Storage.get(post.image);
        setImageUri(uri);
      } else if (post.images) {
        const uri = await Promise.all(post.images.map(img => Storage.get(img)));
        setImagesUri(uri);
      } else if (post.video) {
        const uri = await Storage.get(post.video);
        setVideoUri(uri);
      }
    }
    return;
  }, [post]);

  useEffect(() => {
    downloadMedia();
  }, [downloadMedia]);

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
  } else if (videoUri) {
    return <VideoPlayer uri={videoUri} paused={!isVisible} />;
  }
  return (
    <View>
      <ActivityIndicator />
    </View>
  );
};

export default Content;
