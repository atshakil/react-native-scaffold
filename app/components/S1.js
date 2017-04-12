import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class S1 extends Component {
  static navigationOptions = {
    title: "S1"
  };

  render() {
    const
      { navigation } = this.props,
      { dispatch } = navigation;

    return (
      <View>
        <Text>S1 text</Text>
        <Button title="Navigate (S2)" onPress={() => {navigation.navigate('S2')}} />
        <Button title="Settings" onPress={() => {
          dispatch(NavigationActions.navigate({
            routeName: 'Settings',
            params: {headless: true, title: "Settings!"}
          }))
        }} />
      </View>
    );
  }
}
