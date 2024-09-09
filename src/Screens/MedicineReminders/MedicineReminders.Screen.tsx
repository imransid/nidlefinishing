import React from 'react';
import { FC } from 'react';
import { TouchableOpacity, View, Text, TextInput } from 'react-native';
import styles from './style';
import Header from '../../Components/Header/Header';
import MedicineReminderLogo from '../../assets/medicine-reminder';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { colors } from '../../theme/colors';
import CustomButton from '../../Components/CustomButton/CustomButton';

const MedicineReminders: FC = () => {
  const navigation = useNavigation();
  const handleNext: any = () => {
    navigation.navigate('OnceAdayDose' as never);
  };
  return (
    <View>
      <View style={styles.headingPosition}>
        <Header mainHeader="Medicine Reminders" />
      </View>
      <View style={styles.imagePosition}>
        <MedicineReminderLogo />
      </View>
      <View style={styles.subHeadingPosition}>
        <Header subHeader="Set medicine reminders" />
      </View>

      <View style={styles.chipPosition}>
        <View style={styles.chip}>
          <View style={styles.chipProperties}>
            <View style={styles.chipContentProperties}>
              <Text style={styles.chipText}>Total Required :</Text>
              <View style={styles.inputPosition}>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="numeric"
                  style={styles.medicineInput}
                  maxLength={3}
                />
                <Text style={styles.medicineText}>Medicine</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.chip}>
          <View style={styles.chipProperties}>
            <View style={styles.chipContentProperties}>
              <Text style={styles.chipText}>Current Stock :</Text>
              <View style={styles.inputPosition}>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="numeric"
                  style={styles.medicineInput}
                  maxLength={3}
                />
                <Text style={styles.medicineText}>Medicine</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.chip}>
          <View style={styles.chipProperties}>
            <View style={styles.chipContentProperties}>
              <Text style={styles.chipText}>Remind {'  '}Left :</Text>
              <View style={styles.inputPosition}>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="numeric"
                  style={styles.medicineInput}
                  maxLength={3}
                />
                <Text style={styles.medicineText}>Medicine</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.NextbuttonPosition}>
        <CustomButton
          onPress={handleNext}
          icon={<AntDesign name="arrowright" size={30} color={colors.white} />}
          text="Next"
        />
      </View>
    </View>
  );
};

export default MedicineReminders;
