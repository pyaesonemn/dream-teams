import { AUTH_SLICE, PLAYERS_LIST_SLICE, TEAM_SLICE } from "./constants";
import { authReducer } from "./modules/auth";
import { playersListReducer } from "./modules/playersList";
import { teamReducer } from "./modules/team";

export const rootReducer = {
	[PLAYERS_LIST_SLICE]: playersListReducer,
	[AUTH_SLICE]: authReducer,
	[TEAM_SLICE]: teamReducer
};
