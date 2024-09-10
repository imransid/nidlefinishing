import React, { type FC, useMemo } from 'react';
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { Grid, Row } from 'react-native-easy-grid';
import LinearGradient from 'react-native-linear-gradient';
import { LANDSCAPE, OrientationLocker } from 'react-native-orientation-locker';
import Icon from 'react-native-vector-icons/FontAwesome';

import { FinishingLogo } from '@/assets';

// import useBackButtonHandler from '@/utils/useBackButtonHandler';
import Styles from './Styles';

const QCLaunchPad: FC = ({ navigation }) => {
  // useBackButtonHandler();
  // const dispatch = useDispatch();
  // global state

  // To Show alert for old state

  const qualityType = [
    {
      id: 1,
      name: 'Receive',
      workProcess: {
        id: 1,
        name: 'Table'
      }
    }
  ];

  const ShowQualityType: React.JSX.Element[] = useMemo(() => {
    return qualityType?.map((data, index) => {
      return (
        <View style={Styles.launchPadContainer} key={index}>
          <TouchableOpacity
            style={[
              Styles.QualityTypBtn,
              index === 0 ? Styles.BgOne : null,
              index === 1 ? Styles.BgTwo : null,
              index === 2 ? Styles.BgThree : null,
              index === 3 ? Styles.BgOne : null
            ]}>
            <View>
              <Text style={Styles.qualityTypeText}>{data.name}</Text>
              <Text style={Styles.forText}>({data.workProcess.name})</Text>
            </View>
            <View>
              <View style={Styles.buttonShadow}>{index === 0 ? <FinishingLogo /> : null}</View>
            </View>
            <View style={Styles.QualityPatrHoldr}>
              <Image
                style={Styles.imgHeight}
                source={require('../../assets/images/circle-pattern-01.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
      );
    });
  }, [qualityType]);

  return (
    <View style={Styles.container}>
      <OrientationLocker orientation={LANDSCAPE} />
      <LinearGradient colors={['#47B5FF', '#B09EFF']} style={Styles.linearGradientStyle}>
        <TouchableOpacity style={Styles.drawerBtn} onPress={() => navigation.openDrawer()}>
          <Icon name="bars" size={25} color="#fff" />
        </TouchableOpacity>
        <View style={Styles.header}>
          <Text style={Styles.qualityTypeText}>Process Selection Pad</Text>
        </View>
      </LinearGradient>

      <ImageBackground
        source={require('../../assets/images/Select-bg.png')}
        style={Styles.backgroundImageStyle}>
        <Grid>
          <Row>
            <View style={Styles.qualityTypeContainer}>
              {qualityType != null && ShowQualityType}
            </View>
          </Row>
        </Grid>
      </ImageBackground>
    </View>
  );
};

export default QCLaunchPad;
