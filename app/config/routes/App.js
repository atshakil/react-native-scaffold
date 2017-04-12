import { S1, S2 } from '../../components';
import TabGroupANavigator from '../../navigators/TabGroupA';
import SettingsNavigator from '../../navigators/Settings';

export default {
  S1: {screen: S1},
  S2: {screen: S2},
  TabGroupA: {
    screen: TabGroupANavigator,
    navigationOptions: {
      headerVisible: false
    }
  },
  Settings: {
    screen: SettingsNavigator,
    navigationOptions: {
      headerVisible: false
    }
  }
};
