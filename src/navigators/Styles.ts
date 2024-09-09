import { moderateScale, ScaledSheet } from 'react-native-size-matters';

import { colors } from '../theme/colors';

const styles = ScaledSheet.create({
  usernameText: {
    fontSize: moderateScale(14),
    fontWeight: '500',
    color: colors.header
  },
  greetingsText: {
    fontSize: moderateScale(12),
    fontWeight: '300',
    color: colors.mainText
  }
});

export default styles;
