import { type StyleProp, type TextStyle, type ViewStyle } from 'react-native';

interface ICustomTextInputProps {
  isPassword?: boolean;
  type: 'string' | 'mobile' | 'email' | 'password';
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  placeholderTextColor?: string;
  maxLength: number;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  inputStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

export default ICustomTextInputProps;
