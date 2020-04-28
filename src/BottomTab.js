import React from 'react';
import {
  View,
  Animated,
  StyleSheet,
  Easing,
  TouchableNativeFeedback,
  useWindowDimensions,
} from 'react-native';
import Bump from './icons/Bump';
import UserIcon from './icons/UserIcon';
import HomeIcon from './icons/Home';
import OfferIcon from './icons/OfferIcon';
import BagIcon from './icons/BagIcon';

const BottomTab = (props) => {
  const {width} = useWindowDimensions();
  const bump = React.useRef(new Animated.Value(-30)).current;

  const tabs = {
    0: {
      paddingBottom: React.useRef(new Animated.Value(-15)).current,
      scaleIcon: React.useRef(new Animated.Value(1.4)).current,
    },
    1: {
      paddingBottom: React.useRef(new Animated.Value(0)).current,
      scaleIcon: React.useRef(new Animated.Value(1)).current,
    },
    2: {
      paddingBottom: React.useRef(new Animated.Value(0)).current,
      scaleIcon: React.useRef(new Animated.Value(1)).current,
    },
    3: {
      paddingBottom: React.useRef(new Animated.Value(0)).current,
      scaleIcon: React.useRef(new Animated.Value(1)).current,
    },
  };

  const animat = (value, tab) => {
    const filterArr = Object.keys(tabs).filter((ele) => ele !== `${tab}`);
    Animated.parallel([
      Animated.timing(bump, {
        toValue: value,
        duration: 500,
        easing: Easing.bounce,
        useNativeDriver: true,
      }),
      Animated.timing(tabs[tab].paddingBottom, {
        toValue: -15,
        duration: 500,
        easing: Easing.bounce,
        useNativeDriver: true,
      }),
      Animated.timing(tabs[tab].scaleIcon, {
        toValue: 1.4,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(tabs[filterArr[0]].paddingBottom, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(tabs[filterArr[0]].scaleIcon, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(tabs[filterArr[1]].paddingBottom, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(tabs[filterArr[1]].scaleIcon, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(tabs[filterArr[2]].paddingBottom, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(tabs[filterArr[2]].scaleIcon, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleTab = (value, tab, tabName) => {
    animat(value, tab);
    props.navigation.navigate(tabName);
  };

  return (
    <>
      <View style={styles.outContainer}>
        <Animated.View
          style={{
            position: 'relative',
            top: 1,
            transform: [{translateX: bump}],
          }}>
          <Bump />
        </Animated.View>
        <View style={styles.container}>
          <TouchableNativeFeedback
            style={{borderRadius: 20}}
            background={TouchableNativeFeedback.Ripple('#fff', true)}
            onPress={() => handleTab(-30, 0, 'Home')}>
            <Animated.View
              style={{
                ...styles.iconStyle,
                transform: [
                  {translateY: tabs[0].paddingBottom},
                  {scale: tabs[0].scaleIcon},
                ],
              }}>
              <HomeIcon color="#fff" />
            </Animated.View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            style={{borderRadius: 20}}
            background={TouchableNativeFeedback.Ripple('#fff', true)}
            onPress={() => handleTab(60, 1, 'Community')}>
            <Animated.View
              style={{
                ...styles.iconStyle,
                transform: [
                  {translateY: tabs[1].paddingBottom},
                  {scale: tabs[1].scaleIcon},
                ],
              }}>
              <OfferIcon color="#fff" />
            </Animated.View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            style={{borderRadius: 20}}
            background={TouchableNativeFeedback.Ripple('#fff', true)}
            onPress={() => handleTab(150, 2, 'Trending')}>
            <Animated.View
              style={{
                ...styles.iconStyle,
                transform: [
                  {translateY: tabs[2].paddingBottom},
                  {scale: tabs[2].scaleIcon},
                ],
              }}>
              <BagIcon color="#fff" />
            </Animated.View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            style={{borderRadius: 20}}
            background={TouchableNativeFeedback.Ripple('#fff', true)}
            onPress={() => handleTab(240, 3, 'Profile')}>
            <Animated.View
              style={{
                ...styles.iconStyle,
                transform: [
                  {translateY: tabs[3].paddingBottom},
                  {scale: tabs[3].scaleIcon},
                ],
              }}>
              <UserIcon filColor="#fff" />
            </Animated.View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  outContainer: {
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
  },
  container: {
    position: 'relative',
    bottom: 0,
    width: '100%',
    height: 50,
    backgroundColor: '#F86967',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconStyle: {
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BottomTab;
