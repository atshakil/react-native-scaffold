import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class S7 extends Component {
  static navigationOptions = {
    title: "S7"
  };

  render() {
    const
      { navigation } = this.props,
      { navigate, goBack } = navigation;

    return (
      <View>
        <Text>S7 text</Text>
        <Button title="Back (Navigation.goBack)" onPress={() => {
          goBack()
        }} />
      </View>
    );
  }
}
