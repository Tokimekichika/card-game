import { ACTIVE_DECK, CREATE_DECK, LOAD_MY_DECK } from "./actionsType";

const initialState = { myDeck: [] };

export default function deckReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MY_DECK: {
      return {...state, myDeck: action.payload }
    }
    case CREATE_DECK: {
      return {...state, myDeck: [...state.myDeck, action.payload] }
    }
    case ACTIVE_DECK: {
      return {...state, myDeck: state.myDeck.map((deck) => deck.id === action.payload.id ? {...deck, active: action.payload.active} : {...deck, active: false })}
    }
    default: return state
  }
}
