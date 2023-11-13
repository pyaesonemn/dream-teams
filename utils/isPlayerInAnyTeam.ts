import { Team } from ".";

export const isPlayerInAnyTeam = (playerName: string, teams: Array<Team> | undefined) => {
	return teams?.some((team) => team?.players?.some((player) => player.name === playerName));
};
