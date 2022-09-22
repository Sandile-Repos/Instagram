import React, {useEffect, useState} from 'react';
import {Text, View, Image, ActivityIndicator, Alert} from 'react-native';
import {useForm} from 'react-hook-form';
import {Asset, launchImageLibrary} from 'react-native-image-picker';
import {
  DeleteUserMutation,
  DeleteUserMutationVariables,
  GetUserQuery,
  GetUserQueryVariables,
  UpdateUserMutation,
  UpdateUserMutationVariables,
  UserByUsernameQuery,
  UserByUsernameQueryVariables,
} from '../../API';
import {deleteUser, getUser, updateUser, userByUsername} from './queries';
import ApiErrorMessage from '../../components/ApiErrorMessage';
import {useMutation, useQuery, useLazyQuery} from '@apollo/client';
import {useAuthContext} from '../../contexts/AuthContext';
import {useNavigation} from '@react-navigation/native';
import {Auth} from 'aws-amplify';
import styles from './styles';
import CustomInput, {IEditableUser} from './CustomInput';
import {DEFAULT_USER_IMAGE} from '../../config';

const URL_REGEX =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

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
  const [getUserByUsername] = useLazyQuery<
    UserByUsernameQuery,
    UserByUsernameQueryVariables
  >(userByUsername);

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

  const validateUsername = async (username: string) => {
    //query the database based on the usersByUsername
    //username of type string is the variable required: see queries
    try {
      const response = await getUserByUsername({
        variables: {username: username},
      });
      // console.log(response);
      if (response.error) {
        Alert.alert('Failed to fetch username');
        return 'Failed';
      }
      const users = response.data?.userByUsername?.items;
      if (users && users?.length > 0 && users?.[0]?.id !== userId) {
        return 'Username already taken';
      }
    } catch (e) {
      Alert.alert('Failed to fetch username');
    }

    //if there are any users with this username, then return error
    return true;
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
        source={{uri: selectedPhoto?.uri || user?.image || DEFAULT_USER_IMAGE}} // ?mark after selectedPhoto is important since uri can be null
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
          validate: validateUsername,
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
