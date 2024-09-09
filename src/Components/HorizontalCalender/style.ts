import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  calendarBox: {
    backgroundColor: colors.textInput,
    height: verticalScale(105),
    width: 'auto'
  },
  dateText: {
    color: colors.typedText,
    fontSize: moderateScale(22),
    fontWeight: '500'
  },
  dayContainer: {
    alignItems: 'center',
    backgroundColor: colors.selectButtonBg,
    borderRadius: scale(18),
    gap: scale(3),
    height: verticalScale(60),
    justifyContent: 'center',
    marginLeft: scale(5),
    marginRight: scale(5),
    width: scale(37)
  },
  dayText: {
    color: colors.typedText,
    fontSize: moderateScale(10),
    fontWeight: '400'
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  monthYear: {
    color: colors.buttonBg,
    fontSize: moderateScale(14),
    fontWeight: '500',
    marginLeft: scale(13)
  },
  navButton: {
    color: colors.buttonBg,
    fontSize: moderateScale(28),
    marginHorizontal: verticalScale(10),
    marginRight: scale(18)
  },
  navButtons: {
    flexDirection: 'row'
  },
  selectedDay: {
    backgroundColor: colors.buttonBg,
    borderRadius: scale(18)
  },
  selectedDayText: {
    color: colors.white
  },
  weekContainer: {
    flexDirection: 'row'
  }
});

export default styles;
