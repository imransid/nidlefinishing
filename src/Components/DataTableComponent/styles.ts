import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const Styles = StyleSheet.create({
  columnName: {
    color: '#4B4F61',
    fontSize: moderateScale(10),
    fontWeight: '800'
  },
  container: {
    backgroundColor: '#F9F8FB',
    borderRadius: scale(3),
    borderWidth: scale(0.15),
    marginTop: verticalScale(10),
    margin: scale(10),
    padding: verticalScale(10)
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: verticalScale(4)
  },
  headerText: {
    color: '#9B97C0',
    fontSize: moderateScale(10),
    fontWeight: '600'
  },
  subHeaderText: {
    color: '#765492',
    fontSize: moderateScale(12),
    fontWeight: '800'
  },
  tableFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 16
  },
  tableFooterText: {
    color: '#765492',
    fontSize: 16
  },
  tableFooterValue: {
    color: '#765492',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8
  },
  textInput: {
    borderColor: '#ddd',
    borderRadius: 8,
    borderWidth: 1,
    color: 'black',
    height: 35,
    marginLeft: 110,
    paddingHorizontal: 5,
    width: 100
  }
});

export default Styles;
