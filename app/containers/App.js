import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import store from '../store';
import AppNavigator from '../navigators/App';

@connect(
  state => ({
    nav: state.nav
  })
)

class App extends Component {
  render() {
    const { nav, dispatch } = this.props;

    return (
      <AppNavigator navigation={addNavigationHelpers({
        state: nav,
        dispatch
      })} />
    );
  }
}

export default () =>
  <Provider store={store}>
    <App />
  </Provider>
