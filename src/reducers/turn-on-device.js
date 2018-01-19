import {TURN_ON_DEVICE} from '../actions'

export default function(state = {}, action) {
  switch(action.type) {
    case TURN_ON_DEVICE:
      console.log('TURN_ON_DEVICE', action.payload)
      return action.payload
    default:
      return state
  }
}
