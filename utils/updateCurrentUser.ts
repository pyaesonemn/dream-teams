import { CurrentUser } from ".";

export const updateCurrentUser = (updatedUser: CurrentUser) => {
	if (typeof window !== "undefined") {
		const users = JSON.parse(window.localStorage.getItem("users") || "[]");
		const updatedUsers = users.map((user: CurrentUser) => {
			if (user.username === updatedUser.username) {
				return updatedUser;
			}
			return user;
		});
		localStorage.setItem("users", JSON.stringify(updatedUsers));
	} else {
		return updatedUser;
	}
};
