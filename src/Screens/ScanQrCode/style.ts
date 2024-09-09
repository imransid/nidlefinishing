import { StyleSheet } from 'react-native';
import { verticalScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  buttonPosition: {
    bottom: verticalScale(18),
    position: 'absolute'
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
});

export default styles;
