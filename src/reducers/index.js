import { combineReducers } from 'redux'
import counter from './counterReducer'
import { routerReducer as routing } from 'react-router-redux'

// The name you chose for your reducer is what is reflected in your components. ie
//    courses = state.courses
//    rhubarb = state.rhubarb
// See mapStateToProps in coursesPage.js for example.

const rootReducer = combineReducers({
  counter,
  routing,
})

export default rootReducer