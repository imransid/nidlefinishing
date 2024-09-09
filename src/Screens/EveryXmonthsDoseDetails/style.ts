import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  addMoresettingsContainer: {
    alignItems: 'center',
    marginTop: verticalScale(10)
  },
  addMoreSettingsHeaderPosition: {
    bottom: verticalScale(40)
  },
  NextbuttonPosition: {
    bottom: verticalScale(18),
    alignItems: 'center'
  },
  checkMarkIconPosition: {
    position: 'absolute',
    right: scale(20)
  },
  chip: {
    backgroundColor: colors.textInput,
    borderRadius: scale(6),
    borderWidth: scale(0.15),
    height: verticalScale(35),
    justifyContent: 'center',
    marginTop: verticalScale(5),
    width: scale(330)
  },
  chipPosition: {
    alignItems: 'center',
    bottom: verticalScale(15),
  },
  chipContentProperties: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: scale(20)
  },
  chipProperties: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  chipText: {
    alignSelf: 'center',
    color: colors.mainText,
    marginLeft: scale(10)
  },
  headingPosition: {
    alignItems: 'center', 
  },
  imagePosition: {
    alignItems: 'center',
  },
  progressBarPosition: {
    borderWidth: scale(0)
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
  },
  scrollViewContainer: {
    paddingBottom: verticalScale(15)
  },
});

export default styles;
