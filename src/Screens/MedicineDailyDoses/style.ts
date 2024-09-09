import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  headingPosition: {
    top: verticalScale(50),
  },
  imagePosition: {
    top: verticalScale(20),
    alignItems: 'center',
  },
  medicineDoseItemsProperties: {
    backgroundColor: colors.textInput,
    borderRadius: scale(2),
    borderWidth: scale(0.15),
    height: verticalScale(43),
    justifyContent: 'center',
    marginTop: verticalScale(5),
    width: scale(330)
  },
  medicineDoseItemsPosition: {
    alignItems: 'center'
  },
  medicineDoseListContainer: {
    marginTop: verticalScale(60)
  },
  medicineDoseItemsText: {
    color: colors.mainText,
    marginLeft: scale(20)
  },
  progressBarPosition: {
    borderWidth: scale(0),
    marginTop: verticalScale(0.1)
  }
});

export default styles;
