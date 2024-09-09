import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  calendarShape: {
    height: verticalScale(260),
    width: scale(270)
  },
  horizontalLine: {
    backgroundColor: colors.buttonBg,
    height: verticalScale(1),
    marginTop: verticalScale(10),
    width: scale(242)
  },
  modalContainer: {
    alignItems: 'center',
    backgroundColor: colors.modalBackground,
    flex: 1,
    justifyContent: 'center'
  },
  scrollViewContainer: {
    maxHeight: '27%',
    width: '90%'
  },
  selectedDaysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: scale(1),
    marginTop: '5%'
  },
  selectedDaysHeaderText: {
    color: colors.buttonBg,
    fontSize: moderateScale(16),
    fontWeight: '600'
  },
  selectedDaysText: {
    color: colors.header,
    fontSize: moderateScale(16),
    fontWeight: '600',
    textAlign: 'justify'
  }
});

export default styles;
