import React from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import styles from './style';
import { scale, moderateScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../theme/colors';

interface ICalendarModalProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  selectedDates: { [date: string]: { selected: boolean } };
  setSelectedDates: (dates: { [date: string]: { selected: boolean } }) => void;
}

const CalendarModalWithDates: React.FC<ICalendarModalProps> = ({
  modalVisible,
  setModalVisible,
  selectedDates,
  setSelectedDates
}) => {
  const navigation = useNavigation();

  const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long'
    };
    return date.toLocaleDateString('en-GB', options);
  };

  const handleDayPress = (day: any) => {
    const dateString = day.dateString;
    const updatedDates = { ...selectedDates };

    if (updatedDates[dateString]) {
      delete updatedDates[dateString];
    } else {
      updatedDates[dateString] = { selected: true };
    }

    setSelectedDates(updatedDates);
  };

  const handleCancelPress = () => {
    setModalVisible(false);
    setSelectedDates({});
  };

  const handleOkPress = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.calendarContainer}>
            <Calendar
              onDayPress={handleDayPress}
              markedDates={Object.keys(selectedDates).reduce((marked, date) => {
                marked[date] = {
                  selected: true,
                  customStyles: {
                    container: {
                      backgroundColor: colors.buttonBg,
                      borderRadius: scale(20)
                    },
                    text: {
                      color: 'white'
                    }
                  }
                };
                return marked;
              }, {} as any)}
              markingType={'custom'}
              theme={{
                todayTextColor: colors.buttonBg,
                dayTextColor: colors.calendarDate,
                monthTextColor: colors.buttonBg,
                arrowColor: colors.buttonBg,
                selectedDayBackgroundColor: colors.buttonBg,
                selectedDayTextColor: colors.white,
                textDayFontWeight: '400',
                textMonthFontWeight: '500',
                textDayHeaderFontWeight: '500',
                textMonthFontSize: moderateScale(16),
                textDayFontSize: moderateScale(18),
                textDayHeaderFontSize: moderateScale(14)
              }}
              style={{
                width: scale(270),
                height: 'auto'
              }}
            />
            <ScrollView style={styles.scrollViewContainer}>
              <View style={styles.selectedDaysContainer}>
                <Text style={styles.selectedDaysHeaderText}>Selected Days: </Text>
                {Object.keys(selectedDates).length > 0 &&
                  Object.keys(selectedDates).map(date => (
                    <Text key={date} style={styles.selectedDaysText}>
                      {formatDate(new Date(date))}, {''}
                    </Text>
                  ))}
              </View>
            </ScrollView>
            <View style={styles.cancelAndOKbuttonPosition}>
              <TouchableOpacity onPress={() => handleCancelPress()}>
                <Text style={styles.cancelAndOKButtonText}>CANCEL</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleOkPress()}>
                <Text style={styles.cancelAndOKButtonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CalendarModalWithDates;
