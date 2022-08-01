import { BUY_DECK } from "./actionType";


const initialState = {user:{}};

 export default function buyReducer(state = {user:{}}, action) {
     switch (action.type) {
         case BUY_DECK:
             return {...state, user: {...state.user,coins:state.user.coins-100}}
         default:
             return state
     }
 }
