import React, { useState, useEffect } from 'react';
import { FC } from 'react';
import { TouchableOpacity, View, Text, FlatList } from 'react-native';
import DailyDoseLogo from '../../assets/medicine-daily-dose';
import styles from './style';
import Header from '../../Components/Header/Header';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CalendarModalWithDates from '../../Components/CalendarModalWithDates/CalenderModalWithDates';
import { colors } from '../../theme/colors';
import ScrollPicker from 'react-native-wheel-scrollview-picker';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../Components/CustomButton/CustomButton';
import AntDesign from 'react-native-vector-icons/AntDesign';

const MonthlyDose: FC = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDates, setSelectedDates] = useState<{
    [date: string]: { selected: boolean };
  }>({});
  const [numberOfDates, setNumberOfDates] = useState('');
  const [open, setOpen] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState('');

  const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long'
    };
    return date.toLocaleDateString('en-GB', options);
  };

  const handleSelectNumber: any = () => {
    setModalVisible(true); // Show the Calendar modal
  };

  const handleSelectTime: any = () => {
    setOpen(true);
  };

  const handleValueChange: any = (data: string, selectedIndex: number) => {
    setSelectedNumber(data);
    setOpen(false);
  };

  const clearDateSelection: any = () => {
    setNumberOfDates('');
    setSelectedDates({});
  };

  const clearNumberSelection: any = () => {
    setSelectedNumber('');
  };

  const handleNext: any = () => {
    navigation.navigate('MonthlyDoseDetails' as never);
  };

  // Update selectedNumber whenever selectedDates changes
  useEffect(() => {
    const numberOfSelectedDays = Object.keys(selectedDates).length;
    if (numberOfSelectedDays > 0) {
      setNumberOfDates(`${numberOfSelectedDays}`);
    } else {
      setNumberOfDates(''); // Reset if no days selected
    }
  }, [selectedDates]);

  return (
    <View style={styles.container}>
      <DailyDoseLogo />
      <Header mainHeader="Which days of the month?" />
      <View style={styles.chip}>
        <View style={styles.chipProperties}>
          <View style={styles.chipContentProperties}>
            {numberOfDates !== '' && (
              <TouchableOpacity onPress={clearDateSelection}>
                <FontAwesome name="minus-circle" size={30} color={'red'} />
              </TouchableOpacity>
            )}
            <Text style={styles.chipText}>Days</Text>
          </View>
          <TouchableOpacity style={styles.selectButton} onPress={handleSelectNumber}>
            <Text style={styles.selectButtonText}>
              {numberOfDates === '' ? 'Select' : numberOfDates}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {modalVisible && (
        <CalendarModalWithDates
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          selectedDates={selectedDates}
          setSelectedDates={setSelectedDates}
        />
      )}

      {selectedDates && (
        <FlatList
          data={Object.keys(selectedDates)}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Text style={styles.selectedDaysText}>
              {formatDate(new Date(item))}
              {','}
            </Text>
          )}
          numColumns={3}
          scrollEnabled={true}
          style={styles.selectedDaysList}
        />
      )}

      <Header subHeader="How many times of each day" />
      <View style={styles.chip}>
        <View style={styles.chipProperties}>
          <View style={styles.chipContentProperties}>
            {selectedNumber !== '' && (
              <TouchableOpacity onPress={() => clearNumberSelection()}>
                <FontAwesome name="minus-circle" size={30} color={'red'}></FontAwesome>
              </TouchableOpacity>
            )}
            <Text style={styles.chipText}>Time</Text>
          </View>
          <TouchableOpacity style={styles.selectButton} onPress={() => handleSelectTime()}>
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

      {numberOfDates !== '' && Object.keys(selectedDates).length > 0 && selectedNumber !== '' && (
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

export default MonthlyDose;
