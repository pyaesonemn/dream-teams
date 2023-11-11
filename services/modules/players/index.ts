import { api } from "@/services/api";
import players from "./list";

export const playersApi = api.injectEndpoints({
	endpoints: (build) => ({
		players: players(build)
	}),
	overrideExisting: false
});

export const { usePlayersQuery } = playersApi;
