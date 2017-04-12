import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import AppNavigator from '../navigators/App';
import store from '../store';

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
