import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import { AuthStackParamList } from './types';

const Stack = createNativeStackNavigator<AuthStackParamList>();

interface AuthNavigatorProps {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

const AuthNavigator: React.FC<AuthNavigatorProps> = ({ setIsAuthenticated }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login">
        {props => <Login {...props} setIsAuthenticated={setIsAuthenticated} />}
      </Stack.Screen>
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;