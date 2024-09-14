import React, { useEffect, type FC } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import AuthStackNav from './AuthStackNavigator';
import DrawerNavigator from './DrawerNavigator';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import { RootState } from '@/store';

const Navigator: FC = () => {
  const authStatus = useSelector((state: RootState) => state.users.user.loginStatus);
  const globalLoaderStatus = useSelector((state: RootState) => state.settings.isLoading);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(checkLoaderAction());
  // }, [dispatch]);

  return (
    <NavigationContainer>
      {authStatus ? <DrawerNavigator /> : <AuthStackNav />}
      <Spinner visible={globalLoaderStatus} textContent={'Loading...'} />
    </NavigationContainer>
  );
};

export default Navigator;
