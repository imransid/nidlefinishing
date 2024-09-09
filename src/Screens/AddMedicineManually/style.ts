import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  NextButtonPosition: {
    alignItems: 'center',
    marginTop: verticalScale(20)
  },
  headingPosition: {
    alignItems: 'center',
    top: verticalScale(20)
  },
  inputHeader: {
    color: colors.header,
    fontSize: moderateScale(14),
    fontWeight: '500'
  },
  inputText: {
    color: colors.typedText,
    fontSize: moderateScale(16),
    fontWeight: '400'
  },
  textInputContent: {
    gap: verticalScale(5)
  },
  textInputPosition: {
    alignItems: 'center',
    marginTop: verticalScale(40)
  }
});

export default styles;
