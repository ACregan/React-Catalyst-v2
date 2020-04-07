import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function counterReducer(state = initialState.value, action) {
  switch (action.type) {
    case types.INCREMENT_COUNT:
      return state + 1

    case types.DECREMENT_COUNT:
      return state - 1

    case types.RETURN_COUNT:
      return state

    default:
      return state
  }
}
