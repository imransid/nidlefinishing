import React, { type FC, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import * as Progress from 'react-native-progress';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ScrollPicker from 'react-native-wheel-scrollview-picker';
import { useNavigation } from '@react-navigation/native';

import MedicineLogo from '../../assets/medicine-logo';
import CustomButton from '../../Components/CustomButton/CustomButton';
import Header from '../../Components/Header/Header';
import { colors } from '../../theme/colors';

import styles from './style';

const AskTimeInterval: FC = () => {
  const navigation = useNavigation();
  const [selectedNumber, setSelectedNumber] = useState('');
  const [open, setOpen] = useState(false); // for time picker

  const handleSelectNumber: any = () => {
    setOpen(true);
  };

  const clearNumberSelection: any = () => {
    setSelectedNumber('');
  };

  const handleNext: any = () => {
    navigation.navigate('XtimesAdayDose' as never);
  };

  const handleValueChange: any = (data: string, selectedIndex: number) => {
    setSelectedNumber(data);
    setOpen(false);
  };

  return (
    <View style={styles.container}>
      <Progress.Bar color="#A6BDF8" progress={0.4} width={380} style={styles.progressBarPosition} />
      <MedicineLogo />
      <View>
        <Header mainHeader="When do you need to take the dose?" />
      </View>

      <View style={styles.chip}>
        <View style={styles.chipProperties}>
          <View style={styles.chipContentProperties}>
            {selectedNumber !== '' && (
              <TouchableOpacity onPress={clearNumberSelection}>
                <FontAwesome name="minus-circle" size={30} color={'red'} />
              </TouchableOpacity>
            )}
            <Text style={styles.chipText}>Time Interval</Text>
          </View>
          <TouchableOpacity style={styles.selectButton} onPress={handleSelectNumber}>
            <Text style={styles.selectButtonText}>
              {selectedNumber === '' ? 'Select' : selectedNumber}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Time Picker modal */}
      {open && (
        <ScrollPicker
          dataSource={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
          selectedIndex={1}
          renderItem={(data, index, isSelected) => (
            <View style={styles.numberPicker}>
              <Text
                style={[
                  styles.numberPickerText,
                  { color: isSelected ? colors.header : colors.typedText }
                ]}>
                {data}
              </Text>
            </View>
          )}
          onValueChange={handleValueChange}
          itemHeight={50}
          highlightColor="#d8d8d8"
        />
      )}

      {selectedNumber !== '' && (
        <View style={styles.buttonContainer}>
          <View style={styles.buttonPosition}>
            <CustomButton
              onPress={handleNext}
              icon={<AntDesign name="arrowright" size={30} color={colors.white} />}
              text="Next"
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default AskTimeInterval;
