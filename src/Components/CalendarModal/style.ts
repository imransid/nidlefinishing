import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

import {colors} from '../../theme/colors';

const styles = StyleSheet.create({
  calendarShape: {
    height: verticalScale(180),
    width: scale(180),
    borderRadius: 15,
  },
  modalContainer: {
    alignItems: 'center',
    backgroundColor: colors.modalBackground,
    flex: 1,
    justifyContent: 'center',
  },
});

export default styles;
