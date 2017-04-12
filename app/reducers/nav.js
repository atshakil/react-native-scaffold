import AppNavigator from '../navigators/App';

export default (state, action) =>
  AppNavigator.router.getStateForAction(action, state) || state;
