import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  NextbuttonPosition: {
    marginTop: verticalScale(25),
    alignItems: 'center'
  },
  chip: {
    backgroundColor: colors.textInput,
    borderRadius: scale(2),
    borderWidth: scale(0.15),
    height: verticalScale(43),
    justifyContent: 'center',
    marginTop: verticalScale(5),
    width: scale(330)
  },
  chipContentProperties: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 20,
    gap: scale(8)
  },
  chipPosition: {
    marginTop: verticalScale(10),
    alignItems: 'center',
  },
  chipProperties: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  chipText: {
    alignSelf: 'center',
    color: colors.mainText,
  },
  headingPosition: {
    alignItems: 'center', 
    top: verticalScale(30)
  },
  imagePosition: {
    top: verticalScale(30),
    alignItems: 'center',
  },
  subHeadingPosition: {
    marginTop: verticalScale(30),
  },
  nameInput: {
    width: scale(150),
    height: scale(38),
    borderWidth: scale(0.15),
    fontSize: moderateScale(16),
    fontWeight: '400',
    borderRadius: scale(2),
    color: colors.typedText,
    textAlign: 'center',
    justifyContent: 'center'
  },
  inputPosition: { 
    marginRight: scale(15)
  },
  selectButton: {
    alignItems: 'center',
    backgroundColor: colors.selectButtonBg,
    borderRadius: scale(6),
    height: verticalScale(27),
    justifyContent: 'center',
    position: 'relative',
    right: scale(20),
    width: scale(145)
  },
  selectButtonText: {
    color: colors.buttonBg
  },

});

export default styles;
