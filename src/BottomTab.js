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
import HomeNew from './icons/HomeNew';
import Users from './icons/Users';
import Plus from './icons/Plus';
import Bag from './icons/Bag';
import Bell from './icons/Bell';

const BottomTab = (props) => {
  const {width} = useWindowDimensions();
  const bump = React.useRef(new Animated.Value(-42)).current;

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
    4: {
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
      Animated.timing(tabs[filterArr[3]].paddingBottom, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(tabs[filterArr[3]].scaleIcon, {
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
            onPress={() => handleTab(-42, 0, 'Home')}>
            <Animated.View
              style={{
                ...styles.iconStyle,
                transform: [
                  {translateY: tabs[0].paddingBottom},
                  {scale: tabs[0].scaleIcon},
                ],
              }}>
              <HomeNew />
            </Animated.View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            style={{borderRadius: 20}}
            background={TouchableNativeFeedback.Ripple('#fff', true)}
            onPress={() => handleTab(32, 1, 'Community')}>
            <Animated.View
              style={{
                ...styles.iconStyle,
                transform: [
                  {translateY: tabs[1].paddingBottom},
                  {scale: tabs[1].scaleIcon},
                ],
              }}>
              <Users color="#fff" />
            </Animated.View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            style={{borderRadius: 20}}
            background={TouchableNativeFeedback.Ripple('#fff', true)}
            onPress={() => handleTab(100, 2, 'AddPost')}>
            <Animated.View
              style={{
                ...styles.iconStyle,
                transform: [
                  {translateY: tabs[2].paddingBottom},
                  {scale: tabs[2].scaleIcon},
                ],
              }}>
              <Plus color="#fff" />
            </Animated.View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            style={{borderRadius: 20}}
            background={TouchableNativeFeedback.Ripple('#fff', true)}
            onPress={() => handleTab(173, 3, 'Trending')}>
            <Animated.View
              style={{
                ...styles.iconStyle,
                transform: [
                  {translateY: tabs[3].paddingBottom},
                  {scale: tabs[3].scaleIcon},
                ],
              }}>
              <Bell color="#fff" />
            </Animated.View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            style={{borderRadius: 20}}
            background={TouchableNativeFeedback.Ripple('#fff', true)}
            onPress={() => handleTab(245, 4, 'Profile')}>
            <Animated.View
              style={{
                ...styles.iconStyle,
                transform: [
                  {translateY: tabs[4].paddingBottom},
                  {scale: tabs[4].scaleIcon},
                ],
              }}>
              <Bag filColor="#fff" />
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
    backgroundColor: '#0277B6',
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
