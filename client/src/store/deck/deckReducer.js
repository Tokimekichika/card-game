import { ADD_TO_DECK_FROM_SHOP,INIT_DECK } from "./actionType";




export default function deckReducer(state = {deck:[]}, action) {
    switch (action.type) {
        case INIT_DECK:
            return {...state, deck: action.payload}
        case ADD_TO_DECK_FROM_SHOP:
            return {...state, deck: [...state.deck,action.payload]}
        default:
            return state
    }
}
