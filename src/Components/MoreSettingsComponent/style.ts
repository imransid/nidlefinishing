import { StyleSheet } from "react-native";
import { scale, verticalScale } from 'react-native-size-matters';

import { colors } from '../../theme/colors';

const styles = StyleSheet.create({
    addMoreSettingsContentProperties: {
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: scale(20)
      },
      addMoreSettingsItems: {
        alignItems: 'center',
        backgroundColor: colors.textInput,
        borderRadius: scale(2),
        borderWidth: scale(0.15),
        flexDirection: 'row',
        height: verticalScale(35),
        marginTop: verticalScale(5),
        width: scale(330)
      },
      addMoreSettingsItemsText: {
        color: colors.mainText,
        marginLeft: scale(20)
      },
})

export default styles;