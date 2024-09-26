import React from 'react';
import { Modal, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { moderateScale } from 'react-native-size-matters';

import type ICalendarModalProps from '../../Interfaces/ICalendarModalProps';
import { colors } from '../../theme/colors';

import styles from './style';
import moment from 'moment';

// Define the type for the day parameter
interface DayObject {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
  onClickAble?: (e: number) => void;
  setDateTime?: string
}

const CalendarModal: React.FC<ICalendarModalProps> = ({
  calendarModalVisible,
  setCalendarModalVisible,
  onClickAble,
  setDate,
  setDateTime
}) => {
  const handleDayPress: any = (day: DayObject) => {
    if (setDate != null) {
      setDate(day.dateString);
    }
    setCalendarModalVisible(false);
  };

  const onClickLeaf = async (data: any): Promise<any> => {
    try {

      if (onClickAble != null) {
        onClickAble(data.dateString); // or pass any number you need
      }

      if (data !== undefined) {
        setDate?.(data.dateString);
        setDateTime?.(moment(data.timestamp).format('YYYY-MM-DD HH:mm:ss'))
      }

      setCalendarModalVisible(false);
    } catch (error) {
      console.error('Error during onClickLeaf execution:', error);
      // setLoader(false); // Stop loader
    } finally {
      // setLoader(false); // Stop loader
      // setTreeOpen(false);
    }
  };

  return (
    <View>
      <Modal
        transparent={true}
        visible={calendarModalVisible}
        animationType="slide"
        onRequestClose={() => {
          setCalendarModalVisible(false);
        }}>
        <View style={styles.modalContainer}>
          <Calendar
            onDayPress={onClickLeaf}
            theme={{
              todayTextColor: colors.buttonBg,
              dayTextColor: colors.calendarDate,
              monthTextColor: colors.buttonBg,
              arrowColor: colors.buttonBg,
              selectedDayBackgroundColor: colors.buttonBg,
              selectedDayTextColor: colors.textInput,
              textDayFontWeight: '400',
              textMonthFontWeight: '500',
              textDayHeaderFontWeight: '500',
              textMonthFontSize: moderateScale(10),
              textDayFontSize: moderateScale(10),
              textDayHeaderFontSize: moderateScale(10)
            }}
            style={styles.calendarShape}
          />
        </View>
      </Modal>
    </View>
  );
};

export default CalendarModal;
