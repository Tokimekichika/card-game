import {combineReducers} from 'redux'
import authReducer from './auth/authReducer'
import deckReducer from './deck/deckReducer'

export default combineReducers({
  auth: authReducer,
  deck: deckReducer,
})
