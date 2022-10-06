import {View, Image, StyleSheet, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {CreateNavigationProp, CreateRouteProp} from '../../types/navigation';
import colors from '../../theme/colors';
import Button from '../../components/Button';
import {useMutation} from '@apollo/client';
import {createPost} from './queries';
import {
  CreatePostInput,
  CreatePostMutation,
  CreatePostMutationVariables,
} from '../../API';
import {useAuthContext} from '../../contexts/AuthContext';
import Carousel from '../../components/Carousel';
import VideoPlayer from '../../components/VideoPlayer';
import {Storage} from 'aws-amplify';
import {v4 as uuidV4} from 'uuid';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const CreatePostScreen = () => {
  const [description, setDescription] = useState('');
  const {userId} = useAuthContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigation = useNavigation<CreateNavigationProp>(); //CreateNavigationProp removes error on popToTop

  const route = useRoute<CreateRouteProp>();
  const {image, images, video} = route.params;

  let content = null;
  if (image) {
    content = (
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
        resizeMode={'contain'}
      />
    );
  } else if (images) {
    content = <Carousel images={images} />;
  } else if (video) {
    content = <VideoPlayer uri={video} paused={false} />;
  }

  const [doCreatePost] = useMutation<
    CreatePostMutation,
    CreatePostMutationVariables
  >(createPost);

  const submit = async () => {
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    const input: CreatePostInput = {
      type: 'POST',
      description,
      image: undefined,
      images: undefined,
      video: undefined,
      noOfComments: 0,
      noOfLikes: 0,
      userID: userId,
    };

    //upload the media file to s3 bucket and get the key
    if (image) {
      const imageKey = await uploadMedia(image);
      input.image = imageKey;
    } else if (images) {
      // wait for every image to be uploaded before getting the results
      const imageKeys = await Promise.all(images.map(img => uploadMedia(img)));
      input.images = imageKeys.filter(key => key) as string[]; //filter out the undefined key and cast to a string array
    }
    try {
      await doCreatePost({variables: {input}});
      // console.log(response);
      setIsSubmitting(false);
      navigation.popToTop(); //First move to camera,so to go to the top screen of UploadStack when you move back to it
      navigation.navigate('HomeStack'); //Than to homeScreen
    } catch (e) {
      Alert.alert('Error uploading the post', (e as Error).message);
      setIsSubmitting(false);
    }
  };

  const uploadMedia = async (uri: string) => {
    try {
      //get the blob of the file from uri
      const response = await fetch(uri);
      const blob = await response.blob();
      const uriParts = uri.split('.');
      const extension = uriParts[uriParts.length - 1];

      //upload the file (blob) to s3
      const s3Response = await Storage.put(`${uuidV4()}.${extension}`, blob);
      // console.log(s3Response);
      return s3Response.key;
    } catch (error) {}
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.root}>
      <View style={styles.content}>{content}</View>
      <TextInput
        value={description}
        placeholder="Description..."
        onChangeText={setDescription}
        style={styles.input}
        multiline
        numberOfLines={5}
      />
      <Button
        text={isSubmitting ? 'Submitting...' : 'Submit'}
        onPress={submit}
      />
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  input: {
    marginVertical: 10,
    alignSelf: 'stretch',
    backgroundColor: colors.white,
    padding: 10,
  },
  content: {
    width: '100%',
    aspectRatio: 1,
  },
});
export default CreatePostScreen;
