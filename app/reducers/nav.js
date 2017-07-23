import AppNavigator from '../navigators/App';

const initialAction = AppNavigator.router.getActionForPathAndParams();
const initialState = AppNavigator.router.getStateForAction(initialAction);

export default (state = initialState, action) =>
  AppNavigator.router.getStateForAction(action, state) || state;
