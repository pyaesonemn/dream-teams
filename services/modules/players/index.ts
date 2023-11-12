import { api } from "@/services/api";
import players from "./list";
import searchPlayers from "./searchPlayers";

export const playersApi = api.injectEndpoints({
	endpoints: (build) => ({
		players: players(build),
		searchPlayers: searchPlayers(build)
	}),
	overrideExisting: false
});

export const { usePlayersQuery, useSearchPlayersQuery } = playersApi;
