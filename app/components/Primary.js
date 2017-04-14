import React, { Component } from 'react';
import { Text } from 'react-native';
import I18n from 'react-native-i18n';

export default class Primary extends Component {
  render() {
    return (
      <Text>{I18n.t('greetings')}</Text>
    );
  }
}
