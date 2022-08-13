/* eslint-disable react/react-in-jsx-scope */
import {CognitoUser} from 'amazon-cognito-identity-js';
import {useContext} from 'react';
import {
  createContext,
  ReactNode,
  useState,
  //   Dispatch,
  //   SetStateAction,
} from 'react';

type UserType = CognitoUser | null | undefined;

type AuthContextType = {
  user: UserType;
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
};

const AuthContext = createContext<AuthContextType>({
  user: undefined,
  setUser: () => {},
});

const AuthContextProvider = ({children}: {children: ReactNode}) => {
  const [user, setUser] = useState<UserType>(undefined);
  console.log('user', user);

  return (
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
export const useAuthContext = () => useContext(AuthContext);
