import React from 'react';
import {View, Text} from 'react-native';

const Notification = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>
        Notification Screen
      </Text>
    </View>
  );
};

export default Notification;
