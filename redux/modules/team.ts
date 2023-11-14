import { createSlice } from "@reduxjs/toolkit";
import { TEAM_SLICE } from "../constants";
import { Team } from "@/utils";

export type Member = {
	playerName: string;
	teamName: string;
};

type TeamState = {
	members: Array<Member>;
	teams: Array<Team>;
};

const initialState: TeamState = {
	members: [],
	teams: []
};

export const teamSlice = createSlice({
	name: TEAM_SLICE,
	initialState,
	reducers: {
		setMembers: (state, action) => {
			state.members = action.payload;
		},
		addMember: (state, action) => {
			const newMember: Member = action.payload;
			state.members?.length > 0
				? (state.members = [...state.members, newMember])
				: (state.members = [newMember]);
		},
		removeMember: (state, action) => {
			const playerNameToRemove: string = action.payload;
			state.members = state.members.filter(
				(member) => member.playerName !== playerNameToRemove
			);
		},
		resetMembers: () => initialState,
		setTeams: (state, action) => {
			state.teams = action.payload;
		}
	}
});

export const teamReducer = teamSlice.reducer;
export const { addMember, removeMember, setMembers, resetMembers, setTeams } = teamSlice.actions;
