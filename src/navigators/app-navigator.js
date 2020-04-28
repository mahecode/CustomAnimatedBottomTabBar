import React from 'react';
import Home from '../screens/Home';
import Community from '../screens/Community';
import Trending from '../screens/Trending';
import Profile from '../screens/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTab from '../BottomTab';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator tabBar={(props) => <BottomTab {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Community" component={Community} />
      <Tab.Screen name="Trending" component={Trending} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
