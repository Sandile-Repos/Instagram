import {useQuery} from '@apollo/client';
import {createContext, useContext} from 'react';
import {userNotification} from './queries';
import {useAuthContext} from '../AuthContext';
import {UserNotificationQuery, UserNotificationQueryVariables} from '../../API';

const NotificationContext = createContext({newNotifications: 0});

const NotificationContextProvider = ({children}) => {
  const {userId} = useAuthContext();
  const {data} = useQuery<
    UserNotificationQuery,
    UserNotificationQueryVariables
  >(userNotification, {variables: {userID: userId}});

  const unreadNotifications = (data?.userNotification?.items || []).filter(
    notif => !notif?._deleted && !notif?.readAt,
  );
  return (
    <NotificationContext.Provider
      value={{newNotifications: unreadNotifications.length}}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContextProvider;

export const useNotificationContext = () => useContext(NotificationContext);
