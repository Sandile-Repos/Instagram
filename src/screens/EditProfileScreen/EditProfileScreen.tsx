import React from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import user from '../../assets/data/user.json';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

interface ICustomInput {
  label: string;
  multiline?: boolean;
}

const CustomInput = ({label, multiline = false}: ICustomInput) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>Label</Text>
      <TextInput
        placeholder={label}
        multiline={multiline}
        style={styles.input}
      />
    </View>
  );
};

const EditProfileScreen = () => {
  const onSubmit = () => {
    console.warn('submit');
  };
  return (
    <View style={styles.page}>
      <Image source={{uri: user.image}} style={styles.avatar} />
      <Text style={styles.textButton}>Change profile photo</Text>

      <CustomInput label="Name" />
      <CustomInput label="Username" />
      <CustomInput label="Website" />
      <CustomInput label="Bio" multiline />

      <Text onPress={onSubmit} style={styles.textButton}>
        Submit
      </Text>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {width: '30%', aspectRatio: 1, borderRadius: 100},
  textButton: {
    color: colors.primary,
    fontSize: fonts.size.md,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  label: {
    width: 75,
  },
  input: {
    flex: 1,
    borderColor: colors.border,
    borderBottomWidth: 1,
  },
});
