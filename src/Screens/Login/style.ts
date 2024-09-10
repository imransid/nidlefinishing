import { Dimensions } from 'react-native';
import { moderateScale, scale, ScaledSheet } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const ScreenHeight = Dimensions.get('window').height;

const Styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1
  },
  subContainer: { alignSelf: 'center', marginTop: '3%', justifyContent: 'center' },
  nidleLogo: { alignSelf: 'center' },
  appNameContainer: { marginBottom: 0 },
  appNameTxt: { fontSize: moderateScale(25), color: '#525252', textAlign: 'center' },
  versionTxt: {
    textAlign: 'center',
    color: '#667085',
    fontSize: moderateScale(12),
    marginBottom: 10
  },
  textInputTxt: {
    borderWidth: 1,
    borderColor: '#D0D5DD',
    borderRadius: 20,
    width: scale(250),
    paddingLeft: 20,
    marginBottom: 5,
    color: '#000'
  },
  textInputErrorTxt: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 20,
    width: scale(250),
    paddingLeft: 20,
    marginBottom: 5,
    color: '#000'
  },
  errorTxt: { color: 'red', marginBottom: 8 },
  loginBtn: { backgroundColor: '#66A5E0', borderRadius: 8, height: 50, justifyContent: 'center' },
  loginBtnDisabled: {
    backgroundColor: '#808080',
    borderRadius: 8,
    height: 50,
    justifyContent: 'center'
  },
  loginBtnTxt: { fontSize: 16, color: 'white', textAlign: 'center' },
  image: {
    flex: 1
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fullHeight: {
    height: ScreenHeight
  },
  centeredDiv: {
    width: '35%'
  },
  centeredDivLg: {
    width: '15%'
  },
  centerDivSm: {
    width: '50%'
  },
  brbStyle: {
    backgroundColor: 'transparent',
    borderColor: colors.cornflowerBlue
  },
  button: {
    width: 150,
    borderRadius: 25,
    marginVertical: 15,
    paddingVertical: 8,
    backgroundColor: colors.cornflowerBlue
  },
  buttontext: {
    fontSize: 16,
    color: colors.white,
    textAlign: 'center'
  },
  my10: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 0
  },
  logoSm: {
    width: '20%'
  }
});

export default Styles;
