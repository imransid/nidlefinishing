import React, { type FC } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { Controller, useForm } from 'react-hook-form';
import { ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { LANDSCAPE, OrientationLocker } from 'react-native-orientation-locker';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';

import { NidleLogo } from '@/assets';
import { type RootState } from '@/store';
import { mobileSignInFormValidation } from '@/utils/formValidation';
import useNetworkStatus from '@/utils/networkUtills';
import ToastPopUp from '@/utils/Toast.android';

import { getUserAction } from '../../store/slices/features/users/slice';

import styles from './style';

const Login: FC = () => {
  const dispatch = useDispatch();

  const { isInternetReachable, isCellularConnection } = useNetworkStatus();

  const loading = useSelector((state: RootState) => state.users.user.isLoading);

  interface ISignInFormData {
    email: string;
    password: string;
  }
  // yap validation
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(mobileSignInFormValidation),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onPressSend: SubmitHandler<ISignInFormData> = (formData: ISignInFormData): any => {
    try {
      if (!isInternetReachable && !isCellularConnection) {
        ToastPopUp('Please Check Internet Connection!..');
      } else {
        dispatch(getUserAction(formData));
      }
    } catch (err) {
      console.error('error', err);
    }
  };

  return (
    <View style={styles.container}>
      <OrientationLocker orientation={LANDSCAPE} />
      <ImageBackground
        source={require('../../assets/images/login-bg.png')}
        resizeMode="cover"
        style={styles.image}>
        <Spinner visible={loading} textContent={'Loading...'} />
        <View style={styles.subContainer}>
          <NidleLogo style={styles.nidleLogo} />
          <View style={styles.appNameContainer}>
            <Text style={styles.appNameTxt}>Finishing App</Text>
            {/* <Text style={styles.versionTxt}>Version : {` ${getAppVersionName()}`}</Text> */}
          </View>
          <View>
            <Controller
              control={control}
              rules={{
                required: true
              }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={errors.email != null ? styles.textInputErrorTxt : styles.textInputTxt}
                  value={value}
                  onChangeText={onChange}
                  placeholder="Username"
                  placeholderTextColor="#000"
                />
              )}
              name="email"
            />
            {errors.email != null && <Text style={styles.errorTxt}>{errors.email.message}</Text>}
            <Controller
              control={control}
              rules={{
                required: true
              }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={errors.password != null ? styles.textInputErrorTxt : styles.textInputTxt}
                  value={value}
                  onChangeText={onChange}
                  placeholder="Password"
                  secureTextEntry
                  placeholderTextColor="#000"
                />
              )}
              name="password"
            />
            {errors.password != null && (
              <Text style={styles.errorTxt}>{errors.password.message}</Text>
            )}
          </View>
          <TouchableOpacity
            disabled={!!(errors.email !== null && errors.password != null)}
            style={styles.loginBtn}
            onPress={() => {
              void handleSubmit(onPressSend)();
            }}>
            <Text style={styles.loginBtnTxt}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;
