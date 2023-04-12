import {useQuery} from '@apollo/client';
import {createContext, useContext, useEffect} from 'react';
import {onCreateNotification, userNotification} from './queries';
import {useAuthContext} from '../AuthContext';
import {UserNotificationQuery, UserNotificationQueryVariables} from '../../API';

const NotificationContext = createContext({newNotifications: 0});

const NotificationContextProvider = ({children}) => {
  const {userId} = useAuthContext();
  const {data, subscribeToMore} = useQuery<
    UserNotificationQuery,
    UserNotificationQueryVariables
  >(userNotification, {variables: {userID: userId}});

  const unreadNotifications = (data?.userNotification?.items || []).filter(
    notif => !notif?._deleted && !notif?.readAt,
  );

  useEffect(() => {
    if (!subscribeToMore || !userId) {
      return;
    }
    subscribeToMore({
      document: onCreateNotification,
      variables: {filter: {userID: {eq: userId}}}, // filter notification(listen to updates) to the ones that relate to us, that equal our userID
      updateQuery: (prev, next) => {
        //We want to take the next items and add it to prev (at the beginning or add of prev), but we cant just destructure next like  ..next.
        //We would need to override userNotifications and items
        return {
          ...prev,
          userNotification: {
            ...prev?.userNotification,
            items: [
              ...(prev?.userNotification?.items || []),
              next.subscriptionData.data.onCreateNotification, //no need to destructure since it not an array but an object
            ],
          },
        };
      }, //function specifying how do we want to merge data as one is coming from the query and the other from the subscription and there may have difference shape
    });
  }, [subscribeToMore, userId]);

  return (
    <NotificationContext.Provider
      value={{newNotifications: unreadNotifications.length}}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContextProvider;

export const useNotificationContext = () => useContext(NotificationContext);
