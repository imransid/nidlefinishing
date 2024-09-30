import React, { type FC, useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import LinearGradient from 'react-native-linear-gradient';
import { LANDSCAPE, OrientationLocker } from 'react-native-orientation-locker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';

import { type RootState } from '@/store';
import {
  setDropdownFinishValue,
  setDropdownOrgValue
} from '@/store/slices/features/setLineProcess/slice';

import Styles from './Styles';

const SetLineProcessScreen: FC = ({ navigation }: any) => {
  const dispatch = useDispatch();

  // Retrieve data from Redux store
  const finishingOrganizationData = useSelector((state: RootState) => state.setLine.finishingOrg);
  const finishingProgressListData = useSelector(
    (state: RootState) => state.setLine.finishingProcessList
  );

  // Local state for dropdown values
  const [finishingOrganization, setFinishingOrganization] = useState<string | null>(null);
  const [finishingProcess, setFinishingProcess] = useState<string | null>(null);

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
        {/* Finishing Organization Dropdown */}
        <Dropdown
          style={Styles.dropDownStyle}
          itemTextStyle={Styles.dropdownItemTextStyle}
          selectedTextStyle={Styles.dropdownSelectedTextStyle}
          placeholder="Select Finishing Organization"
          placeholderStyle={Styles.dropdownPlaceholderStyle}
          data={finishingProgressListData} // Make sure this array contains objects with "label" and "value"
          value={finishingOrganization} // Bind value to state
          maxHeight={150}
          onChange={item => {
            setFinishingOrganization(item.value); // Set the value from dropdown selection
            if (item.id !== undefined) {
              dispatch(setDropdownOrgValue(item.id)); // Dispatch to Redux
            }
          }}
          iconColor="#444444"
          iconStyle={Styles.dropdownIconStyle}
          labelField="label"
          valueField="value"
        />

        {/* Finishing Process Dropdown */}
        <Dropdown
          style={Styles.dropDownStyle}
          itemTextStyle={Styles.dropdownItemTextStyle}
          selectedTextStyle={Styles.dropdownSelectedTextStyle}
          placeholder="Select Finishing Process"
          placeholderStyle={Styles.dropdownPlaceholderStyle}
          data={finishingOrganizationData} // Ensure this array contains objects with "label" and "value"
          value={finishingProcess} // Bind value to state
          maxHeight={150}
          onChange={item => {
            setFinishingProcess(item.value); // Set the value from dropdown selection
            if (item.id !== undefined) {
              dispatch(setDropdownFinishValue(item.id)); // Dispatch to Redux
            }
          }}
          iconColor="#444444"
          iconStyle={Styles.dropdownIconStyle}
          labelField="label"
          valueField="value"
        />

        {/* Next Button */}
        <TouchableOpacity
          onPress={() => {
            if (finishingProcess === null || finishingOrganization === null) {
              Alert.alert('Please Select Finishing Line & Process.');
            } else {
              navigation.navigate('FinishingReceive' as never);
            }
          }}
          style={Styles.nextButton}>
          <Text style={Styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SetLineProcessScreen;
