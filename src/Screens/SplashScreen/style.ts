import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#007AFF'
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    textAlign: 'center',
    position: 'absolute',
    bottom: verticalScale(30)
  },
  appTypeText: {
    color: '#FFFFFF',
    fontSize: moderateScale(18),
    fontWeight: '600',
    fontFamily: 'Work Sans',
    textAlign: 'center'
  },
  appDeveloperNameText: {
    color: '#FFFFFF',
    fontSize: moderateScale(14),
    fontWeight: '500',
    fontFamily: 'Work Sans',
    textAlign: 'center'
  }
});

export default styles;
