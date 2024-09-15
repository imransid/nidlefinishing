import React from 'react';
import {FC} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import Styles from './style';

interface ICustomModalButtonProps {
  text: string;
  icon: React.ReactNode;
  onPress: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  buttonTextStyle?: StyleProp<TextStyle>;
}

const CustomModalButton: FC<ICustomModalButtonProps> = ({
  text,
  icon,
  onPress,
  buttonStyle,
  buttonTextStyle,
}) => {
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      {text !== '' ? <Text style={buttonTextStyle}>{text}</Text> : <></>}
      {icon && <View>{icon}</View>}
    </TouchableOpacity>
  );
};

export default CustomModalButton;
