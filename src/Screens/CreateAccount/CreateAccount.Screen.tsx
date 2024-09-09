import React, { type FC, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

import CustomButton from '../../Components/CustomButton/CustomButton';
import CustomTextInput from '../../Components/CustomTextInput/CustomTextInput';
import Header from '../../Components/Header/Header';
import { colors } from '../../theme/colors';

import styles from './style';

const CreateAccount: FC = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState<string>('');
  const [mobile, setMobile] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [birthdate, setBirthdate] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignUp: any = () => {
    navigation.navigate('MedicineDoses' as never);
  };

  const handleSignIn: any = () => {
    navigation.navigate('Login' as never);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingPosition}>
        <Header mainHeader="New Account" />
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.textInputComponentPosition}>
          <View style={styles.textInputComponentProperties}>
            <Text style={styles.inputHeader}>Full Name</Text>
            <CustomTextInput
              type="email"
              value={fullName}
              onChangeText={setFullName}
              placeholder="Enter your full name..."
              maxLength={18}
              inputStyle={styles.inputText}
              leftIcon={<AntDesign name="user" size={30} color={'#888888'} />} // Left icon
            />
          </View>
          <View style={styles.textInputComponentProperties}>
            <Text style={styles.inputHeader}>Mobile Number</Text>
            <CustomTextInput
              type="mobile"
              value={mobile}
              onChangeText={setMobile}
              placeholder="Enter your mobile number..."
              maxLength={11}
              inputStyle={styles.inputText}
              leftIcon={<Feather name="smartphone" size={30} color={'#888888'} />}
            />
          </View>
          <View style={styles.textInputComponentProperties}>
            <Text style={styles.inputHeader}>Email Address</Text>
            <CustomTextInput
              type="email"
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email address..."
              maxLength={20}
              inputStyle={styles.inputText}
              leftIcon={<MaterialCommunityIcons name="email-outline" size={28} color={'#888888'} />}
            />
          </View>
          <View style={styles.textInputComponentProperties}>
            <Text style={styles.inputHeader}>Password</Text>
            <CustomTextInput
              type="password"
              value={password}
              onChangeText={setPassword}
              placeholder="Enter your password..."
              maxLength={8}
              inputStyle={styles.inputText}
              isPassword={true}
              leftIcon={<MaterialCommunityIcons name="lock-outline" size={30} color={'#888888'} />} // Left icon
            />
          </View>
          <View style={styles.textInputComponentProperties}>
            <Text style={styles.inputHeader}>Confirm Password</Text>
            <CustomTextInput
              type="password"
              value={password}
              onChangeText={setPassword}
              placeholder="Enter your password..."
              maxLength={8}
              inputStyle={styles.inputText}
              isPassword={true}
              leftIcon={<MaterialCommunityIcons name="lock-outline" size={30} color={'#888888'} />} // Left icon
            />
          </View>
          <View style={styles.textInputComponentProperties}>
            <Text style={styles.inputHeader}>Gender</Text>
            <CustomTextInput
              type="email"
              value={gender}
              onChangeText={setGender}
              placeholder="Enter your gender..."
              maxLength={8}
              inputStyle={styles.inputText}
              leftIcon={<MaterialCommunityIcons name="gender-male" size={30} color={'#888888'} />} // Left icon
            />
          </View>
          <View style={styles.textInputComponentProperties}>
            <Text style={styles.inputHeader}>Birth Date</Text>
            <CustomTextInput
              type="email"
              value={birthdate}
              onChangeText={setBirthdate}
              placeholder="Enter your birth date..."
              maxLength={10}
              inputStyle={styles.inputText}
              leftIcon={<AntDesign name="calendar" size={28} color={'#888888'} />} // Left icon
            />
          </View>
        </View>

        <View style={styles.SignInbuttonPosition}>
          <CustomButton
            onPress={handleSignUp}
            icon={<AntDesign name="arrowright" size={30} color={colors.white} />}
            text="Sign In"
          />
        </View>
        <View style={styles.signUpWithPartPosition}>
          <View style={styles.signUpWithPart}>
            <View style={styles.signUpWithHorizontalLine}></View>
            <Text style={styles.signUpWithText}>Sign Up With</Text>
            <View style={styles.signUpWithHorizontalLine}></View>
          </View>
        </View>
        <View style={styles.signUpWithIconsContainer}>
          <TouchableOpacity>
            <View style={styles.signUpWithIcons}>
              <FontAwesome name="facebook" size={25} color={colors.buttonBg}></FontAwesome>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.signUpWithIcons}>
              <FontAwesome name="google" size={25} color={colors.buttonBg}></FontAwesome>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.signUpWithIcons}>
              <FontAwesome name="instagram" size={25} color={colors.buttonBg}></FontAwesome>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.askAboutAccount}>
          <Text style={styles.askAboutAccountText}>Already have an account? {'  '}</Text>
          <TouchableOpacity onPress={handleSignIn}>
            <Text style={styles.signUpText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateAccount;
