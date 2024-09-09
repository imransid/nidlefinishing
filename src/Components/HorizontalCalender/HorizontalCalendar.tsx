import React, { type FC, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import styles from './style';

const HorizontalCalendar: FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  // Function to format date to string (YYYY-MM-DD)
  const formatDate: any = (date: Date): string => {
    return date.toISOString().split('T')[0];
  };

  // Function to handle moving to the previous week
  const handlePrevWeek: any = (): void => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 7);
    setCurrentDate(newDate);
  };

  // Function to handle moving to the next week
  const handleNextWeek: any = (): void => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 7);
    setCurrentDate(newDate);
  };

  // Function to get an array of dates and day names for the current week
  const getWeekDates: any = (date: Date): Array<{ date: Date; dayName: string }> => {
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay());
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return Array.from({ length: 7 }, (_, i) => {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      return { date: day, dayName: dayNames[i] };
    });
  };

  // Function to render each day item in the FlatList
  const renderDay: any = ({ item }: { item: { date: Date; dayName: string } }) => {
    const isSelected = formatDate(item.date) === formatDate(currentDate);
    return (
      <TouchableOpacity
        onPress={() => {
          setCurrentDate(item.date);
        }}>
        <View style={[styles.dayContainer, isSelected && styles.selectedDay]}>
          <Text style={[styles.dateText, isSelected && styles.selectedDayText]}>
            {item.date.getDate()}
          </Text>
          <Text style={[styles.dayText, isSelected && styles.selectedDayText]}>{item.dayName}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  // Get the array of dates for the current week
  const weekDates = getWeekDates(currentDate);

  return (
    <View style={styles.calendarBox}>
      {/* Header with month/year on top left and navigation buttons on top right */}
      <View style={styles.header}>
        <Text style={styles.monthYear}>
          {currentDate.toLocaleString('default', {
            month: 'long',
            year: 'numeric'
          })}
        </Text>
        <View style={styles.navButtons}>
          <TouchableOpacity onPress={handlePrevWeek}>
            <Text style={styles.navButton}>‹</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNextWeek}>
            <Text style={styles.navButton}>›</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* FlatList to render days of the week */}
      <FlatList
        data={weekDates}
        renderItem={renderDay}
        keyExtractor={item => item.date.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.weekContainer}
      />
    </View>
  );
};

export default HorizontalCalendar;
