import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  NextbuttonPosition: {
    alignItems: 'center',
    bottom: verticalScale(18)
  },
  addMoreSettingsHeaderPosition: {
    bottom: verticalScale(40)
  },
  addMoresettingsContainer: {
    alignItems: 'center',
    marginTop: verticalScale(10)
  },
  chip: {
    backgroundColor: colors.textInput,
    borderRadius: scale(2),
    borderWidth: scale(0.15),
    height: verticalScale(35),
    justifyContent: 'center',
    marginTop: verticalScale(5),
    width: scale(330)
  },
  chipContentProperties: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: scale(20)
  },
  chipPosition: {
    alignItems: 'center',
    bottom: verticalScale(35)
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
  container: {
    flex: 1
  },
  headingPosition: {
    alignItems: 'center'
  },
  imagePosition: {
    alignItems: 'center'
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
