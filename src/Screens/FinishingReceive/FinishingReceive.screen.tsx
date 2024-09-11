import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SceneMap, TabView} from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';

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
const SecondRoute: React.FC = () => (
  <View style={[styles.scene, {backgroundColor: '#673ab7'}]} />
);
const ThirdRoute: React.FC = () => (
  <View style={[styles.scene, {backgroundColor: '#b78f3a'}]} />
);
const FourthRoute: React.FC = () => (
  <View style={[styles.scene, {backgroundColor: '#650c83'}]} />
);
const FifthRoute: React.FC = () => (
  <View style={[styles.scene, {backgroundColor: '#058b43'}]} />
);

// Define the type for navigation state
interface NavigationState {
  index: number;
  routes: Array<{key: string; title: string}>;
}

// Functional component
const FinishingReceiveScreen: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [routes] = useState<NavigationState['routes']>([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
    {key: 'third', title: 'Third'},
    {key: 'fourth', title: 'Fourth'},
    {key: 'fifth', title: 'Fifth'},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    fourth: FourthRoute,
    fifth: FifthRoute,
  });

  return (
    <>
      <LinearGradient
        colors={['#fff', '#fff']}
        style={Styles.linearGradientStyle}>
        <TouchableOpacity
          style={Styles.drawerBtn}
          onPress={() => {
            /* Add navigation logic here */
          }}>
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
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: Dimensions.get('window').width}}
        style={styles.container}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
  },
});

export default FinishingReceiveScreen;
