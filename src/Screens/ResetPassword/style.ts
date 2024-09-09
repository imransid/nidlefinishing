import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start'
  },
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
  resetPasswordButtonPosition: {
    marginTop: verticalScale(20),
    alignItems: 'center',
  },
  textInputProperties: {
    alignItems: 'center', 
  },
  textInputPosition: {
    marginTop: verticalScale(20),
    gap: verticalScale(6)
  }
});

export default styles;
