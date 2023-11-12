import { PLAYERS_LIST_SLICE } from "./constants";
import { RootState } from "./store";

export const selectPlayersList = (state: RootState) => state[PLAYERS_LIST_SLICE] || {};
