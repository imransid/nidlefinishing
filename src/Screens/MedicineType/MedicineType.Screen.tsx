import React, { type FC, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import * as Progress from 'react-native-progress';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

import MedicineDoseTime from '../../assets/medicine-dose-time';
import CustomButton from '../../Components/CustomButton/CustomButton';
import Header from '../../Components/Header/Header';
import type IMedicineStrengthProps from '../../Interfaces/IMedicineStrengthProps';
import { colors } from '../../theme/colors';
import medicineTypes from '../../utils/medicineTypes';

import styles from './style';

const MedicineType: FC = () => {
  const navigation = useNavigation();

  const [selectedUnit, setSelectedUnit] = useState<string>('');

  const handleNext: any = () => {
    navigation.navigate('MedicineDoses' as never);
  };

  const handleSkip: any = () => {
    navigation.navigate('MedicineDoses' as never);
  };

  const RenderItems: React.FC<IMedicineStrengthProps> = ({ item, selectedUnit, onPress }) => {
    return (
      <View style={styles.unitItemsList}>
        <TouchableOpacity style={styles.unitItems} onPress={onPress}>
          <View style={styles.unitProperties}>
            <Text style={styles.formsItemsText}>{item}</Text>
            {selectedUnit === item && <AntDesign name="check" size={28} color={colors.buttonBg} />}
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <Progress.Bar color="#A6BDF8" progress={0.4} width={380} style={styles.progressBarPosition} />
      <View style={styles.imagePosition}>
        <MedicineDoseTime />
      </View>
      <View style={styles.headingPosition}>
        <Header mainHeader="Choose Medicine Type" />
      </View>

      <View style={styles.formsPosition}>
        <Text style={styles.formsText}>Forms</Text>
      </View>
      <FlatList
        style={styles.formsItemsPosition}
        data={medicineTypes}
        renderItem={({ item, index }) => (
          <RenderItems
            item={item}
            index={index}
            selectedUnit={selectedUnit}
            onPress={() => {
              setSelectedUnit(selectedUnit === item ? '' : item);
            }}
            key={index.toString()}
          />
        )}
      />
      <View style={styles.NextButtonPosition}>
        <CustomButton
          onPress={handleNext}
          icon={<AntDesign name="arrowright" size={30} color={colors.white} />}
          text="Next"
        />
      </View>
      <View style={styles.skipTextPosition}>
        <TouchableOpacity onPress={handleSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MedicineType;
