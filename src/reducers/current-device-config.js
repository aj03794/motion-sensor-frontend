import {GET_CURRENT_DEVICE_STATE} from '../actions';

export default function (state = {}, action) {
  console.log('action', action.type)
  switch (action.type) {
    case GET_CURRENT_DEVICE_STATE:
    console.log('reducer', action.payload.data)
      return action.payload.data;
    default:
      console.log('default state')
      return state;
  }
}
