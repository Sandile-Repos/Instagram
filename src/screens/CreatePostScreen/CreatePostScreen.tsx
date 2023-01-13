import {View, Image, StyleSheet, TextInput, Alert, Text} from 'react-native';
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
  const [location, setLocation] = useState('');

  const {userId} = useAuthContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [progress, setProgress] = useState(0);

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
      location,
      image: undefined,
      images: undefined,
      video: undefined,
      noOfComments: 0,
      noOfLikes: 0,
      userID: userId,
    };

    //upload the media file to s3 bucket and get the key
    if (image) {
      input.image = await uploadMedia(image);
    } else if (images) {
      // wait for every image to be uploaded before getting the results
      const imageKeys = await Promise.all(images.map(img => uploadMedia(img)));
      input.images = imageKeys.filter(key => key) as string[]; //filter out the undefined key and cast to a string array
    } else if (video) {
      input.video = await uploadMedia(video);
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
      //get the blob of the file from uri - fetch is not imported from anyway
      const response = await fetch(uri);
      const blob = await response.blob();
      const uriParts = uri.split('.');
      const extension = uriParts[uriParts.length - 1];

      //upload the file (blob) to s3
      const s3Response = await Storage.put(`${uuidV4()}.${extension}`, blob, {
        progressCallback(newProgress) {
          setProgress(newProgress.loaded / newProgress.total);
        },
      });
      // console.log(s3Response);
      return s3Response.key;
    } catch (e) {
      Alert.alert('Error uploading the file');
    }
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

      <TextInput
        value={location}
        placeholder="Location"
        onChangeText={setLocation}
        style={styles.input}
      />
      <Button
        text={isSubmitting ? 'Submitting...' : 'Submit'}
        onPress={submit}
      />
      {isSubmitting && (
        <View style={styles.progressContainer}>
          <View style={[styles.progress, {width: `${progress * 100}%`}]} />
          <Text>Uploading {Math.floor(progress * 100)}%</Text>
        </View>
      )}
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
  progressContainer: {
    backgroundColor: colors.lightgrey,
    width: '100%',
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginVertical: 10,
  },
  progress: {
    backgroundColor: colors.primary,
    position: 'absolute',
    height: '100%',
    alignSelf: 'flex-start',
    borderRadius: 25,
  },
});
export default CreatePostScreen;
