import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  NextButtonPosition: {
    alignItems: 'center',
    marginTop: verticalScale(90)
  },
  formsItemsPosition: {
    marginTop: verticalScale(55)
  },
  formsItemsText: {
    color: colors.mainText,
    marginLeft: scale(20)
  },
  formsPosition: {
    marginLeft: scale(12),
    top: verticalScale(55)
  },
  formsText: {
    color: colors.header,
    fontSize: moderateScale(14),
    fontWeight: '500'
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
  textInputPosition: {
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
  unitProperties: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: scale(20)
  }
});

export default styles;
