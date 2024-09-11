import React, { type FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FinishingReceiveScreen from '@/Screens/FinishingReceive/FinishingReceive.screen';
import FinishingReceivePad from '@/Screens/FinishingReceivePad/FinishingReceivePad.screen';
import SetLineProcessScreen from '@/Screens/SetLineProcess/SetLineProcess.screen';

const Stack = createStackNavigator();

const AppStackNavigator: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'FinishingReceivePad'}
        component={FinishingReceivePad}
        options={{ headerShown: false }}
      />
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
