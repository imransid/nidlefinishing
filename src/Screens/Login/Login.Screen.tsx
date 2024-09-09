import React, { type FC, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

import CustomButton from '../../Components/CustomButton/CustomButton';
import CustomTextInput from '../../Components/CustomTextInput/CustomTextInput';
import Header from '../../Components/Header/Header';
import { colors } from '../../theme/colors';

import styles from './style';

const Login: FC = () => {
  const navigation = useNavigation();
  const [mobile, setMobile] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignIn: any = () => {
    navigation.navigate('MedicineDoses' as never);
  };

  const handleGuestLogin: any = () => {
    navigation.navigate('MedicineDoses' as never);
  };

  const handleCreateAccount: any = () => {
    navigation.navigate('CreateAccount' as never);
  };

  const handleForgotPassword: any = () => {
    navigation.navigate('ForgotPassword' as never);
  };

  return (
    <View>
      <View style={styles.mainHeader}>
        <Header mainHeader="Log In" />
      </View>
      <View style={styles.subHeaderFirstLine}>
        <Header subHeader="Log in to access your personalized" />
      </View>
      <View style={styles.subHeaderSecondLine}>
        <Header subHeader="Medinest experience" />
      </View>

      <View style={styles.textInputComponentsPosition}>
        <View style={styles.mobileNumberInput}>
          <Text style={styles.inputHeader}>Mobile Number</Text>
          <CustomTextInput
            type="mobile"
            value={mobile}
            onChangeText={setMobile}
            placeholder="Enter your mobile number..."
            maxLength={11}
            inputStyle={styles.inputText}
            leftIcon={<Feather name="smartphone" size={30} color={'#888888'} />} // Left icon
          />
        </View>
        <View style={styles.passwordInput}>
          <Text style={styles.inputHeader}>Password</Text>
          <CustomTextInput
            type="password"
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password..."
            maxLength={8}
            inputStyle={styles.inputText}
            isPassword={true}
            leftIcon={<MaterialCommunityIcons name="lock-outline" size={30} color={'#888888'} />}
          />
        </View>
      </View>

      <View style={styles.signInButtonPosition}>
        <CustomButton
          onPress={handleSignIn}
          icon={<AntDesign name="arrowright" size={30} color={colors.white} />}
          text="Sign In"
        />
      </View>

      <View style={styles.orPartPosition}>
        <View style={styles.orPart}>
          <View style={styles.orHorizontalLine}></View>
          <Text style={styles.orText}>or</Text>
          <View style={styles.orHorizontalLine}></View>
        </View>
      </View>

      <View style={styles.guestButtonPosition}>
        <TouchableOpacity style={styles.guestButton} onPress={handleGuestLogin}>
          <Feather name="user" size={30} color={'#888888'} />
          <Text style={styles.guestButtonText}>Continue as guest</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.askAboutAccount}>
        <Text style={styles.askAboutAccountText}>Don’t have an account? {'  '}</Text>
        <TouchableOpacity onPress={handleCreateAccount}>
          <Text style={styles.signUpText}>Create Account</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
