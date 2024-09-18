import React, { useState } from 'react';
import {
  TextInput,
  type TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import type ICustomTextInputProps from '../../Interfaces/ICustomTextInputProps';

import styles from './style';

const CustomTextInput: React.FC<ICustomTextInputProps & TextInputProps> = ({
  type,
  value,
  onChangeText,
  maxLength,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const getKeyboardType: any = () => {
    switch (type) {
      case 'quantity':
        return 'phone-pad';
      default:
        return 'default';
    }
  };

  return (
    <>
      <TextInput
        style={[
          styles.container,
          styles.textInput,
          { borderColor: isFocused ? '#1C98D8' : '#ddd' },
        ]}
        value={value}
        maxLength={maxLength}
        onChangeText={onChangeText}
        keyboardType={getKeyboardType()}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </>
  );
};

export default CustomTextInput;
