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
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  lineContentStyle: {
    backgroundColor: '#1C98D8',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height:verticalScale(15),
    alignContent:"center"
  },
  lineText: {
    color: '#fff',
    fontSize: moderateScale(7),
  },
  informationContentStyle: {
    flexDirection: 'column',
    paddingHorizontal: scale(5),
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
    fontSize: moderateScale(7),
    fontWeight: '500',
    color: '#765492',
  },
  statusTextConfirm: {
    fontSize: moderateScale(7),
    fontWeight: '600',
    color: '#4BB543',
    alignSelf:'center'
  },
  statusTextCancel: {
    fontSize: moderateScale(7),
    fontWeight: '600',
    color: '#E62E2D',
    alignSelf:'center'
  },
  statusTextPending: {
    fontSize: moderateScale(8),
    fontWeight: '600',
    color: '#D1B00D',
    alignSelf:'center'
  },
});

export default styles;
