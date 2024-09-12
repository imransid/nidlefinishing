import React, { useState } from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

import ReceiveTab from '../../Components/ReceiveTab/ReceiveTab';

import Styles from './Styles';

// Define the routes' components
const FirstRoute: React.FC = () => {
  return (
    <>
      <ReceiveTab />
    </>
  );
};
const SecondRoute: React.FC = () => <View style={[Styles.scene, { backgroundColor: '#673ab7' }]} />;
const ThirdRoute: React.FC = () => <View style={[Styles.scene, { backgroundColor: '#b78f3a' }]} />;
const FourthRoute: React.FC = () => <View style={[Styles.scene, { backgroundColor: '#650c83' }]} />;
const FifthRoute: React.FC = () => <View style={[Styles.scene, { backgroundColor: '#058b43' }]} />;

const FinishingReceiveScreen = () => {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'receive', title: 'RECEIVE', icon: 'arrow-circle-down' },
    { key: 'pending', title: 'PENDING', icon: 'clock-o', count: 2 },
    { key: 'finishing', title: 'FINISHING ALTER', icon: 'scissors' },
    { key: 'resend', title: 'ALTER RESEND', icon: 'repeat' },
    { key: 'summary', title: 'TODAY SUMMARY', icon: 'calendar-check-o' }
  ]);

  const renderScene = SceneMap({
    receive: FirstRoute,
    pending: SecondRoute,
    finishing: ThirdRoute,
    resend: FourthRoute,
    summary: FifthRoute
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      renderIcon={({ route, focused, color }) => (
        <View style={Styles.tabIconContainer}>
          <Icon name={route.icon} size={20} color={focused ? '#1C98D8' : '#555'} />
        </View>
      )}
      renderLabel={({ route, focused }) => (
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={[Styles.label, focused && Styles.focusedLabel]}>{route.title}</Text>
          {route.count && (
            <View style={Styles.counter}>
              <Text style={Styles.counterText}>{route.count}</Text>
            </View>
          )}
        </View>
      )}
      indicatorStyle={Styles.indicator}
      style={Styles.tabBar}
    />
  );

  return (
    <>
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
      <TabView
        lazy
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: Dimensions.get('window').width }}
        renderTabBar={renderTabBar}
        style={{ margin: 20, borderRadius: 20 }}
        swipeEnabled={true}
      />
    </>
  );
};

export default FinishingReceiveScreen;
