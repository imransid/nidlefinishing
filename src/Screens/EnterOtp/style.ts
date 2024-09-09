import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  headingPosition: {
    top: verticalScale(20),
    alignItems: 'center',
  },
  otpInputPosition: {
    marginTop: verticalScale(80),
    alignItems: 'center',
  },
  reSendOtpText: {
    color: colors.buttonBg,
    fontSize: moderateScale(14),
    fontWeight: '400',
    textAlign: 'center'
  },
  reSendOtpTextPosition: {
    marginTop: verticalScale(20)
  },
  verifyOtpButtonPosition: {
    marginTop: verticalScale(40),
    alignItems: 'center',
  }
});

export default styles;
