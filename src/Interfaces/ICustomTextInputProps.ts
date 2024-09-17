import {type StyleProp, type TextStyle, type ViewStyle} from 'react-native';

interface ICustomTextInputProps {
  type: 'quantity';
  value: string;
  onChangeText: (text: string) => void;
  maxLength: number;
  containerStyle?: StyleProp<ViewStyle>;
}

export default ICustomTextInputProps;
