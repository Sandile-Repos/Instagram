import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {useForm, Controller, Control} from 'react-hook-form';
import {Asset, launchImageLibrary} from 'react-native-image-picker';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import {
  DeleteUserMutation,
  DeleteUserMutationVariables,
  GetUserQuery,
  GetUserQueryVariables,
  UpdateUserMutation,
  UpdateUserMutationVariables,
  User,
} from '../../API';
import {deleteUser, getUser, updateUser} from './queries';
import ApiErrorMessage from '../../components/ApiErrorMessage';
import {useMutation, useQuery} from '@apollo/client';
import {useAuthContext} from '../../contexts/AuthContext';
import {useNavigation} from '@react-navigation/native';
import {Auth} from 'aws-amplify';

const URL_REGEX =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

type IEditableUserField = 'name' | 'username' | 'website' | 'bio';
type IEditableUser = Pick<User, IEditableUserField>;

interface ICustomInput {
  control: Control<IEditableUser, object>;
  label: string;
  name: IEditableUserField;
  multiline?: boolean;
  rules?: object;
}

const CustomInput = ({
  control,
  name,
  label,
  multiline = false,
  rules = {},
}: ICustomInput) => (
  <Controller
    control={control}
    name={name}
    rules={rules}
    render={({field: {onChange, onBlur, value}, fieldState: {error}}) => {
      return (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{label}</Text>
          <View style={{flex: 1}}>
            <TextInput
              value={value || ''}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={label}
              multiline={multiline}
              style={[
                styles.input,
                {borderColor: error ? colors.error : colors.border},
              ]}
              autoCapitalize="none"
            />
            {error && (
              <Text style={{color: colors.error}}>{error.message}</Text>
            )}
          </View>
        </View>
      );
    }}
  />
);

const EditProfileScreen = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<null | Asset>(null);
  //remove default setting of data in use form and set with setValue
  const {control, handleSubmit, setValue} = useForm<IEditableUser>();
  const {userId, user: authUser} = useAuthContext();
  const navigation = useNavigation();

  const {data, loading, error} = useQuery<GetUserQuery, GetUserQueryVariables>(
    getUser,
    {variables: {id: userId}},
  );

  const user = data?.getUser;

  //function needs to tricker mutation as it is not run onmount like useQuery but need to called on when ready to submit data
  const [doUpdateUser, {loading: updateLoading, error: updateError}] =
    useMutation<UpdateUserMutation, UpdateUserMutationVariables>(updateUser);
  const [doDeleteUser, {loading: deleteLoading, error: deleteError}] =
    useMutation<DeleteUserMutation, DeleteUserMutationVariables>(deleteUser);

  useEffect(() => {
    if (user) {
      setValue('name', user.name);
      setValue('username', user.username);
      setValue('bio', user.bio);
      setValue('website', user.website);
    }
  }, [user, setValue]);

  const onSubmit = (formData: IEditableUser) => {
    console.log('submit', data);
    doUpdateUser({
      variables: {input: {id: userId, ...formData, _version: user?._version}},
    });
    navigation.goBack();
  };

  const confirmDelete = () => {
    Alert.alert('Are you sure?', 'Deleting your user profile is permanent', [
      {text: 'Cancel', style: 'cancel'},
      {text: 'Yes, delete', style: 'destructive', onPress: startDeleting},
    ]);
  };

  const startDeleting = async () => {
    //delete from database
    await doDeleteUser({
      variables: {input: {id: userId, _version: user?._version}},
    });
    //delete user from cognito
    authUser?.deleteUser(err => {
      if (err) {
        console.log(err);
      }
      Auth.signOut();
    });
  };

  const onChangePhoto = () => {
    launchImageLibrary(
      {mediaType: 'photo'},
      ({didCancel, errorCode, assets}) => {
        if (!didCancel && !errorCode && assets && assets.length > 0) {
          // console.log(assets);
          setSelectedPhoto(assets[0]);
        }
      },
    );
  };

  if (loading) {
    return <ActivityIndicator size={'large'} />;
  }
  if (error || updateError || deleteError) {
    return (
      <ApiErrorMessage
        title="Error fetching or updating the user"
        message={error?.message || updateError?.message || deleteError?.message}
      />
    );
  }
  return (
    <View style={styles.page}>
      <Image
        source={{uri: selectedPhoto?.uri || user.image}} // ?mark after selectedPhoto is important since uri can be null
        style={styles.avatar}
      />
      <Text onPress={onChangePhoto} style={styles.textButton}>
        Change profile photo
      </Text>

      <CustomInput
        label="Name"
        name="name"
        // rules={{required: true}}
        rules={{required: 'Name is required'}}
        control={control}
      />
      <CustomInput
        label="Username"
        name="username"
        rules={{
          required: 'Username is required',
          minLength: {
            value: 3,
            message: 'UserName should be more than 3 characters',
          },
        }}
        control={control}
      />
      <CustomInput
        label="Website"
        name="website"
        rules={{
          // required: 'Website is required',
          pattern: {value: URL_REGEX, message: 'Invalid url'},
          message: 'Invalid url',
        }}
        control={control}
      />
      <CustomInput
        label="Bio"
        multiline
        name="bio"
        rules={{
          maxLength: {
            value: 200,
            message: 'Bio should be less than 200 character',
          },
        }}
        control={control}
      />

      <Text onPress={handleSubmit(onSubmit)} style={styles.textButton}>
        {updateLoading ? 'Submitting...' : 'Submit'}
      </Text>
      <Text onPress={confirmDelete} style={styles.textButtonDanger}>
        {deleteLoading ? 'Deleting...' : 'Delete User'}
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
    fontWeight: fonts.weight.semi,
    margin: 10,
  },
  textButtonDanger: {
    color: colors.error,
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.semi,
    margin: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    // paddingVertical: 10,
  },
  label: {
    width: 75,
  },
  input: {
    borderBottomWidth: 1,
    minHeight: 50,
  },
});
