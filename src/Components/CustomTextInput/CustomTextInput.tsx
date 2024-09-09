import React, { useState } from 'react';
import { TextInput, type TextInputProps, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import type ICustomTextInputProps from '../../Interfaces/ICustomTextInputProps';

import styles from './style';

const CustomTextInput: React.FC<ICustomTextInputProps & TextInputProps> = ({
  type,
  value,
  onChangeText,
  placeholder,
  placeholderTextColor = '#888888',
  maxLength,
  isPassword = false,
  inputStyle,
  leftIcon,
  rightIcon
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility: any = () => {
    setShowPassword(!showPassword);
  };

  const getKeyboardType: any = () => {
    switch (type) {
      case 'mobile':
        return 'phone-pad';
      case 'email':
        return 'email-address';
      default:
        return 'default';
    }
  };

  return (
    <View style={styles.container}>
      {leftIcon !== true ? <View style={styles.iconLeft}>{leftIcon}</View> : <></>}
      <TextInput
        style={[styles.textInput, inputStyle]}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        maxLength={maxLength}
        onChangeText={onChangeText}
        keyboardType={getKeyboardType()}
        secureTextEntry={!showPassword}
      />
      {isPassword ? (
        <TouchableOpacity style={styles.iconRight} onPress={togglePasswordVisibility}>
          <Icon name={showPassword ? 'eye-outline' : 'eye'} size={30} color={'#888888'} />
        </TouchableOpacity>
      ) : rightIcon !== true ? (
        <View style={styles.iconRight}>{rightIcon}</View>
      ) : (
        <></>
      )}
    </View>
  );
};

export default CustomTextInput;
