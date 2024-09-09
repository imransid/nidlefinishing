import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  headingPosition: {
    alignItems: 'center', 
    top: verticalScale(30)
  },
  imagePosition: {
    top: verticalScale(30),
    alignItems: 'center',
  },
  subHeadingPosition: {
    marginTop: verticalScale(30),
  },
  defaultText: {
    alignItems: 'center',
    marginTop: verticalScale(30)
  },
  chooseFileButton: {
    height: verticalScale(37),
    width: verticalScale(162),
    borderRadius: scale(16),
    backgroundColor: colors.buttonBg,
    justifyContent: 'center',
    alignItems: 'center'
  },
  chooseFileButtonPosition: {
    marginTop: verticalScale(25),
    alignItems: 'center'
  },
  chooseFileText: {
    fontSize: moderateScale(16),
    fontWeight: '500',
    color: colors.secondaryButtonText
  }
});

export default styles;
