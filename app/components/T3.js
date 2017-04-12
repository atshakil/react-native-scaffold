import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class T3 extends Component {
  static navigationOptions = {
    title: "T3"
  };

  render() {
    const
      { navigation } = this.props,
      { dispatch } = navigation;

    return (
      <View>
        <Text>T3 text</Text>
        <Button title="Navigate" onPress={() => {}} />
        <Button title="Settings" onPress={() => {
          dispatch(NavigationActions.navigate({routeName: 'Settings'}))
        }} />
      </View>
    );
  }
}
