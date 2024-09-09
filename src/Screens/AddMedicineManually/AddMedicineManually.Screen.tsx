import React, { type FC, useState } from 'react';
import { Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';

import CustomButton from '../../Components/CustomButton/CustomButton';
import CustomTextInput from '../../Components/CustomTextInput/CustomTextInput';
import Header from '../../Components/Header/Header';
import { colors } from '../../theme/colors';

import styles from './style';

const AddMedicineManually: FC = () => {
  const navigation = useNavigation();
  const [medicineName, setMedicineName] = useState<string>('');
  const handleNext: any = () => {
    navigation.navigate('AddMedicineStrength' as never);
  };
  return (
    <View>
      <View style={styles.headingPosition}>
        <Header mainHeader="Add Medicine" />
      </View>
      <View style={styles.textInputPosition}>
        <View style={styles.textInputContent}>
          <Text style={styles.inputHeader}>Medicine Name</Text>
          <CustomTextInput
            type="email"
            value={medicineName}
            onChangeText={setMedicineName}
            placeholder="Enter your medicine name..."
            maxLength={11}
            inputStyle={styles.inputText}
            leftIcon={<Fontisto name="drug-pack" size={30} color={'#888888'} />}
          />
        </View>
      </View>
      {medicineName !== '' && (
        <View style={styles.NextButtonPosition}>
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

export default AddMedicineManually;
