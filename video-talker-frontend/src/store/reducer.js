import { combineReducers } from 'redux';
import dashboardReducer from './reducers/dashboardReducer';
import callReducer from './reducers/callReducer';
import {firebaseReducer} from 'react-redux-firebase';
import authReducer from './reducers/authReducer';

export default combineReducers({
  dashboard: dashboardReducer,
  call: callReducer,
  firebase:firebaseReducer,
  auth: authReducer
});
