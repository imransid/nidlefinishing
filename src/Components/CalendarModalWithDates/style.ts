import {StyleSheet} from 'react-native';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';
import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.modalBackground,
  },
  calendarContainer: {
    backgroundColor: colors.textInput,
    borderRadius: scale(16),
    padding: verticalScale(12),
    alignItems: 'center',
    width: scale(300), // Adjust width as needed
    height: verticalScale(440), // Adjust height as needed
  },
  cancelAndOKbuttonPosition: {
    flexDirection: 'row',
    position: 'absolute',
    left: scale(175),
    gap: scale(14),
    marginTop: verticalScale(400),
  },
  cancelAndOKButtonText: {
    color: colors.buttonBg,
    fontSize: moderateScale(14),
    fontWeight: '500',
  },
  selectedDaysHeaderText: {
    fontSize: moderateScale(12),
    fontWeight: '600',
    color: colors.typedText,
  },
  selectedDaysText: {
    fontSize: moderateScale(12),
    fontWeight: '600',
    color: colors.typedText,
    textAlign: 'justify',
  },
  selectedDaysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: scale(1),
    marginTop: '5%',
  },
  scrollViewContainer: {
    width: '90%',
    maxHeight: '27%',
  },
});

export default styles;
