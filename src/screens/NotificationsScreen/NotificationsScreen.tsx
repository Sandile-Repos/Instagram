import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import React from 'react';
import {useQuery} from '@apollo/client';
import {
  ModelSortDirection,
  UserNotificationQuery,
  UserNotificationQueryVariables,
} from '../../API';
import {userNotification} from './queries';
import {useAuthContext} from '../../contexts/AuthContext';
import ApiErrorMessage from '../../components/ApiErrorMessage';
import NotificationListItem from '../../components/NotificationListItem';

const NotificationsScreen = () => {
  const {userId} = useAuthContext();

  const {data, loading, error, refetch} = useQuery<
    UserNotificationQuery,
    UserNotificationQueryVariables
  >(userNotification, {
    variables: {userID: userId, sortDirection: ModelSortDirection.DESC},
  });

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return (
      <ApiErrorMessage
        title="Error fetching notifications"
        message={error.message}
      />
    );
  }

  //   console.log(JSON.stringify(data?.userNotification?.items, null, 2));
  const notifications = (data?.userNotification?.items || []).filter(
    item => !item?._deleted,
  );

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <FlatList
        data={notifications}
        renderItem={({item}) => <NotificationListItem notification={item} />}
        onRefresh={refetch}
        refreshing={loading}
        ListEmptyComponent={() => (
          <Text style={{margin: 10}}>
            There are no notification at this moment
          </Text>
        )}
      />
    </View>
  );
};

export default NotificationsScreen;
