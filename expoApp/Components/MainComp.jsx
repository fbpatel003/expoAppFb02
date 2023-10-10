import React from 'react';
import { Text, View } from 'react-native';

function MainComp() {
  return (
    <View>
      <View style={{ backgroundColor: 'yellow' ,  marginBottom: 10}}>
        <Text style={{ color: 'red' }}>Kiran bhai...</Text>
      </View>
      <View style={{ backgroundColor: 'green' }}>
        <Text style={{ color: 'white' }}>Kiran bhai k aage koi bol sakta hai kya..?</Text>
      </View>
    </View>
  );
}

export default MainComp;
