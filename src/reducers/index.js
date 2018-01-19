import { combineReducers } from 'redux'
import connect from './connect'
// import listDevices from './list-devices'
// import turnOnDevice from './turn-on-device'
import currentDeviceState from './current-device-config'

const rootReducer = combineReducers({
  connected: connect,
  // devices: listDevices,
  // deviceOn: turnOnDevice,
  currentDeviceState
});

export default rootReducer;
