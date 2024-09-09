import React, { type FC } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

import QrCodeLogo from '../../assets/qr-code-logo';
import CustomButton from '../../Components/CustomButton/CustomButton';
import { colors } from '../../theme/colors';

import styles from './style';

const ScanQrCode: FC = (): JSX.Element => {
  const navigation = useNavigation();

  const handlePress: any = () => {
    navigation.navigate('CameraScanner' as never);
  };

  return (
    <View style={styles.container}>
      <QrCodeLogo />
      <View style={styles.buttonPosition}>
        <CustomButton
          onPress={() => handlePress()}
          text="Let’s Scan QR Code"
          icon={<Icon name="arrowright" size={30} color={colors.white} />}
        />
      </View>
    </View>
  );
};

export default ScanQrCode;
