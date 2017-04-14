import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { updateMessage } from '../actions/Message';

@connect(
  state => ({text: state.message.text}),
  dispatch => ({updateMessage(text) {dispatch(updateMessage(text));}})
)

export default class S3 extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {text: ""};
  }

  static navigationOptions = {
    title: "S3"
  };

  componentWillMount() {
    const
      { navigation, text } = this.props,
      { state } = navigation;

    this.setState({text: state.params ? state.params.text : text});
  }

  componentWillReceiveProps(nextProps) {
    const
      { navigation, text } = nextProps,
      { state } = navigation;

    this.setState({text: state.params ? state.params.text : text});
  }

  render() {
    const
      { navigation, updateMessage } = this.props,
      { dispatch, setParams } = navigation,
      { text } = this.state;

    return (
      <View>
        <Text>S3 text</Text>
        <Text>MESSAGE: {text}</Text>
        <Button title="Back" onPress={() => {
          dispatch(NavigationActions.back())
        }} />
        <Button title="Update MESSAGE (thru Redux)" onPress={() => {
          updateMessage("Updated thru Redux (intra-component)!");
        }} />
        <Button title="Update MESSAGE (thru setParams)" onPress={() => {
          setParams({text: "Updated thru setParams!"});
        }} />
      </View>
    );
  }
}

