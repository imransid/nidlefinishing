import { scale, ScaledSheet } from 'react-native-size-matters';

const Styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  nidleLogo: {
    alignSelf: 'center',
    width: scale(100),
    height: scale(100)
  }
});

export default Styles;
