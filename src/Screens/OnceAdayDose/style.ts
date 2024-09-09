import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  NextbuttonPosition: {
    marginTop: verticalScale(18),
    alignItems: 'center',
  },
  checkMarkIconPosition: {
    position: 'absolute',
    right: scale(20)
  },
  chip: {
    backgroundColor: colors.textInput,
    borderRadius: scale(2),
    borderWidth: scale(0.15),
    height: verticalScale(43),
    justifyContent: 'center',
    marginTop: verticalScale(5),
    width: scale(330)
  },
  chipContentProperties: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: scale(20)
  },
  chipPosition: {
    marginTop: verticalScale(20),
    alignItems: 'center'
  },
  chipProperties: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  chipText: {
    alignSelf: 'center',
    color: colors.mainText,
    marginLeft: scale(10)
  },
  headingPosition: {
    top: verticalScale(30),
  },
  imagePosition: {
    top: verticalScale(20),
    alignItems: 'center',
  },
  progressBarPosition: {
    borderWidth: scale(0)
  },
  selectButton: {
    alignItems: 'center',
    backgroundColor: colors.selectButtonBg,
    borderRadius: scale(6),
    height: verticalScale(27),
    justifyContent: 'center',
    position: 'relative',
    right: scale(20),
    width: scale(74)
  },
  selectButtonText: {
    color: colors.buttonBg
  },
  addMoresettingsContainer: {
    alignItems: 'center',
    marginTop: verticalScale(10)
  }
});

export default styles;
