import { CurrentUser } from ".";

export const deleteTeambyName = (teamName: string, currentUser: CurrentUser) => {
	const updatedTeams = currentUser.teams?.map((team) => {
		if (team.name !== teamName) {
			return team;
		}
	});
	const updatedCurrentUser = { ...currentUser, teams: updatedTeams };
	return updatedCurrentUser;
};
