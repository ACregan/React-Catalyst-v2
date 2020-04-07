import * as types from './actionTypes'

export function incrementCount() {
  return { type: types.INCREMENT_COUNT }
}

export function decrementCount() {
  return { type: types.DECREMENT_COUNT }
}

export function returnCount() {
  return { type: types.RETURN_COUNT }
}
