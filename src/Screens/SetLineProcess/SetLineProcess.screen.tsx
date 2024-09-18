import React, { type FC, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import LinearGradient from 'react-native-linear-gradient';
import { LANDSCAPE, OrientationLocker } from 'react-native-orientation-locker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';

import { type RootState } from '@/store';

import Styles from './Styles';

const SetLineProcessScreen: FC = ({ navigation }: any) => {
  const finishingOrganizationData = useSelector((e: RootState) => e.setLine.finishingOrg);

  const finishingProgressListData = useSelector((e: RootState) => e.setLine.finishingProcessList);

  const [finishingOrganization, setFinishingOrganization] = useState(null);
  const [finishingProcess, setFinishingProcess] = useState(null);

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
      <View style={Styles.dropdownContainer}>
        <View>
          <Dropdown
            style={Styles.dropDownStyle}
            itemTextStyle={Styles.dropdownItemTextStyle}
            selectedTextStyle={Styles.dropdownSelectedTextStyle}
            placeholder="Select Finishing Organization"
            placeholderStyle={Styles.dropdownPlaceholderStyle}
            data={finishingProgressListData}
            value={finishingOrganization}
            maxHeight={150}
            onChange={item => {
              setFinishingOrganization(item.value);
            }}
            iconColor="#444444"
            iconStyle={Styles.dropdownIconStyle}
            labelField="label"
            valueField="value"></Dropdown>
        </View>
        <View>
          <Dropdown
            style={Styles.dropDownStyle}
            itemTextStyle={Styles.dropdownItemTextStyle}
            selectedTextStyle={Styles.dropdownSelectedTextStyle}
            placeholder="Select Finishing Process"
            placeholderStyle={Styles.dropdownPlaceholderStyle}
            data={finishingOrganizationData}
            value={finishingProcess}
            maxHeight={150}
            onChange={item => {
              setFinishingProcess(item.value);
            }}
            iconColor="#444444"
            iconStyle={Styles.dropdownIconStyle}
            labelField="label"
            valueField="value"></Dropdown>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('FinishingReceive' as never)}
            style={Styles.nextButton}>
            <Text style={Styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SetLineProcessScreen;
