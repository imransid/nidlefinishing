import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  addAnotherMedButtonPosition: {
    bottom: verticalScale(-195)
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  imageContainer: {
    alignItems: 'center',
    bottom: verticalScale(30),
    justifyContent: 'center'
  },
  mainText: {
    color: colors.mainText,
    fontSize: moderateScale(24),
    fontWeight: '600',
    marginTop: verticalScale(55),
    textAlign: 'center'
  },
  noThanksText: {
    color: colors.buttonBg,
    fontSize: moderateScale(14),
    fontWeight: '400',
    textAlign: 'center'
  },
  noThanksTextPosition: {
    marginTop: verticalScale(10)
  },
  subText: {
    color: colors.buttonBg,
    fontSize: moderateScale(16),
    fontWeight: '600',
    textAlign: 'center'
  }
});

export default styles;
