import React, {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../theme/colors';
import {Post} from '../../API';
import {Storage} from 'aws-amplify';

const FeedGridItem = ({post}: {post: Post}) => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [imagesUri, setImagesUri] = useState<string[] | null>(null);
  useEffect(() => {
    const fetchPosts = async () => {
      if (post.image) {
        const uri = await Storage.get(post.image);
        setImageUri(uri);
      } else if (post.images) {
        const uri = await Promise.all(
          post.images.map((img: string) => Storage.get(img)),
        );
        setImagesUri(uri);
      }
    };
    fetchPosts();
  }, [post]);
  return (
    <View style={{flex: 1, padding: 1, aspectRatio: 1, maxWidth: '33.33%'}}>
      <Image source={{uri: imageUri || imagesUri?.[0]}} style={{flex: 1}} />
      {imagesUri && (
        <MaterialIcons
          name="collections"
          size={16}
          color={colors.white}
          style={{position: 'absolute', top: 5, right: 5}}
        />
      )}
    </View>
  );
};

export default FeedGridItem;
