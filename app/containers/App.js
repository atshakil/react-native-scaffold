import React, { Component, PropTypes } from 'react';
import { Provider, connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import i18n from 'react-native-i18n';
import AppNavigator from '../navigators/App';
import store from '../store';
import locales from '../locales';

i18n.fallbacks = true;
i18n.translations = locales;
// Overrides device locale. Remove when necessary locales are available
i18n.locale = "en";

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

App.propTypes = {
  nav: PropTypes.object,
  dispatch: PropTypes.func
};

export default () => // eslint-disable-line
  <Provider store={store}>
    <App />
  </Provider>;
