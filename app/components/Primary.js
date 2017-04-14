import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Primary extends Component {
  render() {
    return (
      <View>
        <Text>Hey</Text>
        <FontAwesome name="rocket" size={30} color="#900" />
      </View>
    );
  }
}
