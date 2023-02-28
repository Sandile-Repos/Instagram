import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {useMutation, useQuery} from '@apollo/client';
import {
  ModelSortDirection,
  UpdateNotificationMutation,
  UpdateNotificationMutationVariables,
  UserNotificationQuery,
  UserNotificationQueryVariables,
} from '../../API';
import {updateNotification, userNotification} from './queries';
import {useAuthContext} from '../../contexts/AuthContext';
import NotificationListItem from '../../components/NotificationListItem';

const NotificationsScreen = () => {
  const {userId} = useAuthContext();

  const {data, loading, error, refetch} = useQuery<
    UserNotificationQuery,
    UserNotificationQueryVariables
  >(userNotification, {
    variables: {userID: userId, sortDirection: ModelSortDirection.DESC},
  });

  //   console.log(JSON.stringify(data?.userNotification?.items, null, 2));
  const notifications = (data?.userNotification?.items || []).filter(
    item => !item?._deleted,
  );

  const [doUpdateNotification] = useMutation<
    UpdateNotificationMutation,
    UpdateNotificationMutationVariables
  >(updateNotification);

  useEffect(() => {
    const readNotification = async () => {
      const unreadNotifications = notifications.filter(n => !n?.readAt);

      await Promise.all(
        unreadNotifications.map(notification =>
          doUpdateNotification({
            variables: {
              input: {
                id: notification.id,
                _version: notification._version,
                readAt: new Date().getTime(),
              },
            },
          }),
        ),
      );
    };
    readNotification();
  }, [doUpdateNotification, notifications]);

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
