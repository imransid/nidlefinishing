import React from 'react';
import {FC} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import Styles from './style';

interface ICustomSubmitButtonProps {
  text: string;
  icon: React.ReactNode;
}

const CustomSubmitButton: FC<ICustomSubmitButtonProps> = ({text, icon}) => {
  return (
    <TouchableOpacity style={Styles.buttonContainer}>
      {icon && <View>{icon}</View>}
      {text !== '' ? <Text style={Styles.buttonText}>{text}</Text> : <></>}
    </TouchableOpacity>
  );
};

export default CustomSubmitButton;
