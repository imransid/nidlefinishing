import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  askAboutAccount: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(10),
  },
  askAboutAccountText: {
    color: colors.typedText,
    fontSize: moderateScale(14),
    fontWeight: '400'
  },
  container: {
    flex: 1
  },
  headingPosition: {
    alignItems: 'center', 
  },
  inputHeader: {
    color: colors.header,
    fontSize: moderateScale(14),
    fontWeight: '500',
  },
  inputText: {
    color: colors.typedText,
    fontSize: moderateScale(16),
    fontWeight: '400'
  },
  scrollViewContainer: {
    paddingBottom: verticalScale(15)
  },
  SignInbuttonPosition: {
    marginTop: verticalScale(25),
    alignItems: 'center'
  },
  signUpText: {
    color: colors.typedText,
    fontSize: moderateScale(14),
    fontWeight: '400',
    textDecorationLine: 'underline'
  },
  signUpWithHorizontalLine: {
    backgroundColor: colors.subText,
    height: verticalScale(2),
    width: scale(120)
  },
  signUpWithIcons: {
    alignItems: 'center', // Center horizontally
    borderColor: colors.buttonBg,
    borderRadius: scale(20),
    borderWidth: scale(1.5),
    height: scale(56),
    justifyContent: 'center', // Center vertically
    width: scale(56)
  },
  signUpWithIconsContainer: {
    flexDirection: 'row',
    gap: scale(8),
    justifyContent: 'center',
    marginTop: verticalScale(15)
  },
  signUpWithPartPosition: {
    alignItems: 'center',
    marginTop: verticalScale(15),
  },
  signUpWithPart: { 
    flexDirection: 'row',
    gap: scale(16),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  signUpWithText: {
    color: colors.mainText,
    fontSize: moderateScale(18),
    fontWeight: '400'
  },
  textInputComponentPosition: {
    alignItems: 'center'
  },
  textInputComponentProperties: {
    gap: verticalScale(6),
    marginTop: verticalScale(12)
  },

});

export default styles;
