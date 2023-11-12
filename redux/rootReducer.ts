import { PLAYERS_LIST_SLICE } from "./constants";
import { playersListReducer } from "./modules/playersList";

export const rootReducer = {
	[PLAYERS_LIST_SLICE]: playersListReducer
};
