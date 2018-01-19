import {LIST_DEVICES} from '../actions'

export default function(state = {}, action) {
  switch(action.type) {
    case LIST_DEVICES:
      console.log('LIST_DEVICES', action.payload)
      return action.payload
    default:
      return state
  }
}
