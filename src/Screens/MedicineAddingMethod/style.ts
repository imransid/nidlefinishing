import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
  addManuallybuttonPosition: {
    marginTop: verticalScale(20)
  },
  addWithQrCodeLogoPosition: {
    marginTop: verticalScale(60)
  },
  container: {
    alignItems: 'center',
    flex: 1
  },
  handLogoPosition: {
    marginTop: verticalScale(30)
  },
  headerPosition: {
    top: verticalScale(60)
  },
  horizontalLine: {
    backgroundColor: colors.progressbarColor,
    height: verticalScale(1),
    marginTop: verticalScale(35),
    width: scale(313)
  },
  scanQrCodebuttonPosition: {
    marginTop: verticalScale(25)
  },
  subHeader: {
    color: colors.mainText,
    fontSize: moderateScale(18),
    fontWeight: '600',
    marginTop: verticalScale(30)
  },
  subHeaderPosition: {
    marginTop: verticalScale(5)
  },
  tinyQrCodeIconPosition: {
    marginTop: verticalScale(35)
  }
});

export default styles;
