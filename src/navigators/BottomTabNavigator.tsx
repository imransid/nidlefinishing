import React, { type FC } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen, MedicineHistory } from '../Screens';
import { colors } from '../theme/colors';

const Tab = createBottomTabNavigator();

const BottomTabNavigator: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName: string;

          if (route.name === 'Today') {
            iconName = 'pill';
          } else if (route.name === 'History') {
            iconName = 'history';
          } else {
            iconName = 'questioncircleo';
          }

          return <MaterialCommunityIcons name={iconName} size={28} color={color} />;
        },
        tabBarActiveTintColor: colors.buttonBg,
        tabBarInactiveTintColor: colors.typedText,
        tabBarLabelStyle: { fontSize: 12 },
        tabBarShowLabel: true,
        headerShown: false
      })}>
      <Tab.Screen name="Today" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="History" component={MedicineHistory} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
