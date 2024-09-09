import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '../Screens';
const Stack = createStackNavigator();

const AuthStackNav: any = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true
      }}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthStackNav;
