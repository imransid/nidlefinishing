import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FC } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../theme/colors';

const MoreSettings: FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
        style={styles.addMoreSettingsItems}
        onPress={() => navigation.navigate('AddInstructions' as never)}>
        <View style={styles.addMoreSettingsContentProperties}>
          <Ionicons name="add-circle-sharp" size={30} color={colors.addCircle} />
          <Text style={styles.addMoreSettingsItemsText}>Add Instruction</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.addMoreSettingsItems}
        onPress={() => navigation.navigate('SetTreatmentDuration' as never)}>
        <View style={styles.addMoreSettingsContentProperties}>
          <Ionicons name="add-circle-sharp" size={30} color={colors.addCircle} />
          <Text style={styles.addMoreSettingsItemsText}>Set treatment duration</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.addMoreSettingsItems}
        onPress={() => navigation.navigate('MedicineReminders' as never)}>
        <View style={styles.addMoreSettingsContentProperties}>
          <Ionicons name="add-circle-sharp" size={30} color={colors.addCircle} />
          <Text style={styles.addMoreSettingsItemsText}>Medicine Reminders</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.addMoreSettingsItems}
        onPress={() => navigation.navigate('DoctorAppointments' as never)}>
        <View style={styles.addMoreSettingsContentProperties}>
          <Ionicons name="add-circle-sharp" size={30} color={colors.addCircle} />
          <Text style={styles.addMoreSettingsItemsText}>Doctor Appointments</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.addMoreSettingsItems}
        onPress={() => navigation.navigate('AddPrescription' as never)}>
        <View style={styles.addMoreSettingsContentProperties}>
          <Ionicons name="add-circle-sharp" size={30} color={colors.addCircle} />
          <Text style={styles.addMoreSettingsItemsText}>Add prescription</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default MoreSettings;
