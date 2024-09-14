import React, {useState} from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

import ReceiveTab from '../../Components/ReceiveTab/ReceiveTab';

import Styles from './Styles';
import AlterResendTab from '@/Components/AlterResendTab/AlterResendTab';
import TodaySummaryTab from '@/Components/TodaySummaryTab/TodaySummaryTab';
import PendingTab from '@/Components/PendingTab/PendingTab';
import FinishingAlterTab from '@/Components/FinishingAlterTab/FinishingAlterTab';

// Define the routes' components


const FinishingReceiveScreen = () => {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'receive', title: 'RECEIVE', icon: 'arrow-circle-down'},
    {key: 'pending', title: 'PENDING', icon: 'clock-o', count: 2},
    {key: 'finishing', title: 'FINISHING ALTER', icon: 'scissors'},
    {key: 'resend', title: 'ALTER RESEND', icon: 'repeat'},
    {key: 'summary', title: 'TODAY SUMMARY', icon: 'calendar-check-o'},
  ]);

  const FirstRoute: React.FC = () => {
    return (
      <>
        <ReceiveTab />
      </>
    );
  };
  const SecondRoute: React.FC = () => <PendingTab/>;
  const ThirdRoute: React.FC = () => <FinishingAlterTab/>;
  const FourthRoute: React.FC = () => <AlterResendTab/>;
  const FifthRoute: React.FC = () => <TodaySummaryTab/>;


  const renderScene = SceneMap({
    receive: FirstRoute,
    pending: SecondRoute,
    finishing: ThirdRoute,
    resend: FourthRoute,
    summary: FifthRoute,
  });
  

  const renderTabBar = props => (
    <TabBar
      indicatorContainerStyle={Styles.indicatorStyle}
      // tabStyle={Styles.tabStyle2}
      tabStyle={Styles.tabStyle2}
      {...props}
      renderIcon={({route, focused, color}) => (
        <View style={Styles.tabIconContainer}>
          <Icon
            name={route.icon}
            size={20}
            color={focused ? '#1C98D8' : '#555'}
          />
        </View>
      )}
      renderLabel={({route, focused}) => (
        <View style={Styles.tabLabelContainer}>
          <Text style={[Styles.label, focused && Styles.focusedLabel]}>
            {route.title}
          </Text>
          {route?.count && (
            <View style={Styles.counter}>
              <Text style={Styles.counterText}>{route?.count}</Text>
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
      <TabView
        lazy
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: Dimensions.get('window').width}}
        renderTabBar={renderTabBar}
        style={Styles.TabStyle}
        swipeEnabled={true}
      />
    </>
  );
};

export default FinishingReceiveScreen;
