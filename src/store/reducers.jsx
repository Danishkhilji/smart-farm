import { combineReducers } from 'redux';
import notificationReducer from './notificationReducer';
// Import other reducers as needed

const rootReducer = combineReducers({
    notification: notificationReducer,
  // Add other reducers here
});

export default rootReducer;