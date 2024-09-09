import React, { useState } from 'react';
import { FC } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch } from 'react-native';
import Header from '../../Components/Header/Header';
import DoctorAppointmentsLogo from '../../assets/doctor-appointments';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../Components/CustomButton/CustomButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { colors } from '../../theme/colors';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import CalendarModal from '../../Components/CalendarModal/CalenderModal';
import { format } from 'date-fns';
import DatePicker from 'react-native-date-picker';
import Feather from 'react-native-vector-icons/Feather';

const DoctorAppointments: FC = () => {
  const navigation = useNavigation();

  const [dateModalOpen, setDateModalOpen] = useState(false);
  const [date, setDate] = useState('');
  const [time, setTime] = useState(new Date()); // time setting
  const [selectedTime, setSelectedTime] = useState('');
  const [open, setOpen] = useState(false); // for time picker
  const [isEnabled, setIsEnabled] = useState(false); // for toggle

  const handleSetDate: any = (date: string) => {
    const formattedDate = format(new Date(date), 'EEE, d MMMM, yyyy');
    setDate(formattedDate);
  };
  const handleNext: any = () => {
    navigation.navigate('OnceAdayDose' as never);
  };
  const handleSelectTime: any = () => {
    setOpen(true);
  };
  const handleStartDateSelectInstruction: any = () => {
    setDateModalOpen(!dateModalOpen);
  };
  const toggleSwitch: any = () => setIsEnabled(previousState => !previousState);
  return (
    <View>
      <View style={styles.headingPosition}>
        <Header mainHeader="Appointment" />
      </View>
      <View style={styles.imagePosition}>
        <DoctorAppointmentsLogo />
      </View>
      <View style={styles.subHeadingPosition}>
        <Header subHeader="Add an appointment" />
      </View>

      <View style={styles.chipPosition}>
        <View style={styles.chip}>
          <View style={styles.chipProperties}>
            <View style={styles.chipContentProperties}>
              <AntDesign name="calendar" size={25} color={colors.header} />
              <Text style={styles.chipText}>Date</Text>
            </View>
            <TouchableOpacity
              style={styles.selectButton}
              onPress={() => handleStartDateSelectInstruction()}>
              <Text style={styles.selectButtonText}>{date !== '' ? date : 'Select'}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.chip}>
          <View style={styles.chipProperties}>
            <View style={styles.chipContentProperties}>
              <AntDesign name="clockcircleo" size={22} color={colors.header} />
              <Text style={styles.chipText}>Time</Text>
            </View>
            <TouchableOpacity style={styles.selectButton} onPress={() => handleSelectTime()}>
              <Text style={styles.selectButtonText}>
                {selectedTime === '' ? 'Select' : selectedTime}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.chip}>
          <View style={styles.chipProperties}>
            <View style={styles.chipContentProperties}>
              <FontAwesome6 name="user-doctor" size={22} color={colors.header} />
              <Text style={styles.chipText}>Doctor’s Name</Text>
            </View>
            <View style={styles.inputPosition}>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="default"
                style={styles.nameInput}
                maxLength={3}
              />
            </View>
          </View>
        </View>
        <View style={styles.chip}>
          <View style={styles.chipProperties}>
            <View style={styles.chipContentProperties}>
              <Feather name="map-pin" size={22} color={colors.header} />
              <Text style={styles.chipText}>Location</Text>
            </View>
            <View style={styles.inputPosition}>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="default"
                style={styles.nameInput}
                maxLength={3}
              />
            </View>
          </View>
        </View>
        <View style={styles.chip}>
          <View style={styles.chipProperties}>
            <View style={styles.chipContentProperties}>
              <Feather name="bell" size={22} color={colors.header} />
              <Text style={styles.chipText}>Set Reminder</Text>
            </View>
            <View style={styles.inputPosition}>
              <Switch
                trackColor={{ false: '#767577', true: colors.toggleEnabled }}
                thumbColor={isEnabled ? colors.textInput : colors.textInput}
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.NextbuttonPosition}>
        <CustomButton
          onPress={handleNext}
          icon={<AntDesign name="arrowright" size={30} color={colors.white} />}
          text="Save"
        />
      </View>

      {dateModalOpen && (
        <CalendarModal
          modalVisible={dateModalOpen}
          setModalVisible={setDateModalOpen}
          setStartDate={handleSetDate}
          modalFOr="startDate"
        />
      )}
      {open && (
        <DatePicker
          modal
          mode="time"
          open={open}
          date={time}
          dividerColor="white"
          onConfirm={date => {
            setOpen(false);
            setTime(date);
            const timeStr = new Intl.DateTimeFormat('en-US', {
              hour: 'numeric',
              minute: '2-digit',
              hour12: true
            }).format(new Date(date));
            setSelectedTime(timeStr);
          }}
          onCancel={() => {
            setOpen(false);
          }}
          theme="dark"
        />
      )}
    </View>
  );
};

export default DoctorAppointments;
