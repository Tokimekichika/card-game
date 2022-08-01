import { LOAD_MY_DECK } from "./actionsType";

export function deckLoad(payload) {
  return { type: LOAD_MY_DECK, payload };
}
