import React, {type FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import QCLaunchPad from '@/Screens/QCLauchPad/QCLaunchPad.screen';

const Stack = createStackNavigator();

const AppStackNavigator: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'QCLaunchPad'}
        component={QCLaunchPad}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
