import React, { useState, type FC } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { LANDSCAPE, OrientationLocker } from 'react-native-orientation-locker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dropdown } from 'react-native-element-dropdown';
import Styles from './Styles';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const SetLineProcessScreen: FC = ({ navigation }: any) => {

  const finishingOrganizationData = useSelector(
    (e: RootState) => e.setLine.finishingOrg
  );

  const finishingProgressListData = useSelector(
    (e: RootState) => e.setLine.finishingProcessList
  );

  const [finishingOrganization, setFinishingOrganization] = useState(null);
  const [finishingProcess, setFinishingProcess] = useState(null);

  return (
    <View style={Styles.container}>
      <OrientationLocker orientation={LANDSCAPE} />
      <LinearGradient
        colors={['#fff', '#fff']}
        style={Styles.linearGradientStyle}>
        <TouchableOpacity
          style={Styles.drawerBtn}
          onPress={() => navigation.openDrawer()}>
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
          <Image
            style={Styles.nidleBlueLogo}
            source={require('../../assets/icons/userIcon.png')}
          />
        </View>
      </LinearGradient>
      <View
        style={{
          flex: 1,
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 15,
        }}>
        <View>
          <Dropdown
            style={{
              height: 50,
              width: 450,
              backgroundColor: '#fff',
              borderRadius: 10,
              paddingLeft: 15,
              paddingRight: 15,
            }}
            itemTextStyle={{ color: '#444444', fontSize: 16 }}
            selectedTextStyle={{ color: '#444444', fontSize: 16 }}
            placeholder="Select Finishing Organization"
            placeholderStyle={{ color: '#444444', fontSize: 16 }}
            data={finishingProgressListData}
            value={finishingOrganization}
            maxHeight={150}
            onChange={item => {
              setFinishingOrganization(item.value);
            }}
            iconColor="#444444"
            iconStyle={{ width: 20, height: 25 }}
            labelField="label"
            valueField="value"></Dropdown>
        </View>
        <View>
          <Dropdown
            style={{
              height: 50,
              width: 450,
              backgroundColor: '#fff',
              borderRadius: 10,
              paddingLeft: 15,
              paddingRight: 15,
            }}
            itemTextStyle={{ color: '#444444', fontSize: 16 }}
            selectedTextStyle={{ color: '#444444', fontSize: 16 }}
            placeholder="Select Finishing Process"
            placeholderStyle={{ color: '#444444', fontSize: 16 }}
            data={finishingOrganizationData}
            value={finishingProcess}
            maxHeight={150}
            onChange={item => {
              setFinishingProcess(item.value);
            }}
            iconColor="#444444"
            iconStyle={{ width: 20, height: 25 }}
            labelField="label"
            valueField="value"></Dropdown>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('FinishingReceive' as never)}
            style={{
              height: 50,
              width: 450,
              backgroundColor: '#3C4FE9',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: '#fff', fontSize: 18 }}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SetLineProcessScreen;
