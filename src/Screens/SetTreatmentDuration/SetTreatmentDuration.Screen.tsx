import React, { type FC, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import * as Progress from 'react-native-progress';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { type NavigationProp, useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';

import TreatmentDuration from '../../assets/treatment-duration';
import CalendarModal from '../../Components/CalendarModal/CalenderModal';
import CustomButton from '../../Components/CustomButton/CustomButton';
import Header from '../../Components/Header/Header';
import { type AppStackParamList } from '../../models/routePageModel';
import { colors } from '../../theme/colors';

import styles from './style';

type AddInstructionsScreenNavigationProp = NavigationProp<AppStackParamList, 'AddInstructions'>;

const SetTreatmentDuration: FC = () => {
  const navigation = useNavigation<AddInstructionsScreenNavigationProp>();
  const [startDateModalOpen, setStartDateModalOpen] = useState(false);
  const [endDateModalOpen, setendDateModalOpen] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleStartDateSelectInstruction: any = () => {
    setStartDateModalOpen(!startDateModalOpen);
  };
  const handleEndDateSelectInstruction: any = () => {
    setendDateModalOpen(!endDateModalOpen);
  };

  const handleSetStartDate: any = (date: string) => {
    const formattedDate = format(new Date(date), 'd MMMM, yyyy');
    setStartDate(formattedDate);
  };

  const handleSetEndDate: any = (date: string) => {
    const formattedDate = format(new Date(date), 'd MMMM, yyyy');
    setEndDate(formattedDate);
  };

  const handleNext: any = () => {
    navigation.navigate('OnceAdayDose' as never);
  };

  return (
    <View>
      <Progress.Bar color="#A6BDF8" progress={0.6} width={380} style={styles.progressBarPosition} />
      <View style={styles.headingPosition}>
        <Header mainHeader="Treatment Duration" />
      </View>
      <View style={styles.imagePosition}>
        <TreatmentDuration />
      </View>
      <View style={styles.subHeadingPosition}>
        <Header subHeader="Select the period of your treatment" />
      </View>

      <View style={styles.chipPosition}>
        <View style={styles.chip}>
          <View style={styles.chipProperties}>
            <View style={styles.chipContentProperties}>
              <Text style={styles.chipText}>Start Date</Text>
            </View>
            <TouchableOpacity
              style={styles.selectButton}
              onPress={() => handleStartDateSelectInstruction()}>
              <Text style={styles.selectButtonText}>{startDate !== '' ? startDate : 'Select'}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.chip}>
          <View style={styles.chipProperties}>
            <View style={styles.chipContentProperties}>
              <Text style={styles.chipText}>End Date</Text>
            </View>
            <TouchableOpacity
              style={styles.selectButton}
              onPress={() => handleEndDateSelectInstruction()}>
              <Text style={styles.selectButtonText}>{endDate !== '' ? endDate : 'Select'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {startDateModalOpen && (
        <CalendarModal
          modalVisible={startDateModalOpen}
          setModalVisible={setStartDateModalOpen}
          setStartDate={handleSetStartDate}
          modalFOr="startDate"
        />
      )}
      {endDateModalOpen && (
        <CalendarModal
          modalVisible={endDateModalOpen}
          setModalVisible={setendDateModalOpen}
          setEndDate={handleSetEndDate}
          modalFOr="endDate"
        />
      )}

      {startDate !== '' && endDate !== '' && (
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

export default SetTreatmentDuration;
