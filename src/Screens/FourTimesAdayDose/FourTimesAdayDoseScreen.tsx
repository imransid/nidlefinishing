import React, { type FC, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { ScrollView } from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

import MedicineLogo from '../../assets/medicine-logo';
import CustomButton from '../../Components/CustomButton/CustomButton';
import DoseInputModal from '../../Components/DoseInputModal/DoseInputModal';
import Header from '../../Components/Header/Header';
import MoreSettings from '../../Components/MoreSettingsComponent/MoreSettingsComponent';
import { colors } from '../../theme/colors';

import styles from './style';

const FourTimesAdayDose: FC = () => {
  const navigation = useNavigation();
  const [selectedTime, setSelectedTime] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false); // for time picker
  const [isModalVisible, setModalVisible] = useState(false); // for dose input
  const [doseInput, setDoseInput] = useState<number>(0);

  const handleSelectTime: any = () => {
    setOpen(true);
  };

  const handleSelectDose: any = () => {
    setModalVisible(true);
  };

  const clearTimeSelection: any = () => {
    setSelectedTime('');
  };

  const clearDoseSelection: any = () => {
    setDoseInput(0);
  };

  const handleSubmit: any = (inputValue: number) => {
    setDoseInput(inputValue);
    // Handle the submitted value here
    setModalVisible(false);
  };

  const handleNext: any = () => {
    navigation.navigate('AddedMedicine' as never);
  };

  return (
    <View style={styles.container}>
      <Progress.Bar color="#A6BDF8" progress={0.4} width={380} style={styles.progressBarPosition} />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.imagePosition}>
          <MedicineLogo />
        </View>
        <View style={styles.headingPosition}>
          <Header mainHeader="When do you need to take the dose?" />
        </View>
        {/* Time and Dose Chips */}
        <View style={styles.chipPosition}>
          <Header subHeader="First intake" />
          <View style={styles.chip}>
            <View style={styles.chipProperties}>
              <View style={styles.chipContentProperties}>
                {selectedTime !== '' && (
                  <TouchableOpacity onPress={() => clearTimeSelection()}>
                    <FontAwesome name="minus-circle" size={30} color={'red'} />
                  </TouchableOpacity>
                )}
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
                {doseInput !== 0 && (
                  <TouchableOpacity onPress={() => clearDoseSelection()}>
                    <FontAwesome name="minus-circle" size={30} color={'red'} />
                  </TouchableOpacity>
                )}
                <Text style={styles.chipText}>Dose</Text>
              </View>
              <TouchableOpacity style={styles.selectButton} onPress={() => handleSelectDose()}>
                <Text style={styles.selectButtonText}>
                  {doseInput === 0 ? 'Select' : doseInput}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <Header subHeader="Second intake" />
          <View style={styles.chip}>
            <View style={styles.chipProperties}>
              <View style={styles.chipContentProperties}>
                {selectedTime !== '' && (
                  <TouchableOpacity onPress={() => clearTimeSelection()}>
                    <FontAwesome name="minus-circle" size={30} color={'red'} />
                  </TouchableOpacity>
                )}
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
                {doseInput !== 0 && (
                  <TouchableOpacity onPress={() => clearDoseSelection()}>
                    <FontAwesome name="minus-circle" size={30} color={'red'} />
                  </TouchableOpacity>
                )}
                <Text style={styles.chipText}>Dose</Text>
              </View>
              <TouchableOpacity style={styles.selectButton} onPress={() => handleSelectDose()}>
                <Text style={styles.selectButtonText}>
                  {doseInput === 0 ? 'Select' : doseInput}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <Header subHeader="Third intake" />
          <View style={styles.chip}>
            <View style={styles.chipProperties}>
              <View style={styles.chipContentProperties}>
                {selectedTime !== '' && (
                  <TouchableOpacity onPress={() => clearTimeSelection()}>
                    <FontAwesome name="minus-circle" size={30} color={'red'} />
                  </TouchableOpacity>
                )}
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
                {doseInput !== 0 && (
                  <TouchableOpacity onPress={() => clearDoseSelection()}>
                    <FontAwesome name="minus-circle" size={30} color={'red'} />
                  </TouchableOpacity>
                )}
                <Text style={styles.chipText}>Dose</Text>
              </View>
              <TouchableOpacity style={styles.selectButton} onPress={() => handleSelectDose()}>
                <Text style={styles.selectButtonText}>
                  {doseInput === 0 ? 'Select' : doseInput}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Header subHeader="Fourth intake" />
          <View style={styles.chip}>
            <View style={styles.chipProperties}>
              <View style={styles.chipContentProperties}>
                {selectedTime !== '' && (
                  <TouchableOpacity onPress={() => clearTimeSelection()}>
                    <FontAwesome name="minus-circle" size={30} color={'red'} />
                  </TouchableOpacity>
                )}
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
                {doseInput !== 0 && (
                  <TouchableOpacity onPress={() => clearDoseSelection()}>
                    <FontAwesome name="minus-circle" size={30} color={'red'} />
                  </TouchableOpacity>
                )}
                <Text style={styles.chipText}>Dose</Text>
              </View>
              <TouchableOpacity style={styles.selectButton} onPress={() => handleSelectDose()}>
                <Text style={styles.selectButtonText}>
                  {doseInput === 0 ? 'Select' : doseInput}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* Add More Settings */}
        {selectedTime !== '' && doseInput !== 0 && (
          <View>
            <View style={styles.addMoreSettingsHeaderPosition}>
              <Header subHeader="Would you like to add more settings?" />
              <View style={styles.addMoresettingsContainer}>
                <MoreSettings />
              </View>
            </View>
          </View>
        )}
        {/* Time Picker Modal */}
        {open && (
          <DatePicker
            modal
            mode="time"
            open={open}
            date={date}
            dividerColor="white"
            onConfirm={date => {
              setOpen(false);
              setDate(date);
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
        {/* Dose Input Modal */}
        <DoseInputModal
          numKeybaordType={true}
          visible={isModalVisible}
          onClose={() => {
            setModalVisible(false);
          }}
          onSubmit={handleSubmit}
        />
      </ScrollView>
      {selectedTime !== '' && doseInput !== 0 && (
        <View style={styles.NextbuttonPosition}>
          <CustomButton
            onPress={handleNext}
            icon={<AntDesign name="arrowright" size={30} color={colors.white} />}
            text="Next"
          />
        </View>
      )}
    </View>
  );
};

export default FourTimesAdayDose;
