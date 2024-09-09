import React, { type FC, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Animated, {
  Easing,
  FadeInUp,
  FadeOut,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

import AddMedicineLogo from '../../assets/add-medicine-logo';
import CustomButton from '../../Components/CustomButton/CustomButton';
import { colors } from '../../theme/colors';

import styles from './style';

const duration = 2000;
const easing = Easing.bezier(0.25, -0.5, 0.25, 1);

const AddedMedicine: FC = () => {
  const navigation = useNavigation();
  const sv = useSharedValue(0);
  const scale = useSharedValue(1);

  const scaleStyles = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }]
  }));

  useEffect(() => {
    scale.value = withTiming(scale.value * 3, { duration: 1000 });
    sv.value = withTiming(1, { duration, easing });
  }, []);

  const handleAddAnotherMedicine: any = () => {
    navigation.navigate('MedicineAddingMethod' as never);
  };

  const handleNoThanks: any = () => {
    navigation.navigate('MainTabs' as never);
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.imageContainer, scaleStyles]}>
        <AddMedicineLogo />
      </Animated.View>
      <Animated.Text entering={FadeInUp.delay(1000)} exiting={FadeOut} style={styles.mainText}>
        You have successfully added
      </Animated.Text>
      <Animated.Text entering={FadeInUp.delay(1300)} exiting={FadeOut} style={styles.subText}>
        Adflox
      </Animated.Text>
      <Animated.View
        entering={FadeInUp.delay(1800)}
        exiting={FadeOut}
        style={styles.addAnotherMedButtonPosition}>
        <CustomButton
          onPress={handleAddAnotherMedicine}
          icon={<AntDesign name="arrowright" size={30} color={colors.white} />}
          text="Add Another Med"
        />
        <View style={styles.noThanksTextPosition}>
          <TouchableOpacity onPress={() => handleNoThanks()}>
            <Text style={styles.noThanksText}>No, Thanks</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

export default AddedMedicine;
