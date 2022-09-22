import {Text, View, Image, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {CreateRouteProp} from '../../types/navigation';
import colors from '../../theme/colors';
import Button from '../../components/Button';

const CreatePostScreen = () => {
  const [description, setDescription] = useState('');

  const route = useRoute<CreateRouteProp>();
  const {image} = route.params;

  const submit = async () => {};

  return (
    <View style={styles.root}>
      <Image source={{uri: image}} style={styles.image} />
      <TextInput
        value={description}
        placeholder="Description..."
        onChangeText={setDescription}
        style={styles.input}
        multiline
        numberOfLines={5}
      />
      <Button text="Submit" onPress={submit} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
  input: {
    marginVertical: 10,
    alignSelf: 'stretch',
    backgroundColor: colors.white,
    padding: 10,
  },
});
export default CreatePostScreen;
