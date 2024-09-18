import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  calendarShape: {
    borderRadius: 15,
    height: verticalScale(250),
    width: scale(250)
  },
  modalContainer: {
    alignItems: 'center',
    backgroundColor: colors.modalBackground,
    flex: 1,
    justifyContent: 'center'
  }
});

export default styles;
