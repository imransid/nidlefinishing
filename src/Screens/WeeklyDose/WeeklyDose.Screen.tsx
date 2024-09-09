import React, { type FC, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { DayPicker } from 'react-native-picker-weekday';
import * as Progress from 'react-native-progress';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ScrollPicker from 'react-native-wheel-scrollview-picker';
import { useNavigation } from '@react-navigation/native';

import DailyDoseLogo from '../../assets/medicine-daily-dose';
import CustomButton from '../../Components/CustomButton/CustomButton';
import Header from '../../Components/Header/Header';
import { colors } from '../../theme/colors';

import styles from './style';

// Mapping of day numbers to names
const dayNames: Record<number, string> = {
  1: 'Sunday',
  2: 'Monday',
  3: 'Tuesday',
  4: 'Wednesday',
  5: 'Thusday',
  6: 'Friday',
  7: 'Saturday'
};

const WeeklyDose: FC = () => {
  const navigation = useNavigation();
  const [selectedNumber, setSelectedNumber] = useState('');
  const [weekdays, setWeekdays] = useState<number[]>([]);
  const [selectedDay, setSelectedDay] = useState<Record<number, { selected: boolean }>>({});
  const [open, setOpen] = useState(false);

  const handleSelectNumber: any = () => {
    setOpen(true);
  };

  const clearNumberSelection: any = () => {
    setSelectedNumber('');
  };

  const handleNext: any = () => {
    navigation.navigate('WeeklyDoseDetails' as never);
  };

  const handleValueChange: any = (data: string) => {
    setSelectedNumber(data);
    setOpen(false);
  };

  // Callback for when a weekday is selected
  const handleWeekdayChange: any = (newWeekdays: number[]) => {
    setWeekdays(newWeekdays);

    // Updating the selectedDay state
    const newSelectedDays = newWeekdays.reduce<Record<number, { selected: boolean }>>(
      (acc, day) => {
        acc[day] = { selected: true };
        return acc;
      },
      {}
    );

    setSelectedDay(newSelectedDays);
  };

  return (
    <View style={styles.container}>
      <Progress.Bar color="#A6BDF8" progress={0.4} width={380} style={styles.progressBarPosition} />
      <DailyDoseLogo />
      <Header mainHeader="How many days of a week?" />
      <Header subHeader="Choose Days :" />
      <DayPicker
        wrapperStyles={styles.weekDayPicker}
        dayTextStyle={styles.weekDayText}
        weekdays={weekdays}
        setWeekdays={handleWeekdayChange}
        activeColor={colors.buttonBg}
        textColor="white"
        inactiveColor="grey"
      />

      <FlatList
        data={Object.keys(selectedDay)}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Text style={styles.selectedDaysText}>
            {dayNames[Number(item)]}
            {','}
          </Text>
        )}
        numColumns={4}
        scrollEnabled={true}
        style={styles.selectedDaysList}
      />

      <Header subHeader="How many times of each day" />
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

export default WeeklyDose;
