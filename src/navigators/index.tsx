import React, { type FC } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import AuthStackNav from './AuthStackNavigator';
import DrawerNavigator from './DrawerNavigator';
const Navigator: FC = () => {
  const [hasToken, setHasToken] = React.useState(true);
  return (
    <NavigationContainer>{hasToken ? <DrawerNavigator /> : <AuthStackNav />}</NavigationContainer>
  );
};

export default Navigator;
