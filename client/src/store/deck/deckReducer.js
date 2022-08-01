import { ADD_TO_DECK_FROM_SHOP } from "./actionType";




export default function buyReducer(state = {deck:[]}, action) {
    switch (action.type) {
        case ADD_TO_DECK_FROM_SHOP:
            return {...state, deck: action.payload}
        default:
            return state
    }
}
