import React, { type FC } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { LANDSCAPE, OrientationLocker } from 'react-native-orientation-locker';
import Icon from 'react-native-vector-icons/FontAwesome';

// import useBackButtonHandler from '@/utils/useBackButtonHandler';
import Styles from './Styles';

const FinishingReceiveScreen: FC = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <OrientationLocker orientation={LANDSCAPE} />
      <LinearGradient colors={['#fff', '#fff']} style={Styles.linearGradientStyle}>
        <TouchableOpacity style={Styles.drawerBtn} onPress={() => navigation.openDrawer()}>
          <Icon name="bars" size={25} color="#1C98D8" />
          <Image
            style={Styles.nidleBlueLogo}
            source={require('../../assets/images/nidle-logo-blue.png')}
          />
        </TouchableOpacity>

        <View style={Styles.header}>
          <Text style={Styles.qualityTypeText}>Process Selection Pad</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default FinishingReceiveScreen;
