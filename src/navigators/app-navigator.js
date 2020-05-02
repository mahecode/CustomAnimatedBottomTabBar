import React from 'react';
import Home from '../screens/Home';
import Community from '../screens/Community';
import Notification from '../screens/Notification';
import Profile from '../screens/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTab from '../BottomTab';
import AddPost from '../screens/AddPost';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator tabBar={(props) => <BottomTab {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Community" component={Community} />
      <Tab.Screen name="AddPost" component={AddPost} />
      <Tab.Screen name="Trending" component={Notification} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
