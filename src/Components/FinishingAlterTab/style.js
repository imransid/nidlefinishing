import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const Styles = StyleSheet.create({
    alterResendTabContainer:{backgroundColor: 'white', flex: 1},
    selectButtonContainer:{flexDirection: 'row', marginBottom:10},
  confirmButton:{
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#3C4FE9',
    flexDirection: 'row',
  },
  confirmButtonText:{color: 'white', marginStart: 10},
  selectLineDateButton:{
    width: '30%',
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    marginTop: 20,
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  selectLineDateButtonText:{fontSize: 16, color: '#000'}
});

export default Styles;
