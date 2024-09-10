import { ScaledSheet, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const Styles = ScaledSheet.create({
  input: {
    height: verticalScale(50),
    borderWidth: 1,
    padding: 10,
    width: '100%',
    backgroundColor: colors.inputBack,
    borderRadius: 10,
    borderColor: colors.inputBack,
    fontSize: verticalScale(16)
  }
});

export default Styles;
