import {combineReducers} from 'redux'
import authReducer from './auth/authReducer'
// import buyReducer from "./shop/buyReducer";

export default combineReducers({
  auth: authReducer,
  // shop: buyReducer,
})
