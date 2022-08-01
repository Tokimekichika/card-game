import { LOAD_MY_DECK } from "./actionsType";

const initialState = { myDeck: {} };

export default function deckReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MY_DECK: {
      return {...state, myDeck: action.payload }
    }
    default: return state
  }
}
