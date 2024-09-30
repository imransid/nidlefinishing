/* eslint-disable */
import React, { type FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import Styles from './style';

interface ICustomSubmitButtonProps {
  text: string;
  icon: React.ReactNode;
  onPress: any;
  disabled: boolean;
}

const CustomSubmitButton: FC<ICustomSubmitButtonProps> = ({ text, icon, onPress, disabled }) => {
  return (
    <TouchableOpacity style={Styles.buttonContainer} onPress={onPress} disabled={disabled}>
      {icon && <View>{icon}</View>}
      {text !== '' ? <Text style={Styles.buttonText}>{text}</Text> : <></>}
    </TouchableOpacity>
  );
};

export default CustomSubmitButton;
