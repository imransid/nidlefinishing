import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  askAboutAccount: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(15),
    alignItems: 'center'
  },
  mainHeader: {
    alignItems: 'center', 
    top: verticalScale(30)
  },
  subHeaderFirstLine: { 
    alignItems: 'center', 
    top: verticalScale(-5)
  },
  subHeaderSecondLine: {
    alignItems: 'center', 
    top: verticalScale(-35)
  },
  askAboutAccountText: {
    color: colors.typedText,
    fontSize: moderateScale(14),
    fontWeight: '400'
  },
  forgotPassword: {
    color: colors.buttonBg,
    fontSize: moderateScale(14),
    fontWeight: '400',
    textAlign: 'center'
  },
  guestButton: {
    alignItems: 'center',
    backgroundColor: colors.textInput,
    borderRadius: scale(30),
    borderWidth: scale(0.15),
    flexDirection: 'row',
    gap: scale(12),
    height: verticalScale(56),
    justifyContent: 'center',
    width: scale(315)
  },
  guestButtonPosition: {
    marginTop: verticalScale(12),
    alignItems: 'center'
  },
  guestButtonText: {
    color: colors.typedText,
    fontSize: moderateScale(18),
    fontWeight: '400'
  },
  inputHeader: {
    color: colors.header,
    fontSize: moderateScale(14),
    fontWeight: '500',
    marginRight: scale(226)
  },
  inputText: {
    color: colors.typedText,
    fontSize: moderateScale(16),
    fontWeight: '400'
  }, 
  orHorizontalLine: {
    backgroundColor: colors.subText,
    height: verticalScale(2),
    width: scale(120)
  },
  orPart: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: scale(16),
    justifyContent: 'space-between'
  },
  orPartPosition: {
    marginTop: verticalScale(12),
    alignItems: 'center'
  },
  orText: {
    color: colors.mainText,
    fontSize: moderateScale(18),
    fontWeight: '400'
  },
  signUpText: {
    color: colors.typedText,
    fontSize: moderateScale(14),
    fontWeight: '400',
    textDecorationLine: 'underline'
  },
  textInputComponentsPosition:{
    alignItems: 'center'
  },
  mobileNumberInput: {
    gap: verticalScale(6)
  },
  passwordInput: {
    marginTop: verticalScale(20), 
    gap: verticalScale(6)
  },
  signInButtonPosition: {
    marginTop: verticalScale(25),
    alignItems: 'center'
  } 
});

export default styles;
