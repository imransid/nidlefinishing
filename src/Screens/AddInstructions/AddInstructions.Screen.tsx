import React, { type FC, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import * as Progress from 'react-native-progress';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { type NavigationProp, useNavigation } from '@react-navigation/native';

import AddInstructionsLogo from '../../assets/add-instructions';
import CustomButton from '../../Components/CustomButton/CustomButton';
import Header from '../../Components/Header/Header';
import { type AppStackParamList } from '../../models/routePageModel';
import { colors } from '../../theme/colors';

import styles from './style';

type AddInstructionsScreenNavigationProp = NavigationProp<AppStackParamList, 'AddInstructions'>;

const AddInstructions: FC = () => {
  const navigation = useNavigation<AddInstructionsScreenNavigationProp>();
  const [instruction, setInstruction] = useState('');
  const [open, setOpen] = useState(false); // for instruction picker

  const handleSelectInstruction: any = () => {
    setOpen(!open);
  };

  const clearInstructionSelection: any = () => {
    setInstruction('');
  };

  const handleNext: any = () => {
    navigation.navigate('OnceAdayDose', { instruction });
  };

  return (
    <View>
      <Progress.Bar color="#A6BDF8" progress={0.6} width={380} style={styles.progressBarPosition} />
      <View style={styles.headingPosition}>
        <Header mainHeader="Add Instruction" />
      </View>
      <View style={styles.imagePosition}>
        <AddInstructionsLogo />
      </View>
      <View style={styles.subHeadingPosition}>
        <Header subHeader="When do you need to take the dose?" />
      </View>

      <View style={styles.chipPosition}>
        <View style={styles.chip}>
          <View style={styles.chipProperties}>
            <View style={styles.chipContentProperties}>
              {instruction !== '' && (
                <TouchableOpacity onPress={() => clearInstructionSelection()}>
                  <FontAwesome name="minus-circle" size={30} color={'red'}></FontAwesome>
                </TouchableOpacity>
              )}
              <Text style={styles.chipText}>Instruction</Text>
            </View>
            <TouchableOpacity style={styles.selectButton} onPress={() => handleSelectInstruction()}>
              <Text style={styles.selectButtonText}>
                {instruction === '' ? 'Select' : instruction}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {open && (
        <View style={styles.instructionContainer}>
          {['Before Meal', 'During Meal', 'After Meal'].map(a => (
            <TouchableOpacity
              key={a}
              style={styles.instructionProperties}
              onPress={() => {
                setInstruction(a);
                setOpen(false);
              }}>
              <Text style={styles.instructionText}>{a}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {instruction !== '' && (
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

export default AddInstructions;
