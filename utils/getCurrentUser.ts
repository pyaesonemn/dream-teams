type Player = {
	name: string;
	id: number | string;
	position: string;
};

export type Team = {
	name: string;
	playerCount: number | string;
	region: string;
	country: string;
	players?: Array<Player>;
};

type CurrentUser = {
	username: string | null;
	password: string;
	teams?: Array<Team>;
};

export const getCurrentUser = (currentUserName: string | null): CurrentUser => {
	const users = JSON.parse(localStorage.getItem("users") || "[]");
	const currentUser = users.find((user: any) => user.username === currentUserName);
	return currentUser;
};
