/* eslint-disable */

import React, { type FC, useEffect, useRef } from 'react';
import { TouchableOpacity, View } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import LinearGradient from 'react-native-linear-gradient';
import { Divider, Drawer as PaperDrawer } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import IconLogOut from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import {
  createDrawerNavigator,
  type DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { type RootState } from '@/store';

import { getAppVersionName } from '@/utils/core';

import { type DrawerParamList } from '../models';

import AppStackNavigator from './AppStackNavigator';
import Styles from './Styles';
import { scale } from 'react-native-size-matters';
import CustomTextItem from '@/Components/TextItem';
import { logoutUser } from '@/store/slices/features/users/slice';

const Drawer = createDrawerNavigator<DrawerParamList>();
const CustomDrawerContent: FC<DrawerContentComponentProps> = (
  props: DrawerContentComponentProps,
) => {
  const dispatch = useDispatch();
  const userName = useSelector(
    (state: RootState) => state.users.user.data?.name,
  );
  const userEmail = useSelector(
    (state: RootState) => state.users.user.data?.email,
  );

  //const token = useSelector((state: RootState) => state.users.user.data?.accessToken);
  const deviceId = useRef('');
  const fetchDeviceId = async (): Promise<void> => {
    try {
      const uniqueId = await DeviceInfo.getUniqueId();
      deviceId.current = uniqueId;
    } catch (error) {
      console.error('Error fetching device ID:', error);
      throw error; // If you want to propagate the error further
    }
  };

  useEffect(() => {
    fetchDeviceId().catch(error => {
      // Handle error if needed
      console.error('Error in useEffect:', error);
    });
  }, []);

  return (
    <>
      <LinearGradient colors={['#47B5FF', '#B09EFF']}>
        <View style={Styles.header}>
          <CustomTextItem
            txt="Lionel Messi"
            color="white"
            variant="titleMedium"
          />
          <CustomTextItem
            txt="admin@gmail.com"
            color="white"
            variant="titleSmall"
          />
          <View style={Styles.customDivider}></View>
          {/* <CustomTextItem txt={`Version : ${getAppVersionName()}`} color="white" variant="labelSmall" /> */}
          <CustomTextItem
            txt={`Device ID: ${deviceId.current}`}
            color="white"
            variant="labelSmall"
          />
        </View>
      </LinearGradient>
      <DrawerContentScrollView {...props}>
        <PaperDrawer.Item
          icon={() => {
            return <Icon size={scale(12)} name="home" />;
          }}
          label="Home"
          onPress={() => {
            props.navigation.navigate('SetLineProcess');
          }}
        />
        {/* <Divider /> */}
        <View style={Styles.drawerDivider}></View>
        <Divider />
        <PaperDrawer.Item
          icon={() => {
            return <IconLogOut size={scale(12)} name="logout" />;
          }}
          label="logout"
          onPress={() => {
            dispatch(logoutUser());
          }}
        />
        <Divider />
      </DrawerContentScrollView>
    </>
  );
};

const DrawerNavigator: FC = () => {
  return (
    <Drawer.Navigator
      initialRouteName="AppStackNavigator"
      screenOptions={{ headerShown: true, headerStyle: { backgroundColor: '#fff' }, headerTintColor: '#000', headerTitleStyle: { color: '#000' } }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="AppStackNavigator"
        component={AppStackNavigator}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
