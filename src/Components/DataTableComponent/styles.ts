import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const Styles = StyleSheet.create({
  container: {
    borderWidth: scale(0.15),
    borderRadius: scale(3),
    padding: verticalScale(10),
    marginTop: verticalScale(10),
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: verticalScale(4),
  },
  headerText: {
    fontSize: moderateScale(10),
    fontWeight: '600',
    color: '#9B97C0',
  },
  subHeaderText: {
    fontSize: moderateScale(12),
    color: '#765492',
    fontWeight: '800',
  },
  columnName: {
    fontSize: moderateScale(10),
    fontWeight: '800',
    color: '#4B4F61',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    width: 100,
    height: 35,
    paddingHorizontal: 5,
    marginLeft: 110,
    color: 'black',
  },
  tableFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 16,
  },
  tableFooterText: {
    fontSize: 16,
    color: '#765492',
  },
  tableFooterValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#765492',
    marginLeft: 8,
  },
});

export default Styles;
