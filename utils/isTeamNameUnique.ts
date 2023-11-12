import { Team } from ".";

export const isTeamNameUnique = (teamName: string, teams: Array<Team>) => {
	return !teams.some((team: Team) => team.name === teamName);
};
