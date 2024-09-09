import React, { type FC, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ScrollPicker from 'react-native-wheel-scrollview-picker';
import { useNavigation } from '@react-navigation/native';

import MedicineLogo from '../../assets/medicine-logo';
import CustomButton from '../../Components/CustomButton/CustomButton';
import Header from '../../Components/Header/Header';
import { colors } from '../../theme/colors';

import styles from './style';

const EveryXmonthsDose: FC = () => {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [openTimeInterval, setOpenTimeInterval] = useState(false);
  const [date, setDate] = useState(new Date());
  const [selectedNumber, setSelectedNumber] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [timeInterval, setTimeInterval] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelectDayNumber: any = () => {
    setOpen(!open);
  };

  const handleSelectTimeInterval: any = () => {
    setOpenTimeInterval(!open);
  };

  const handleSelectDate: any = () => {
    setModalVisible(!modalVisible);
  };

  const clearDayNumberSelection: any = () => {
    setSelectedNumber('');
  };

  const clearTimeIntervalSelection: any = () => {
    setTimeInterval('');
  };

  const handleDayValueChange: any = (data: string, selectedIndex: number) => {
    setSelectedNumber(data);
    setOpen(false);
  };

  const handleTimeIntervalChange: any = (data: string, selectedIndex: number) => {
    setTimeInterval(data);
    setOpenTimeInterval(false);
  };

  const clearSelectedDate: any = () => {
    setSelectedDate('');
  };

  const handleNext: any = () => {
    navigation.navigate('EveryXmonthsDoseDetails' as never);
  };
  return (
    <View style={styles.container}>
      <MedicineLogo />
      <Header mainHeader="Set Weeks Interval" />
      <View style={styles.chip}>
        <View style={styles.chipProperties}>
          <View style={styles.chipContentProperties}>
            {selectedNumber !== '' && (
              <TouchableOpacity onPress={() => clearDayNumberSelection()}>
                <FontAwesome name="minus-circle" size={30} color={'red'}></FontAwesome>
              </TouchableOpacity>
            )}
            <Text style={styles.chipText}>Month</Text>
          </View>
          <TouchableOpacity style={styles.selectButton} onPress={() => handleSelectDayNumber()}>
            <Text style={styles.selectButtonText}>
              {selectedNumber === '' ? 'Select' : selectedNumber}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Header subHeader="When do you need to take the first dose?" />
      <View style={styles.chip}>
        <View style={styles.chipProperties}>
          <View style={styles.chipContentProperties}>
            {selectedDate !== '' && (
              <TouchableOpacity onPress={clearSelectedDate}>
                <FontAwesome name="minus-circle" size={30} color={'red'} />
              </TouchableOpacity>
            )}
            <Text style={styles.chipText}>Date</Text>
          </View>
          <TouchableOpacity style={styles.selectDateButton} onPress={handleSelectDate}>
            <Text style={styles.selectButtonText}>
              {selectedDate === '' ? 'Select' : selectedDate}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Header subHeader="How many times of each day" />
      <View style={styles.chip}>
        <View style={styles.chipProperties}>
          <View style={styles.chipContentProperties}>
            {timeInterval !== '' && (
              <TouchableOpacity onPress={() => clearTimeIntervalSelection()}>
                <FontAwesome name="minus-circle" size={30} color={'red'}></FontAwesome>
              </TouchableOpacity>
            )}
            <Text style={styles.chipText}>Time Interval</Text>
          </View>
          <TouchableOpacity style={styles.selectButton} onPress={() => handleSelectTimeInterval()}>
            <Text style={styles.selectButtonText}>
              {timeInterval === '' ? 'Select' : timeInterval}
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
          onValueChange={handleDayValueChange}
          itemHeight={50}
          highlightColor="#d8d8d8"
        />
      )}

      {openTimeInterval && (
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
          onValueChange={handleTimeIntervalChange}
          itemHeight={50}
          highlightColor="#d8d8d8"
        />
      )}

      {modalVisible && (
        <DatePicker
          modal
          mode="date"
          open={modalVisible}
          date={date}
          dividerColor="white"
          onConfirm={date => {
            setModalVisible(false);
            setDate(date);
            const options: Intl.DateTimeFormatOptions = {
              weekday: 'short',
              month: 'long',
              day: '2-digit',
              year: 'numeric'
            };
            const dateStr = new Intl.DateTimeFormat('en-US', options).format(date);
            setSelectedDate(dateStr);
          }}
          onCancel={() => {
            setModalVisible(false);
          }}
          theme="dark"
        />
      )}

      {selectedDate !== '' && selectedNumber !== '' && timeInterval !== '' && (
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

export default EveryXmonthsDose;
