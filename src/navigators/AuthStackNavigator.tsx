import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '@/Screens/Login';

const Stack = createStackNavigator();

function AuthStackNav(): JSX.Element  {
  return (
    <Stack.Navigator
    initialRouteName={'Login'}
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthStackNav;
