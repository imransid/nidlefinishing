/* eslint-disable */
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  alterResendTabContainer: { backgroundColor: 'white', flex: 1 },
  confirmButton: {
    alignItems: 'center',
    backgroundColor: '#3C4FE9',
    bottom: 0,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    position: 'absolute',
    width: '100%'
  },
  confirmButtonText: { color: 'white', marginStart: 10 },
  selectButtonContainer: { flexDirection: 'row', marginBottom: 10 },
  selectLineDateButton: {
    alignItems: 'center',
    borderColor: '#E5E5E5',
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    marginLeft: 20,
    marginTop: 20,
    paddingHorizontal: 20,
    width: '30%'
  },
  selectLineDateButtonText: { color: '#000', fontSize: 16 }
});

export default Styles;
