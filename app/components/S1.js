import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { updateMessage } from '../actions/Message';

@connect(null, dispatch => ({updateMessage(text) {dispatch(updateMessage(text));}}))

export default class S1 extends Component {
  static navigationOptions = {
    title: "S1"
  };

  render() {
    const
      { navigation, updateMessage } = this.props,
      { dispatch } = navigation;

    return (
      <View>
        <Text>S1 text</Text>
        <Button title="Navigate (S2)" onPress={() => {navigation.navigate('S2')}} />
        <Button title="Navigate (S3)" onPress={() => {
          dispatch(NavigationActions.navigate({routeName: 'S3'}))
        }} />
        <Button title="Navigate (S3) (update thru screen params)" onPress={() => {
          dispatch(NavigationActions.navigate({routeName: 'S3', params: {text: "Updated thru Screen Params!"}}))
        }} />
        <Button title="Navigate (S3) (update thru redux)" onPress={() => {
          updateMessage("Updated thru Redux!");
          dispatch(NavigationActions.navigate({routeName: 'S3'}))
        }} />
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
