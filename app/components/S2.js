import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class S2 extends Component {
  static navigationOptions = {
    title: "S2"
  };

  render() {
    const { navigation } = this.props;

    return (
      <View>
        <Text>S2 text</Text>
        <Button
          title="Navigate (TabGroupA)"
          onPress={() => {navigation.navigate('TabGroupA')}} />
        <Button
          title="Navigate (Settings)"
          onPress={() => {navigation.navigate('Settings')}} />
      </View>
    );
  }
}
