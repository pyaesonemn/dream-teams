import { Team } from ".";

export const getTeambyName = (teamName: string, teamsArray: Array<Team> | undefined) => {
	return teamsArray?.find((team) => team.name === teamName);
};
