import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class S5 extends Component {
  static navigationOptions = {
    title: "S5"
  };

  render() {
    const { navigation } = this.props;

    return (
      <View>
        <Text>S5 text</Text>
        <Button title="Navigate" onPress={() => {}} />
      </View>
    );
  }
}
