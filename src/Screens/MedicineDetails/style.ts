import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  buttonPosition: {
    bottom: verticalScale(18),
    position: 'absolute'
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  scannedText: {
    color: colors.success,
    fontSize: moderateScale(16),
    fontWeight: '600'
  }
});

export default styles;
