import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  BackbuttonPosition: {
    alignItems: 'center',
    marginTop: verticalScale(15)
  },
  addMoreSettingsHeaderPosition: {
    bottom: verticalScale(40)
  },
  addMoresettingsContainer: {
    alignItems: 'center',
    marginTop: verticalScale(10)
  },
  checkMarkIconPosition: {
    position: 'absolute',
    right: scale(20)
  },
  chip: {
    backgroundColor: colors.textInput,
    borderRadius: scale(2),
    borderWidth: scale(0.15),
    height: verticalScale(38),
    justifyContent: 'center',
    marginTop: verticalScale(5),
    width: scale(330)
  },
  chipContentProperties: {
    marginLeft: scale(20)
  },
  chipPosition: {
    alignItems: 'center'
  },
  chipText: {
    color: colors.mainText,
    fontSize: moderateScale(16),
    fontWeight: '400'
  },
  container: {
    flex: 1
  },
  headingPosition: {
    alignItems: 'center',
    top: verticalScale(10)
  },
  progressBarPosition: {
    borderWidth: scale(0)
  },
  scrollViewContainer: {
    paddingBottom: verticalScale(15)
  },
  selectButton: {
    alignItems: 'center',
    backgroundColor: colors.selectButtonBg,
    borderRadius: scale(6),
    height: verticalScale(27),
    justifyContent: 'center',
    position: 'relative',
    right: scale(20),
    width: scale(74)
  },
  selectButtonText: {
    color: colors.buttonBg
  }
});

export default styles;
