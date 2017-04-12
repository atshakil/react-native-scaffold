import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class S6 extends Component {
  static navigationOptions({navigation}) {
    return {
      title: "S6",
      headerVisible:
        !(navigation.state.params && navigation.state.params.headless)
    };
  }

  render() {
    const
      { navigation } = this.props,
      { dispatch, navigate, goBack } = navigation;

    return (
      <View>
        <Text>S6 text</Text>
        <Button title="Navigate (S7)" onPress={() => {navigate('S7')}} />
        <Button title="Navigate (S8)" onPress={() => {navigate('S8')}} />
        <Button title="Back (Navigation.goBack)" onPress={() => {
          goBack()
        }} />
        <Button title="Back" onPress={() => {
          dispatch(NavigationActions.back())
        }} />
      </View>
    );
  }
}
