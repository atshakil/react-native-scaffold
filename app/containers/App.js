import React, { Component, PropTypes } from 'react';
import { Provider, connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import i18n from 'react-native-i18n';
import FCM, { FCMEvent, FCMEventType } from 'react-native-fcm';
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
  }),
  dispatch => ({
    dispatch
  })
)

class App extends Component {
  componentDidMount() {
    console.warn("Check log for FCM tokens");
    FCM.requestPermissions();
    FCM.getFCMToken().then(token => {
      // Send token to server
      console.log(`Token: ${token}`);
    });
    // Notification lister can be added here
    this.refreshTokenListener = FCM.on(FCMEvent.RefreshToken, token => {
      // Send token to server
      console.log(`Refresh token: ${token}`);
    });
  }

  componentWillUnmount() {
    console.log("Unmounting app...");
    // If a notification lister is added, it can be removed here
    this.refreshTokenListener.remove();
  }

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
