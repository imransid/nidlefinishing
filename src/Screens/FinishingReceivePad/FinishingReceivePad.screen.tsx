import React, { type FC, useMemo } from 'react';
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { Grid, Row } from 'react-native-easy-grid';
import LinearGradient from 'react-native-linear-gradient';
import { LANDSCAPE, OrientationLocker } from 'react-native-orientation-locker';
import Icon from 'react-native-vector-icons/FontAwesome';

import { FinishingLogo } from '@/assets';

// import useBackButtonHandler from '@/utils/useBackButtonHandler';
import Styles from './Styles';

const FinishingReceivePad: FC = ({ navigation }) => {
  // useBackButtonHandler();
  // const dispatch = useDispatch();
  // global state

  // To Show alert for old state

  const qualityType = [
    {
      id: 1,
      name: 'Finishing Receive',
      workProcess: {
        id: 1,
        name: 'Click to select'
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
      <LinearGradient colors={['#fff', '#fff']} style={Styles.linearGradientStyle}>
        <TouchableOpacity style={Styles.drawerBtn} onPress={() => navigation.openDrawer()}>
          <Icon name="bars" size={25} color="#1C98D8" />
          <Image
            style={Styles.nidleBlueLogo}
            source={require('../../assets/images/nidle-logo-blue.png')}
          />
        </TouchableOpacity>

        <View style={Styles.userIcon}>
          <View style={Styles.userIconTextContainer}>
            <Text style={Styles.userIconsOrgText}>FINISHING ORG</Text>
            <Text style={Styles.userIconProcessText}>PROCESS NAME</Text>
          </View>
          <Image style={Styles.nidleBlueLogo} source={require('../../assets/icons/userIcon.png')} />
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

export default FinishingReceivePad;
