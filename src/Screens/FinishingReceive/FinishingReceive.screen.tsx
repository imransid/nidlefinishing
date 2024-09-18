import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';

import AlterResendTab from '@/Components/AlterResendTab/AlterResendTab';
import FinishingAlterTab from '@/Components/FinishingAlterTab/FinishingAlterTab';
import PendingTab from '@/Components/PendingTab/PendingTab';
import TodaySummaryTab from '@/Components/TodaySummaryTab/TodaySummaryTab';

import ReceiveTab from '../../Components/ReceiveTab/ReceiveTab';

import Styles from './Styles';

// Create Top Tab Navigator
const Tab = createMaterialTopTabNavigator();

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const FinishingReceiveScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <LinearGradient colors={['#fff', '#fff']} style={Styles.linearGradientStyle}>
        <TouchableOpacity style={Styles.drawerBtn} onPress={() => navigation.openDrawer()}>
          <Icon name="bars" size={25} color="#1C98D8" />
          <Image
            style={Styles.nidleBlueLogo}
            source={require('../../assets/images/nidle-logo-blue.png')}
          />
        </TouchableOpacity>

        <View style={Styles.userIcon}>
          <View style={Styles.userIconTextContainer}>
            <Text style={Styles.userIconsOrgText}>FINISHING ORG</Text>
            <Text style={Styles.userIconProcessText}>PROCESS NAME</Text>
          </View>
          <Image style={Styles.nidleBlueLogo} source={require('../../assets/icons/userIcon.png')} />
        </View>
      </LinearGradient>

      <Tab.Navigator
        style={Styles.tabNavigatorStyle}
        initialRouteName="Receive"
        screenOptions={({ route }) => ({
          swipeEnabled: false,
          title: route.name,
          tabBarStyle: Styles.tabBarStyle,
          tabBarIndicatorStyle: Styles.tabBarIndicatorStyle,
          tabBarActiveTintColor: '#1C98D8',
          tabBarInactiveTintColor: '#898792',
          tabBarItemStyle: Styles.tabBarItemStyle,
          tabBarBadge() {
            if (route.name === 'Pending') {
              return (
                <View style={Styles.counter}>
                  <Text style={Styles.counterText}>{'100'}</Text>
                </View>
              );
            }
            return undefined;
          },
          tabBarLabelStyle: Styles.tabBarLabelStyle,
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            switch (route.name) {
              case 'Receive':
                iconName = 'arrow-circle-down';
                break;
              case 'Pending':
                iconName = 'clock-o';
                break;
              case 'Finishing Alter':
                iconName = 'scissors';
                break;
              case 'F. Alter Resend':
                iconName = 'repeat';
                break;
              case 'Today Summary':
                iconName = 'calendar-check-o';
                break;
              default:
                iconName = 'question';
            }
            return <Icon name={iconName} size={20} color={focused ? '#1C98D8' : '#555'} />;
          }
        })}>
        <Tab.Screen name="Receive" component={ReceiveTab} />
        <Tab.Screen name="Pending" component={PendingTab} />
        <Tab.Screen name="Finishing Alter" component={FinishingAlterTab} />
        <Tab.Screen name="F. Alter Resend" component={AlterResendTab} />
        <Tab.Screen name="Today Summary" component={TodaySummaryTab} />
      </Tab.Navigator>
    </>
  );
};

export default FinishingReceiveScreen;
