import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  mainHeader: {
    color: colors.header,
    fontSize: moderateScale(24),
    fontWeight: '600'
  },
  subHeader: {
    color: colors.mainText,
    fontSize: moderateScale(16),
    fontWeight: '400',
  }
});

export default styles;
