import { StackNavigator } from 'react-navigation';
import SettingsRoute from '../config/routes/Settings';

export default StackNavigator(
  SettingsRoute,
  {
    headerMode: "screen"
  }
);
