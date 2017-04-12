import { StackNavigator } from 'react-navigation';
import AppRoute from '../config/routes/App';

export default StackNavigator(AppRoute, {
  headerMode: 'screen'
});
