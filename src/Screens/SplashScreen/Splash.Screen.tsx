import React, { type FC } from 'react';
import { SafeAreaView, View } from 'react-native';
import Animated, {
  Easing,
  FadeInUp,
  FadeOut,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';

import TeamPharmaLogo from '../../assets/team-pharma-logo';

import styles from './style';

const duration = 2000;
const easing = Easing.bezier(0.25, -0.5, 0.25, 1);

const SplashScreen: FC = () => {
  const sv = useSharedValue(0);
  const scale = useSharedValue(1);

  const scaleStyles = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }]
  }));

  React.useEffect(() => {
    scale.value = withTiming(scale.value * 3, { duration: 1000 });
    sv.value = withTiming(1, { duration, easing });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Animated.View style={[styles.imageContainer, scaleStyles]}>
          <TeamPharmaLogo />
        </Animated.View>
      </View>
      <View style={styles.textContainer}>
        <Animated.Text entering={FadeInUp.delay(1000)} exiting={FadeOut} style={styles.appTypeText}>
          Medicine Reminder App
        </Animated.Text>
        <Animated.Text
          entering={FadeInUp.delay(1000)}
          exiting={FadeOut}
          style={styles.appDeveloperNameText}>
          Developed by Intellier Ltd.
        </Animated.Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
