import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class S8 extends Component {
  static navigationOptions = {
    title: "S8"
  };

  render() {
    const
      { navigation } = this.props,
      { navigate, goBack } = navigation;

    return (
      <View>
        <Text>S8 text</Text>
        <Button title="Back (Navigation.goBack)" onPress={() => {
          goBack()
        }} />
      </View>
    );
  }
}
