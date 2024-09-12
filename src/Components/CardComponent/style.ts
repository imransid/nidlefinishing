import {StyleSheet} from 'react-native';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardHeading: {
    color: '#765492',
    fontSize: moderateScale(13),
    fontWeight: '700',
    textAlign: 'center',
    width: '100%',
  },
  cardStyle: {
    backgroundColor: '#F9F8FB',
    borderWidth: 1,
    borderColor: '#E3E1F0',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  cardContentStyle: {
    borderColor: '#EEEEEE',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lineContentStyle: {
    height: verticalScale(18),
    width: scale(35),
    backgroundColor: '#1C98D8',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lineText: {
    color: '#fff',
  },
  informationContentStyle: {
    flexDirection: 'column',
  },
  receiveInfoText: {
    fontSize: moderateScale(8),
    fontWeight: '500',
    color: '#444444',
  },
  sizeContentStyle: {
    flexDirection: 'row',
    gap: 10,
  },
  sizeQtyText: {
    fontSize: moderateScale(8),
    fontWeight: '500',
    color: '#765492',
  },
  statusText: {
    fontSize: moderateScale(8),
    fontWeight: '600',
    color: '#4BB543',
    marginTop: verticalScale(5),
  },
});

export default styles;
