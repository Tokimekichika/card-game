import {combineReducers} from 'redux'
import authReducer from './auth/authReducer'
import buyReducer from "./shop/buyReducer";
import deckReducer from "./deck/deckReducer";
import collectionReducer from "./collectDeck/collectDeckReducer";
import initMyDeckReducer from "./initMyDeck/initMyDeckReducer";

export default combineReducers({
  auth: authReducer,
  shop: buyReducer,
  deck: deckReducer,
  collection: collectionReducer,
  myCreateDeck: initMyDeckReducer
})
