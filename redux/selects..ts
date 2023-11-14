import { AUTH_SLICE, PLAYERS_LIST_SLICE, TEAM_SLICE } from "./constants";
import { RootState } from "./store";

export const selectPlayersList = (state: RootState) => state[PLAYERS_LIST_SLICE] || {};
export const selectAuth = (state: RootState) => state[AUTH_SLICE] || {};
export const selectTeam = (state: RootState) => state[TEAM_SLICE] || {};
