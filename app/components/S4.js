import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class S4 extends Component {
  static navigationOptions = {
    title: "S4"
  };

  render() {
    const { navigation } = this.props;

    return (
      <View>
        <Text>S4 text</Text>
        <Button title="Navigate" onPress={() => {}} />
      </View>
    );
  }
}
