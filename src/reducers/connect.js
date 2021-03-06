import {CONNECT_TO_GCP} from '../actions';

export default function (state = {}, action) {
  console.log('action', action.type)
  switch (action.type) {
    case CONNECT_TO_GCP:
      console.log('connect_to_gcp', action.payload.data.connected)
      return action.payload.data.connected;
    default:
      console.log('default state')
      return state;
  }
}
