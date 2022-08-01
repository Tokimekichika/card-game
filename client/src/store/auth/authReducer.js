import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_REG } from "./actionType";


const initialState = { user: {} };

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_LOGIN: {
      return {...state, user: action.payload }
    }
    case AUTH_REG: {
      return {...state, user: action.payload }
    }
    case AUTH_LOGOUT: {
      return {...state, user: {} }
    }
    default: return state
  }
}
