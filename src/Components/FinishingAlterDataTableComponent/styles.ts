import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const Styles = StyleSheet.create({
  columnName: {
    color: '#4B4F61',
    fontSize: moderateScale(10),
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: '#F9F8FB',
    borderRadius: scale(3),
    borderWidth: 1,
    borderColor:'#E3E1F0',
    marginHorizontal: scale(10),
    marginTop: verticalScale(8),
    padding: verticalScale(10),
    width:scale(400)
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
    fontSize: moderateScale(11),
    fontWeight: 'bold'
  },
  tableFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    borderTopWidth: 1,
    borderColor: '#E3E1F0',
    marginHorizontal:scale(8),
  },
  tableFooterValue: {
    color: '#765492',
    fontSize: moderateScale(11),
    fontWeight: 'bold',
  },
  textInput: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderRadius: 8,
    borderWidth: 1,
    color: 'black',
    height: 35,
    marginLeft: 110,
    paddingHorizontal: 5,
    width: 100
  },
  headerContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#E3E1F0',
  }, headerTextContainer:{
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
    gap:50
  }
});

export default Styles;
