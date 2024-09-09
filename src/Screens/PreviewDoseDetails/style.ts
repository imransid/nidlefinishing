import { StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
    DonebuttonPosition: {
        marginTop: verticalScale(38),
        alignItems: 'center'
      },
      chip: {
        backgroundColor: colors.textInput,
        borderRadius: scale(2),
        borderWidth: scale(0.15),
        height: verticalScale(35),
        justifyContent: 'center',
        marginTop: verticalScale(2),
        width: scale(330)
      },
      chipPosition: {
        alignItems: 'center',
        bottom: verticalScale(35),
      },
      dayContentProperties: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: scale(20)
      },
      chipText: {
        alignSelf: 'center',
        color: colors.mainText,
        marginLeft: scale(10)
      },
      imagePosition: {
        alignItems: 'center',
        top: verticalScale(20)
      },
      progressBarPosition: {
        borderWidth: scale(0)
      },
      secondaryButtonPosition: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: verticalScale(10),
        gap: scale(30),
        marginRight: scale(25)
      },
      secondayButtonText: {
        color: colors.header
      },
      rescheduleButton: {
        backgroundColor: colors.textInput,
        borderRadius: scale(2),
        borderWidth: scale(0.15),
        height: verticalScale(27),
        justifyContent: 'center',
        position: 'relative',
        right: scale(20),
        width: scale(130)
      },
      rescheduleButtonProperties: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginLeft: scale(10),
        marginRight: scale(20),
      },
      historyButton: {
        backgroundColor: colors.textInput,
        borderRadius: scale(2),
        borderWidth: scale(0.15),
        height: verticalScale(27),
        justifyContent: 'center',
        position: 'relative',
        right: scale(20),
        width: scale(101)
      },
      historyButtonProperties: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginLeft: scale(10),
        marginRight: scale(20),
      },
      doseDetailsPosition:{
        alignItems: 'center'
      },
      doseDetailsProperties: {
        gap: verticalScale(3)
      },
      mainHeader: {
        alignItems: 'center', 
        top: verticalScale(50)
      },
      subHeader: { 
        alignItems: 'center', 
      },
      timeAndQuantityProperties: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: scale(20),
        marginRight: scale(30),
      },
      displayNameInput: {
        width: scale(330),
        height: scale(35),
        borderWidth: scale(0.15),
        fontSize: moderateScale(13),
        fontWeight: '400',
        borderRadius: scale(2),
        color: colors.typedText,
      },
      notesInput: {
        width: scale(330),
        height: scale(80),
        borderWidth: scale(0.15),
        fontSize: moderateScale(13),
        fontWeight: '400',
        borderRadius: scale(2),
        color: colors.typedText,
      }
})

export default styles