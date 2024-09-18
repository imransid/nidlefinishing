/* eslint-disable react-native/no-color-literals */

import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  cardContentStyle: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#EEEEEE',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  cardHeaderContainer: {
    alignItems: 'center'
  },
  cardHeading: {
    color: '#765492',
    fontSize: moderateScale(13),
    fontWeight: '700',
    textAlign: 'center',
    width: '100%'
  },
  cardStyle: {
    backgroundColor: '#F9F8FB',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: '#E3E1F0',
    borderWidth: 1
  },
  container: {
    flex: 1
  },
  informationContentStyle: {
    flexDirection: 'column',
    paddingHorizontal: scale(5)
  },
  lineContentStyle: {
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1C98D8',
    borderRadius: 5,
    height: verticalScale(15),
    justifyContent: 'center'
  },
  lineText: {
    color: '#fff',
    fontSize: moderateScale(7)
  },
  receiveInfoText: {
    color: '#444444',
    fontSize: moderateScale(8),
    fontWeight: '500'
  },
  sizeContentStyle: {
    flexDirection: 'row',
    gap: 10
  },
  sizeQtyText: {
    color: '#765492',
    fontSize: moderateScale(7),
    fontWeight: '500'
  },
  statusTextCancel: {
    alignSelf: 'center',
    color: '#E62E2D',
    fontSize: moderateScale(7),
    fontWeight: '600'
  },
  statusTextConfirm: {
    alignSelf: 'center',
    color: '#4BB543',
    fontSize: moderateScale(7),
    fontWeight: '600'
  },
  statusTextPending: {
    alignSelf: 'center',
    color: '#D1B00D',
    fontSize: moderateScale(8),
    fontWeight: '600'
  }
});

export default styles;
