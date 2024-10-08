import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    borderRadius: scale(3),
    borderWidth: scale(1),
    borderColor: '#ddd',
    height: verticalScale(18),
    width: scale(48),
    marginLeft: scale(42),
    backgroundColor: '#fff',
  },
  textInput: {
    fontSize: moderateScale(10),
    color: '#65637B',
    paddingVertical: verticalScale(2),
    textAlign: 'center',
  },
});

export default styles;
