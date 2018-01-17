import {CONNECT_TO_GCP} from '../actions';

export default function (state = {}, action) {
  console.log('action', action.type)
  switch (action.type) {
    case CONNECT_TO_GCP:
      console.log('action.payload', action.payload.data.connected)
      return action.payload.data.connected
    default:
      console.log('default state')
      return state;
  }
  // if (action.type === CONNECT_TO_GCP) {
  //   console.log('action.payload', action.payload)
  //   return action.payload
  // }
}
