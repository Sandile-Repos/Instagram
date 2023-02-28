import React from 'react';
import {LinkingOptions, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

import BottomTabNavigator from './BottomTabNavigator';
import CommentsScreen from '../screens/CommentsScreen/CommentsScreen';
import {RootNavigatorParamList} from '../types/navigation';
import AuthStackNavigator from './AuthStackNavigator';
import {useAuthContext} from '../contexts/AuthContext';
import {useQuery} from '@apollo/client';
import {GetUserQuery, GetUserQueryVariables} from '../API';
import {getUser} from './queries';
import EditProfileScreen from '../screens/EditProfileScreen';
import PostScreen from '../screens/PostScreen';

const Stack = createNativeStackNavigator<RootNavigatorParamList>();
const linking: LinkingOptions<RootNavigatorParamList> = {
  prefixes: ['instaphoto://', 'https://instaphoto.com'],
  config: {
    initialRouteName: 'Home',
    screens: {
      Comments: 'comments', //instaphoto://comments
      //instaphoto://user//123
      Home: {
        screens: {
          HomeStack: {
            initialRouteName: 'Feed',
            screens: {
              UserProfile: 'user/:userId',
            },
          },
        },
      },
    },
  },
};

const Navigation = () => {
  const {user, userId} = useAuthContext();
  const {data, loading, error} = useQuery<GetUserQuery, GetUserQueryVariables>(
    getUser,
    {variables: {id: userId}},
  );
  const userData = data?.getUser;
  // console.log(userData);

  if (user === undefined || loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={'red'} />
      </View>
    );
  }

  let stackScreens = null;
  if (!user) {
    stackScreens = (
      <Stack.Screen
        name="Auth"
        component={AuthStackNavigator}
        options={{headerShown: false}}
      />
    );
  } else if (!userData?.username) {
    stackScreens = (
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{title: 'Setup Profile'}}
      />
    );
  } else {
    stackScreens = (
      <>
        <Stack.Screen
          name="Home"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />

        <Stack.Screen name="Post" component={PostScreen} />
        <Stack.Screen name="Comments" component={CommentsScreen} />
      </>
    );
  }

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator screenOptions={{headerShown: true}}>
        {stackScreens}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
