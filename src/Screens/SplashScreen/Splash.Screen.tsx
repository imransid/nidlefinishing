import React, { type FC, useEffect, useRef } from 'react';
import { View } from 'react-native';
import { LANDSCAPE, OrientationLocker } from 'react-native-orientation-locker';
import LottieView from 'lottie-react-native';

import Styles from './Styles';
const SplashScreen: FC = () => {
  const animationRef = useRef<LottieView>(null);

  useEffect(() => {
    animationRef.current?.play();
  }, []);
  return (
    <View style={Styles.container}>
      <OrientationLocker orientation={LANDSCAPE} />
      <LottieView
        speed={0.4}
        loop={false}
        style={Styles.nidleLogo}
        ref={animationRef}
        source={require('../../assets/logo-splash-animation.json')}
      />
    </View>
  );
};
export default SplashScreen;
