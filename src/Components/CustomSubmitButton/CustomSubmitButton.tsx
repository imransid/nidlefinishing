import React from 'react';
import { FC } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Styles from './style';

interface ICustomSubmitButtonProps {
  text: string;
  icon: React.ReactNode;
  onPress: any
}

const CustomSubmitButton: FC<ICustomSubmitButtonProps> = ({ text, icon, onPress }) => {
  return (
    <TouchableOpacity style={Styles.buttonContainer} onPress={onPress}>
      {icon && <View>{icon}</View>}
      {text !== '' ? <Text style={Styles.buttonText}>{text}</Text> : <></>}
    </TouchableOpacity>
  );
};

export default CustomSubmitButton;
