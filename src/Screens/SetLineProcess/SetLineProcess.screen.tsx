import React, {useState, type FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import TreeView from 'react-native-animated-tree-view';
import LinearGradient from 'react-native-linear-gradient';
import {LANDSCAPE, OrientationLocker} from 'react-native-orientation-locker';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Dropdown} from 'react-native-element-dropdown';
// import useBackButtonHandler from '@/utils/useBackButtonHandler';
import Styles from './Styles';
const data = [
  {
    name: 'Cheese',
    value: 'cheese-value',
    items: [
      {
        name: 'Spicy',
        value: 'spicy-value',
      },
      {
        name: 'Cheese',
        value: 'cheese-value',
        items: [
          {
            name: 'Spicy',
            value: 'spicy-value',
          },
          {
            name: 'Spicy',
            value: 'spicy-value',
          },
        ],
      },
    ],
  },
];

const finishingOrganizationData = [
  {label: 'Item 1', value: '4A-1 2ND/4A-1-07'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
];

const SetLineProcessScreen: FC = ({navigation}) => {
  const [value, setValue] = useState(null);

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
        }}>
        <View style={{height: '50%', width: '50%'}}>
          <TreeView data={data} />
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
            itemTextStyle={{color: '#444444', fontSize: 16}}
            selectedTextStyle={{color: '#444444', fontSize: 16}}
            placeholder="Select Finishing Organization"
            placeholderStyle={{color: '#444444', fontSize: 16}}
            data={finishingOrganizationData}
            value={value}
            maxHeight={150}
            onChange={item => {
              setValue(item.value);
            }}
            iconColor="#444444"
            iconStyle={{width: 20, height: 25}}
            labelField="label"
            valueField="value"></Dropdown>
        </View>
      </View>
    </View>
  );
};

export default SetLineProcessScreen;
