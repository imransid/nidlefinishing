import React, { type FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FinishingReceiveScreen from '@/Screens/FinishingReceive/FinishingReceive.screen';
import SetLineProcessScreen from '@/Screens/SetLineProcess/SetLineProcess.screen';

const Stack = createStackNavigator();

const AppStackNavigator: FC = () => {
  return (
    <Stack.Navigator initialRouteName="SetLineProcess">

      <Stack.Screen
        name={'FinishingReceive'}
        component={FinishingReceiveScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'SetLineProcess'}
        component={SetLineProcessScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
