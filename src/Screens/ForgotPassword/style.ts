import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  headingPosition: {
    top: verticalScale(20),
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
  textInputComponentProperties: { 
    alignItems: 'center',
  },
  resetPassowrdButton: {
    marginTop: verticalScale(20),
    alignItems: 'center',
  },
  textInputPosition: {
    marginTop: verticalScale(40),
    gap: verticalScale(6),
  }
});

export default styles;
