import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

import ReceiveTab from '../../Components/ReceiveTab/ReceiveTab';
import AlterResendTab from '@/Components/AlterResendTab/AlterResendTab';
import TodaySummaryTab from '@/Components/TodaySummaryTab/TodaySummaryTab';
import PendingTab from '@/Components/PendingTab/PendingTab';
import FinishingAlterTab from '@/Components/FinishingAlterTab/FinishingAlterTab';

import Styles from './Styles';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale} from 'react-native-size-matters';

// Create Top Tab Navigator
const Tab = createMaterialTopTabNavigator();

const FinishingReceiveScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <LinearGradient
        colors={['#fff', '#fff']}
        style={Styles.linearGradientStyle}>
        <TouchableOpacity
          style={Styles.drawerBtn}
          onPress={() => navigation.openDrawer()}>
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
          <Image
            style={Styles.nidleBlueLogo}
            source={require('../../assets/icons/userIcon.png')}
          />
        </View>
      </LinearGradient>

      <Tab.Navigator
        style={{margin: 20, borderRadius: 20}}
        initialRouteName="Receive"
        tabBarOptions={{
          showIcon: true,
          style: Styles.tabBar,
          indicatorStyle: Styles.indicator,
        }}
        screenOptions={({route}) => ({
          title: route.name,
          tabBarActiveTintColor: '#1C98D8',
          tabBarInactiveTintColor: '#898792',
          tabBarItemStyle: {flexDirection: 'row'},

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
          tabBarLabelStyle: {fontSize: moderateScale(9), fontWeight: '700'},
          tabBarIcon: ({focused, color}) => {
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
            return (
              <Icon
                name={iconName}
                size={20}
                color={focused ? '#1C98D8' : '#555'}
              />
            );
          },
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
