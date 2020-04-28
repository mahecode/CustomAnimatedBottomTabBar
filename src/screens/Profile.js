import React from 'react';
import {View, Text} from 'react-native';

const Profile = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>Profile Screen</Text>
    </View>
  );
};

export default Profile;
