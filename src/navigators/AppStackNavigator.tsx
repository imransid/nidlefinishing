import React, { type FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DrawerNavigator from './DrawerNavigator';
import PublickStackNavigator from './PublicStackNavigator';

const Stack = createStackNavigator();

const AppStackNavigator: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Public"
        component={PublickStackNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="MainTabs" component={DrawerNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
