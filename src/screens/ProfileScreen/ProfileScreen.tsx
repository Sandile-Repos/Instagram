import React, {useState} from 'react';
import {Pressable, View, ActivityIndicator} from 'react-native';
import ProfileHeader from './ProfileHeader';
import FeedGridView from '../../components/FeedGridView';
import {UserProfileRouteProp, MyProfileRouteProp} from '../../types/navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useQuery} from '@apollo/client';
import {getUser} from './queries';
import {GetUserQuery, GetUserQueryVariables} from '../../API';
import ApiErrorMessage from '../../components/ApiErrorMessage';
import {useRoute} from '@react-navigation/native';
import {useAuthContext} from '../../contexts/AuthContext';

const ProfileScreen = () => {
  const [headerFixed, setHeaderFixed] = useState(true);
  const route = useRoute<UserProfileRouteProp | MyProfileRouteProp>();

  const {userId: authUserId} = useAuthContext();

  const userID = route.params?.userId || authUserId;
  console.warn('userId', userID);

  // Query the user with userID
  const {data, loading, error} = useQuery<GetUserQuery, GetUserQueryVariables>(
    getUser,
    {variables: {id: userID}},
  );
  const user = data?.getUser;
  if (loading) {
    return <ActivityIndicator size={'large'} />;
  }
  if (error || !user) {
    return (
      <ApiErrorMessage
        title="Error fetching the user"
        message={error?.message || 'User not'}
      />
    );
  }

  return (
    <View>
      <Pressable
        style={{position: 'absolute', right: 5, color: 'red', zIndex: 100}}
        onPress={() => setHeaderFixed(v => !v)}>
        <Ionicons
          name={headerFixed ? 'lock-closed-outline' : 'md-open-outline'}
          size={14}
          color="white"
          style={{
            position: 'absolute',
            right: 5,
            color: 'black',
          }}
        />
      </Pressable>
      {headerFixed && (
        <View>
          <ProfileHeader user={user} />
        </View>
      )}

      <FeedGridView
        data={user?.Posts?.items || []}
        ListHeaderComponent={null}
        // ListHeaderComponent={() => <ProfileHeader user={user} />}
      />
    </View>
  );
};
export default ProfileScreen;
