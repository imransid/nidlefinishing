import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  NextButtonPosition: {
    alignItems: 'center',
    marginTop: verticalScale(40)
  },
  headingPosition: {
    top: verticalScale(30)
  },
  imagePosition: {
    alignItems: 'center',
    top: verticalScale(20)
  },
  inputHeader: {
    color: colors.header,
    fontSize: moderateScale(14),
    fontWeight: '500'
  },
  inputText: {
    color: colors.typedText,
    fontSize: moderateScale(16),
    fontWeight: '400'
  },
  progressBarPosition: {
    borderWidth: scale(0),
    marginTop: verticalScale(0.1)
  },
  skipText: {
    color: colors.buttonBg,
    fontSize: moderateScale(14),
    fontWeight: '400',
    textAlign: 'center'
  },
  skipTextPosition: {
    marginTop: verticalScale(5)
  },
  textInputContent: {
    gap: verticalScale(5)
  },
  textInputPosition: {
    alignItems: 'center',
    marginTop: verticalScale(40)
  },
  unitItems: {
    backgroundColor: colors.textInput,
    borderRadius: scale(2),
    borderWidth: scale(0.15),
    height: verticalScale(33),
    justifyContent: 'center',
    marginTop: verticalScale(5),
    width: scale(330)
  },
  unitItemsList: {
    alignItems: 'center'
  },
  unitItemsPosition: {
    marginTop: verticalScale(5)
  },
  unitItemsText: {
    color: colors.mainText,
    marginLeft: scale(20)
  },
  unitProperties: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: scale(20)
  },
  unitText: {
    color: colors.header,
    fontSize: moderateScale(14),
    fontWeight: '500'
  },
  unitTextPosition: {
    marginLeft: scale(12),
    marginTop: verticalScale(25)
  }
});

export default styles;
