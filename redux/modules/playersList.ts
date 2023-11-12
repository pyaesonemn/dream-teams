import { createSlice } from "@reduxjs/toolkit";
import { PLAYERS_LIST_SLICE } from "../constants";

const initialState = {
	pageNumber: "1",
	keyword: ""
};

export const playersListSlice = createSlice({
	name: PLAYERS_LIST_SLICE,
	initialState,
	reducers: {
		incrementPageNumber: (state) => {
			state.pageNumber = String(Number(state.pageNumber) + 1);
		},
		setKeyword: (state, action) => {
			state.keyword = action.payload;
		}
	}
});

export const playersListReducer = playersListSlice.reducer;
export const { incrementPageNumber, setKeyword } = playersListSlice.actions;
