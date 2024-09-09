import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    flex: 1
  },
  buttonPosition: {
    bottom: verticalScale(18),
    position: 'absolute'
  },
  chip: {
    backgroundColor: colors.textInput,
    borderRadius: scale(6),
    borderWidth: scale(0.15),
    height: verticalScale(43),
    justifyContent: 'center',
    marginTop: verticalScale(12),
    width: scale(330)
  },
  chipContentProperties: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: scale(20)
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
  container: {
    alignItems: 'center',
    flex: 1
  },
  numberPicker: {
    alignItems: 'center',
    height: verticalScale(100),
    justifyContent: 'center',
    width: scale(200)
  },
  numberPickerText: {
    fontSize: moderateScale(20),
    fontWeight: '400'
  },
  progressBarPosition: {
    borderWidth: scale(0),
    marginTop: verticalScale(0.1)
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
  selectedDaysList: {
    maxHeight: '15%'
  },
  selectedDaysText: {
    color: colors.buttonBg,
    fontSize: moderateScale(14),
    fontWeight: '400',
    marginLeft: scale(10),
    marginTop: verticalScale(5)
  },
  weekDayPicker: {
    backgroundColor: colors.textInput,
    borderRadius: scale(6),
    borderWidth: scale(0.17),
    height: verticalScale(42),
    width: scale(330)
  },
  weekDayText: {
    fontSize: moderateScale(14),
    fontWeight: '500'
  }
});

export default styles;
