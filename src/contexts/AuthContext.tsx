/* eslint-disable react/react-in-jsx-scope */
import {CognitoUser} from 'amazon-cognito-identity-js';
import {Auth} from 'aws-amplify';
import {useContext, useEffect} from 'react';
import {
  createContext,
  ReactNode,
  useState,
  //   Dispatch,
  //   SetStateAction,
} from 'react';
import {Hub} from 'aws-amplify';
import {HubCallback} from '@aws-amplify/core';

type UserType = CognitoUser | null | undefined;

type AuthContextType = {
  user: UserType;
  // setUser: React.Dispatch<React.SetStateAction<UserType>>;
};

const AuthContext = createContext<AuthContextType>({
  user: undefined,
  // setUser: () => {},
});

const AuthContextProvider = ({children}: {children: ReactNode}) => {
  const [user, setUser] = useState<UserType>(undefined);
  // console.log('user', user);

  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      setUser(authUser);
    } catch (error) {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  //Listen to signout event with Hub when fired on amplify from anywhere in your app and remove
  //authentication when component unmount(when you return a function on use effect), set it to null. This will open sign in screen
  useEffect(() => {
    const listener: HubCallback = data => {
      // console.log(data);

      const {event} = data.payload;
      if (event === 'signOut') {
        setUser(null);
      }
      if (event === 'signIn') {
        checkUser();
      }
    };
    Hub.listen('auth', listener);
    return () => Hub.remove('auth', listener);
  });
  return (
    // <AuthContext.Provider value={{user, setUser}}>
    <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
export const useAuthContext = () => useContext(AuthContext);
