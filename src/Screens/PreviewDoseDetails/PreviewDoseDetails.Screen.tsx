import React from 'react';
import { FC } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './style';
import MedicineImage from '../../assets/medicine-image';
import Header from '../../Components/Header/Header';
import { colors } from '../../theme/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '../../Components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const PreviewDoseDetails: FC = () => {
  const navigation = useNavigation();
  const handleDone: any = () => {
    navigation.navigate('HomeScreen' as never);
  };

  return (
    <>
      <View style={styles.imagePosition}>
        <MedicineImage />
      </View>

      <View style={styles.mainHeader}>
        <Header mainHeader="Adflox" />
      </View>
      <View style={styles.subHeader}>
        <Header subHeader="Capsule, 12 mg" />
      </View>

      <View style={styles.doseDetailsPosition}>
        <View style={styles.doseDetailsProperties}>
          <Header subHeader="Schedule" />
          <View style={styles.chip}>
            <View style={styles.dayContentProperties}>
              <Text style={styles.chipText}>Sun, Tue, Thu, Sat</Text>
            </View>
          </View>
        </View>
        <View style={styles.chip}>
          <View style={styles.timeAndQuantityProperties}>
            <Text style={styles.chipText}>Time</Text>
            <Text style={styles.chipText}>1 Capsule</Text>
          </View>
        </View>
        <View style={styles.chip}>
          <View style={styles.timeAndQuantityProperties}>
            <Text style={styles.chipText}>Time</Text>
            <Text style={styles.chipText}>1 Capsule</Text>
          </View>
        </View>
      </View>
      <View style={styles.doseDetailsPosition}>
        <View style={styles.doseDetailsProperties}>
          <Header subHeader="Optional Details" />
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            style={styles.displayNameInput}
            placeholder="Display Name"
            placeholderTextColor={colors.typedText}
            maxLength={10}
          />
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            style={styles.notesInput}
            placeholder="Notes"
            placeholderTextColor={colors.typedText}
            maxLength={50}
          />
        </View>
        <View style={styles.secondaryButtonPosition}>
          <TouchableOpacity style={styles.rescheduleButton}>
            <View style={styles.rescheduleButtonProperties}>
              <Ionicons name="alarm-outline" size={22} color={colors.header} />
              <Text style={styles.secondayButtonText}>Reschedule</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.historyButton}>
            <View style={styles.historyButtonProperties}>
              <MaterialCommunityIcons name="history" size={22} color={colors.header} />
              <Text style={styles.secondayButtonText}>History</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.DonebuttonPosition}>
          <CustomButton onPress={handleDone} icon={<></>} text="Done" />
        </View>
      </View>
    </>
  );
};

export default PreviewDoseDetails;
