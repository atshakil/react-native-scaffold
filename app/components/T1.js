import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class T1 extends Component {
  static navigationOptions = {
    title: "T1"
  };

  render() {
    const
      { navigation } = this.props,
      { dispatch, goBack } = navigation;

    return (
      <View>
        <Text>T1 text</Text>
        <Button title="Back (Navigation.goBack)" onPress={() => {
          goBack()
        }} />
        <Button title="Back" onPress={() => {
          dispatch(NavigationActions.back())
        }} />
        <Button title="Back to Home (S1) (no state manip.)" onPress={() => {
          dispatch(NavigationActions.navigate({routeName: 'S1'}))
        }} />
        <Button title="Back to Home (S1) (state reset)" onPress={() => {
          dispatch(NavigationActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({routeName: 'S1'})
            ]
          }))
        }} />
        <Button title="Inject: S1>TGA>S1>S2>TGA" onPress={() => {
          dispatch(NavigationActions.reset({
            index: 4,
            actions: [
              NavigationActions.navigate({routeName: 'S1'}),
              NavigationActions.navigate({routeName: 'TabGroupA'}),
              NavigationActions.navigate({routeName: 'S1'}),
              NavigationActions.navigate({routeName: 'S2'}),
              NavigationActions.navigate({routeName: 'TabGroupA'})
            ]
          }))
        }} />
      </View>
    );
  }
}
