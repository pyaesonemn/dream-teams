import { AUTH_SLICE, PLAYERS_LIST_SLICE } from "./constants";
import { authReducer } from "./modules/auth";
import { playersListReducer } from "./modules/playersList";

export const rootReducer = {
	[PLAYERS_LIST_SLICE]: playersListReducer,
	[AUTH_SLICE]: authReducer
};
